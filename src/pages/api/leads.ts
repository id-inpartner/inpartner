import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllLeadsAsync, createLeadAsync } from '@/chatbot/lib/db'
import {
  sendLeadNotification,
  generateConsultationRef,
  generateClientWhatsAppUrl,
} from '@/chatbot/lib/notifications'
import { isAdminAuthenticated } from '@/chatbot/lib/auth'
import { validatePhoneNumber, validateEmail } from '@/chatbot/lib/validation'
import { checkRateLimitAsync } from '@/chatbot/lib/rateLimit'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      if (!isAdminAuthenticated(req as any)) {
        return res.status(401).json({
          error:
            'Unauthorized: Inpartner corporate administrative access required.',
        })
      }

      const leads = await getAllLeadsAsync()
      return res.status(200).json({ success: true, count: leads.length, leads })
    } catch (error: any) {
      const requestId = `err_${Date.now()}_${Math.random()
        .toString(36)
        .substring(2, 6)}`
      console.error(`[Error in GET /api/leads] [ID: ${requestId}]:`, error)
      return res
        .status(500)
        .json({ error: 'Internal server error', request_id: requestId })
    }
  }

  if (req.method === 'POST') {
    try {
      // 1. Rate Limiting Protection (Max 5 submissions per 10 minutes per IP)
      const rateLimit = await checkRateLimitAsync(req, {
        identifier: 'leads_submit',
        limit: 5,
        windowMs: 10 * 60 * 1000,
      })

      if (!rateLimit.isAllowed) {
        return res.status(429).json({
          error: `Submission limit reached. Please wait ${Math.ceil(
            rateLimit.resetInSeconds / 60
          )} minute(s) before submitting another inquiry.`,
        })
      }

      const body = req.body || {}
      const {
        conversation_id,
        name,
        company,
        job_title,
        company_scale,
        industry,
        timeline,
        email,
        phone,
        business_need,
        notes,
        diagnostic_summary,
        diagnostic_data,
        attribution,
      } = body

      // Field length safety limits
      if (
        !name ||
        typeof name !== 'string' ||
        name.trim().length < 2 ||
        name.trim().length > 100
      ) {
        return res
          .status(400)
          .json({ error: 'Full name must be between 2 and 100 characters.' })
      }

      if (
        company &&
        typeof company === 'string' &&
        company.trim().length > 120
      ) {
        return res
          .status(400)
          .json({ error: 'Company name cannot exceed 120 characters.' })
      }

      if (
        job_title &&
        typeof job_title === 'string' &&
        job_title.trim().length > 100
      ) {
        return res.status(400).json({
          error: 'Job title / designation cannot exceed 100 characters.',
        })
      }

      if (
        !business_need ||
        typeof business_need !== 'string' ||
        !business_need.trim() ||
        business_need.trim().length > 200
      ) {
        return res.status(400).json({
          error:
            'Advisory need selection is required (maximum 200 characters).',
        })
      }

      if (notes && typeof notes === 'string' && notes.trim().length > 1000) {
        return res
          .status(400)
          .json({ error: 'Notes cannot exceed 1,000 characters.' })
      }

      // Phone validation
      let validatedPhone = ''
      if (phone && typeof phone === 'string' && phone.trim()) {
        const phoneResult = validatePhoneNumber(phone)
        if (!phoneResult.isValid) {
          return res.status(400).json({
            error:
              phoneResult.error || 'Invalid phone or WhatsApp number format.',
          })
        }
        validatedPhone = phoneResult.cleanPhone
      } else if (!email) {
        return res.status(400).json({
          error:
            'Please provide either a WhatsApp phone number or business email for consultation follow-up.',
        })
      }

      // Email validation (if provided)
      if (email && typeof email === 'string' && email.trim()) {
        if (!validateEmail(email)) {
          return res.status(400).json({
            error: 'Invalid email address format (e.g. name@company.com).',
          })
        }
      }

      const lead = await createLeadAsync({
        conversation_id,
        name: name.trim(),
        company: company?.trim() || '',
        job_title:
          job_title && typeof job_title === 'string' && job_title.trim()
            ? job_title.trim()
            : undefined,
        company_scale:
          company_scale &&
          typeof company_scale === 'string' &&
          company_scale.trim()
            ? (company_scale as any)
            : undefined,
        industry:
          industry && typeof industry === 'string' && industry.trim()
            ? (industry as any)
            : undefined,
        timeline:
          timeline && typeof timeline === 'string' && timeline.trim()
            ? (timeline as any)
            : undefined,
        email: email?.trim() || '',
        phone: validatedPhone || phone?.trim() || '',
        business_need: business_need.trim(),
        notes: notes?.trim() || '',
        diagnostic_summary:
          diagnostic_summary &&
          typeof diagnostic_summary === 'string' &&
          diagnostic_summary.trim()
            ? diagnostic_summary.trim().slice(0, 1000)
            : undefined,
        diagnostic_data:
          diagnostic_data && typeof diagnostic_data === 'object'
            ? diagnostic_data
            : undefined,
        attribution:
          attribution && typeof attribution === 'object'
            ? {
                utm_source:
                  typeof attribution.utm_source === 'string'
                    ? attribution.utm_source.slice(0, 100)
                    : undefined,
                utm_medium:
                  typeof attribution.utm_medium === 'string'
                    ? attribution.utm_medium.slice(0, 100)
                    : undefined,
                utm_campaign:
                  typeof attribution.utm_campaign === 'string'
                    ? attribution.utm_campaign.slice(0, 150)
                    : undefined,
                utm_term:
                  typeof attribution.utm_term === 'string'
                    ? attribution.utm_term.slice(0, 150)
                    : undefined,
                utm_content:
                  typeof attribution.utm_content === 'string'
                    ? attribution.utm_content.slice(0, 150)
                    : undefined,
                referrer_url:
                  typeof attribution.referrer_url === 'string'
                    ? attribution.referrer_url.slice(0, 500)
                    : undefined,
                landing_page:
                  typeof attribution.landing_page === 'string'
                    ? attribution.landing_page.slice(0, 500)
                    : undefined,
                captured_at:
                  typeof attribution.captured_at === 'string'
                    ? attribution.captured_at
                    : new Date().toISOString(),
              }
            : undefined,
        status: 'new',
      })

      const refCode = generateConsultationRef(lead.id)
      const clientWhatsAppUrl = generateClientWhatsAppUrl(
        lead,
        refCode,
        body.lang || 'id'
      )

      // Dispatch async lead notifications
      const dispatchNotifications = async () => {
        try {
          await sendLeadNotification(lead, {
            lang: body.lang,
            refCode,
          })
        } catch (err) {
          console.warn(
            `[Async Lead Notification Error] [Lead: ${lead.id}]:`,
            err
          )
        }
      }

      if (typeof queueMicrotask !== 'undefined') {
        queueMicrotask(dispatchNotifications)
      } else {
        setTimeout(dispatchNotifications, 0)
      }

      return res.status(200).json({
        success: true,
        message:
          'Inquiry saved successfully. The Inpartner team will contact you promptly.',
        ref_code: refCode,
        whatsapp_url: clientWhatsAppUrl,
        lead: {
          id: lead.id,
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          company: lead.company,
          status: lead.status,
          score: (lead as any).score,
          scoreCategory: (lead as any).scoreCategory,
        },
      })
    } catch (error: any) {
      const requestId = `err_${Date.now()}_${Math.random()
        .toString(36)
        .substring(2, 6)}`
      console.error(`[Error in /api/leads] [ID: ${requestId}]:`, error)
      return res
        .status(500)
        .json({ error: 'Internal server error', request_id: requestId })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  return res.status(405).json({ error: `Method ${req.method} not allowed` })
}
