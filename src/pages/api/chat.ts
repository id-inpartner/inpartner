import type { NextApiRequest, NextApiResponse } from 'next'
import {
  generateConsultationResponse,
  generateConsultationResponseStream,
  AIStreamEvent,
} from '@/chatbot/lib/ai'
import { checkRateLimitAsync } from '@/chatbot/lib/rateLimit'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // 1. Rate Limiting Protection (Max 30 inquiries per minute per IP)
    const rateLimit = await checkRateLimitAsync(req, {
      identifier: 'chat_api',
      limit: 30,
      windowMs: 60 * 1000,
    })

    if (!rateLimit.isAllowed) {
      res.setHeader('Retry-After', String(rateLimit.resetInSeconds))
      res.setHeader('X-RateLimit-Limit', '30')
      res.setHeader('X-RateLimit-Remaining', '0')
      return res.status(429).json({
        error: `Too many requests. Please wait ${rateLimit.resetInSeconds} seconds before sending another inquiry.`,
      })
    }

    const {
      sessionId,
      message,
      selectedNeed,
      chatHistory,
      stream = true,
    } = req.body || {}

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Message is required' })
    }

    if (message.length > 2000) {
      return res.status(400).json({
        error: 'Message exceeds maximum allowed length of 2,000 characters.',
      })
    }

    // chatHistory is client-supplied: bound its size and shape before it reaches the model
    const safeHistory: { sender: 'user' | 'bot'; text: string }[] = (
      Array.isArray(chatHistory) ? chatHistory : []
    )
      .filter(
        (m: any) =>
          m &&
          (m.sender === 'user' || m.sender === 'bot') &&
          typeof m.text === 'string' &&
          m.text.trim()
      )
      .slice(-20)
      .map((m: any) => ({ sender: m.sender, text: m.text.slice(0, 2000) }))

    const safeNeed =
      typeof selectedNeed === 'string' && selectedNeed.trim()
        ? selectedNeed.trim().slice(0, 200)
        : undefined

    const session =
      (typeof sessionId === 'string' &&
        /^[A-Za-z0-9_-]{1,100}$/.test(sessionId) &&
        sessionId) ||
      `sess_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`
    // Mode A: Non-streaming legacy mode (if stream === false)
    if (stream === false) {
      const aiResponse = await generateConsultationResponse(
        message,
        safeHistory,
        safeNeed
      )

      return res.status(200).json({
        sessionId: session,
        ...aiResponse,
      })
    }

    // Mode B: Server-Sent Events (SSE) Streaming
    res.setHeader('Content-Type', 'text/event-stream; charset=utf-8')
    res.setHeader('Cache-Control', 'no-cache, no-transform')
    res.setHeader('Connection', 'keep-alive')
    res.setHeader('X-Accel-Buffering', 'no')
    if (typeof (res as any).flushHeaders === 'function') {
      ;(res as any).flushHeaders()
    }

    const generator = generateConsultationResponseStream(
      message,
      safeHistory,
      safeNeed,
      true
    )

    try {
      for await (const event of generator) {
        if (event.type === 'start') {
          const startData = {
            ...event,
            sessionId: session,
          }
          res.write(`data: ${JSON.stringify(startData)}\n\n`)
        } else if (event.type === 'chunk') {
          res.write(`data: ${JSON.stringify(event)}\n\n`)
        } else if (event.type === 'done') {
          const doneData = {
            ...event,
            sessionId: session,
          }
          res.write(`data: ${JSON.stringify(doneData)}\n\n`)
        }
      }
    } catch (streamErr: any) {
      const reqId = `err_${Date.now()}_${Math.random()
        .toString(36)
        .substring(2, 6)}`
      console.error(`[Error in chat stream] [ID: ${reqId}]:`, streamErr)
      res.write(
        `data: ${JSON.stringify({
          type: 'error',
          error: 'An error occurred while streaming response.',
          requestId: reqId,
        })}\n\n`
      )
    } finally {
      res.end()
    }
  } catch (error: any) {
    const requestId = `err_${Date.now()}_${Math.random()
      .toString(36)
      .substring(2, 6)}`
    console.error(`[Error in /api/chat] [ID: ${requestId}]:`, error)
    if (!res.headersSent) {
      return res
        .status(500)
        .json({ error: 'Internal server error', request_id: requestId })
    } else {
      res.end()
    }
  }
}
