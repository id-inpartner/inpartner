import type { NextApiRequest, NextApiResponse } from 'next'
import {
  getAnalyticsSummaryAsync,
  logAnalyticsEventAsync,
  AnalyticsEvent,
} from '@/chatbot/lib/db'
import { isAdminAuthenticated } from '@/chatbot/lib/auth'
import { checkRateLimitAsync } from '@/chatbot/lib/rateLimit'

const ALLOWED_ANALYTICS_EVENTS = new Set<string>([
  'chatbot_opened',
  'conversation_started',
  'intent_selected',
  'question_asked',
  'service_viewed',
  'lead_form_opened',
  'lead_submitted',
  'contact_clicked',
  'conversation_completed',
  'human_handoff',
])

const MAX_ID_LENGTH = 128
const MAX_METADATA_BYTES = 4096

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      if (!isAdminAuthenticated(req as any)) {
        return res.status(401).json({
          error: 'Unauthorized: Inpartner administrative privileges required.',
        })
      }

      const summary = await getAnalyticsSummaryAsync()
      return res.status(200).json({ success: true, ...summary })
    } catch (error: any) {
      const requestId = `err_${Date.now()}_${Math.random()
        .toString(36)
        .substring(2, 6)}`
      console.error(`[Error in GET /api/analytics] [ID: ${requestId}]:`, error)
      return res
        .status(500)
        .json({ error: 'Internal server error', request_id: requestId })
    }
  }

  if (req.method === 'POST') {
    try {
      // 1. Ingestion rate limiter: max 60 events/min per IP
      const rateLimit = await checkRateLimitAsync(req, {
        identifier: 'analytics_post',
        limit: 60,
        windowMs: 60 * 1000,
      })

      if (!rateLimit.isAllowed) {
        return res.status(429).json({
          error: 'Too many analytics events. Telemetry ingestion throttled.',
        })
      }

      const body = req.body || {}
      const { event_name, session_id, conversation_id, metadata } = body

      // 2. Strict Event Name Allowlist Validation
      if (
        !event_name ||
        typeof event_name !== 'string' ||
        !ALLOWED_ANALYTICS_EVENTS.has(event_name)
      ) {
        return res
          .status(400)
          .json({ error: 'Invalid or disallowed event_name' })
      }

      // 3. Session & Conversation ID Bounds
      if (
        !session_id ||
        typeof session_id !== 'string' ||
        session_id.length > MAX_ID_LENGTH
      ) {
        return res
          .status(400)
          .json({ error: 'Valid session_id (max 128 chars) is required' })
      }

      if (
        conversation_id &&
        (typeof conversation_id !== 'string' ||
          conversation_id.length > MAX_ID_LENGTH)
      ) {
        return res
          .status(400)
          .json({ error: 'conversation_id must be a string up to 128 chars' })
      }

      // 4. Metadata Payload Structure & Size Bounds
      if (metadata !== undefined) {
        if (
          typeof metadata !== 'object' ||
          metadata === null ||
          Array.isArray(metadata)
        ) {
          return res
            .status(400)
            .json({ error: 'metadata must be a key-value object' })
        }
        const serialized = JSON.stringify(metadata)
        if (serialized.length > MAX_METADATA_BYTES) {
          return res
            .status(400)
            .json({ error: 'metadata exceeds maximum payload limit (4KB)' })
        }
      }

      const event = await logAnalyticsEventAsync({
        event_name: event_name as AnalyticsEvent['event_name'],
        session_id,
        conversation_id,
        metadata,
      })

      return res.status(200).json({ success: true, event })
    } catch (error: any) {
      const requestId = `err_${Date.now()}_${Math.random()
        .toString(36)
        .substring(2, 6)}`
      console.error(`[Error in POST /api/analytics] [ID: ${requestId}]:`, error)
      return res
        .status(500)
        .json({ error: 'Internal server error', request_id: requestId })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  return res.status(405).json({ error: `Method ${req.method} not allowed` })
}
