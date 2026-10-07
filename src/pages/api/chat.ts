import type { NextApiRequest, NextApiResponse } from 'next'
import {
  getOrCreateConversationAsync,
  addMessageAsync,
  updateConversationIntentAsync,
  logAnalyticsEventAsync,
} from '@/chatbot/lib/db'
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

    const session =
      sessionId ||
      `sess_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`
    const conversation = await getOrCreateConversationAsync(
      session,
      selectedNeed
    )

    // Save user message to database
    await addMessageAsync({
      conversation_id: conversation.id,
      sender: 'user',
      message: message.trim(),
      intent: selectedNeed || undefined,
    })

    // Track analytics event: question_asked
    logAnalyticsEventAsync({
      event_name: 'question_asked',
      session_id: session,
      conversation_id: conversation.id,
      metadata: { query: message, selectedNeed },
    }).catch(() => {})

    // Mode A: Non-streaming legacy mode (if stream === false)
    if (stream === false) {
      const aiResponse = await generateConsultationResponse(
        message,
        chatHistory || [],
        selectedNeed
      )

      await updateConversationIntentAsync(conversation.id, aiResponse.intent)
      await addMessageAsync({
        conversation_id: conversation.id,
        sender: 'bot',
        message: aiResponse.answer,
        intent: aiResponse.intent,
        metadata: {
          recommended_service: aiResponse.recommendedService,
          sources: aiResponse.sources,
          suggest_lead_capture: aiResponse.suggestLeadCapture,
          quick_actions: aiResponse.quickActions,
          provider: aiResponse.provider,
          model: aiResponse.model,
        },
      })

      if (aiResponse.isFallback) {
        logAnalyticsEventAsync({
          event_name: 'human_handoff',
          session_id: session,
          conversation_id: conversation.id,
          metadata: { reason: 'fallback_unknown_query' },
        }).catch(() => {})
      }

      return res.status(200).json({
        sessionId: session,
        conversationId: conversation.id,
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
      chatHistory || [],
      selectedNeed,
      true
    )

    let finalResponse: Extract<AIStreamEvent, { type: 'done' }> | null = null

    try {
      for await (const event of generator) {
        if (event.type === 'start') {
          const startData = {
            ...event,
            sessionId: session,
            conversationId: conversation.id,
          }
          res.write(`data: ${JSON.stringify(startData)}\n\n`)
        } else if (event.type === 'chunk') {
          res.write(`data: ${JSON.stringify(event)}\n\n`)
        } else if (event.type === 'done') {
          finalResponse = event
          const doneData = {
            ...event,
            sessionId: session,
            conversationId: conversation.id,
          }
          res.write(`data: ${JSON.stringify(doneData)}\n\n`)
        }
      }

      if (finalResponse) {
        await addMessageAsync({
          conversation_id: conversation.id,
          sender: 'bot',
          message: finalResponse.fullAnswer,
          intent: finalResponse.intent,
          metadata: {
            recommended_service: finalResponse.recommendedService,
            sources: finalResponse.sources,
            suggest_lead_capture: finalResponse.suggestLeadCapture,
            quick_actions: finalResponse.quickActions,
            provider: finalResponse.provider,
            model: finalResponse.model,
          },
        })

        await updateConversationIntentAsync(
          conversation.id,
          finalResponse.intent
        )

        if (finalResponse.isFallback) {
          logAnalyticsEventAsync({
            event_name: 'human_handoff',
            session_id: session,
            conversation_id: conversation.id,
            metadata: { reason: 'fallback_unknown_query' },
          }).catch(() => {})
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
