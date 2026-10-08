'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  ChevronDown,
  ChevronRight,
  ArrowUp,
  TrendingUp,
  Landmark,
  Compass,
  X,
  Phone,
  Building2,
  Sparkles,
  Square,
  RotateCcw,
} from 'lucide-react'
import {
  INPARTNER_CONFIG,
  getWhatsAppUrl,
  PROACTIVE_TRIGGER_CONFIG,
} from '../../chatbot/lib/config'
import {
  NudgeTriggerType,
  canShowProactiveNudge,
  markNudgeDismissed,
  markNudgeShown,
  recordVisitorSession,
  getNudgeMessage,
} from '../../chatbot/lib/proactiveNudge'
import { captureMarketingAttribution } from '../../chatbot/lib/attribution'
import type { AttributionData } from '../../chatbot/lib/db'
import ChatbotIcon from './ChatbotIcon'
import {
  DiagnosticPillarKey,
  DiagnosticOption,
  getDiagnosticTree,
  detectDiagnosticPillar,
  generateScopingSummary,
} from '../../chatbot/lib/diagnostic'

export interface ActiveDiagnosticSession {
  pillarKey: DiagnosticPillarKey
  currentStep: 1 | 2 | 'completed'
  step1ChoiceId?: string
  step1ChoiceLabel?: string
  step2ChoiceId?: string
  step2ChoiceLabel?: string
  scopingSummary?: string
}

interface ChatMessage {
  id: string
  sender: 'user' | 'bot' | 'system'
  text: string
  timestamp: string
  recommendedService?: string
  sources?: string[]
  suggestLeadCapture?: boolean
  followUpQuestions?: string[]
  quickActions?: string[]
  isFallback?: boolean
  isStreaming?: boolean
  diagnosticPillar?: DiagnosticPillarKey
}

interface ChatWidgetProps {
  initialOpen?: boolean
  embeddedMode?: boolean
  onClose?: () => void
}

export default function ChatWidget({
  initialOpen = false,
  embeddedMode = false,
  onClose,
}: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(initialOpen)

  const handleCloseWidget = () => {
    setIsOpen(false)
    if (onClose) {
      onClose()
    }
    if (typeof window !== 'undefined') {
      window.parent?.postMessage({ type: 'inpartner_close_chat' }, '*')
    }
  }
  const [sessionId, setSessionId] = useState('')
  const [conversationId, setConversationId] = useState<string | null>(null)
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedNeed, setSelectedNeed] = useState<string | null>(null)
  const [showTeaser, setShowTeaser] = useState(false)
  const [nudgeType, setNudgeType] = useState<NudgeTriggerType>('dwell_time')
  const [isReturningVisitor, setIsReturningVisitor] = useState(false)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const [attribution, setAttribution] = useState<AttributionData | null>(null)
  const [lang, setLang] = useState<'id' | 'en' | 'ko'>('id')

  // Trilingual UI Translations (ID / EN / KO)
  const t =
    lang === 'id'
      ? {
          onlineStatus: 'Online • Siap Membantu',
          newChat: 'Percakapan baru',
          chatWa: 'Chat WhatsApp Resmi',
          callOffice: 'Hubungi Kantor Pusat',
          privacyPolicy: 'Kebijakan Privasi',
          title: 'Solusi Bisnis Apa yang Anda Butuhkan?',
          subtitle:
            'Inpartner AI siap menganalisis tantangan korporasi dan merekomendasikan solusi konsultasi bisnis yang tepat.',
          featured: {
            title: 'Strategi Korporat & Konsultasi Investasi',
            desc: 'Corporate strategy, M&A Advisory, IPO, Feasibility Study & Investment Advisory',
            query:
              'Bagaimana Inpartner dapat mendampingi strategi korporat, investasi, atau advisory pasar untuk perusahaan saya?',
            intent: 'strategy_corporate',
          },
          dividerText: 'JELAJAHI LAYANAN KONSULTASI LAINNYA',
          secondary1: {
            title: 'Akses Pasar & Ekspansi Bisnis',
            query:
              'Saya membutuhkan bantuan untuk riset pasar, strategi masuk pasar baru, atau business matching.',
            intent: 'market_access',
          },
          secondary2: {
            title: 'Diagnostik Kebutuhan Bisnis',
            query:
              'Saya belum yakin layanan apa yang paling dibutuhkan perusahaan saya. Mohon pandu melalui diagnostik kebutuhan bisnis.',
            intent: 'other',
          },
          inputPlaceholder:
            'Tanyakan seputar solusi bisnis atau kendala perusahaan Anda...',
          sending: 'Sedang mengetik...',
          stopGenerating: 'Hentikan respon',
          disclaimer:
            'AI dapat melakukan kesalahan. Silakan konfirmasi informasi dengan tim konsultan.',
          sources: 'Sumber Resmi:',
          service: 'Layanan:',
          generating: 'Menyusun analisis...',
          interestedCta: 'Tertarik dengan Konsultasi Strategis Lebih Lanjut?',
          interestedDesc:
            'Konsultasikan kebutuhan strategis dan tantangan bisnis Anda secara langsung bersama tim penasihat senior Inpartner.',
          diagnosticBadge: 'Diagnostik Penjajakan Kebutuhan Bisnis',
          diagnosticStep1: 'Langkah 1/2',
          diagnosticStep2: 'Langkah 2/2',
          diagnosticCompletedBadge: 'Scoping Diagnostik Selesai',
          diagnosticWaWithScoping: 'Konsultasi via WhatsApp',
          diagnosticChangeStep1: 'Ubah Pilihan Langkah 1',
          diagnosticRestart: 'Ulangi Diagnostik',
        }
      : lang === 'ko'
      ? {
          onlineStatus: '온라인 • 실시간 상담 가능',
          newChat: '새 대화 시작',
          chatWa: '공식 WhatsApp 문의',
          callOffice: '본사 전화 문의',
          privacyPolicy: '개인정보 처리방침',
          title: '어떤 비즈니스 솔루션이 필요하십니까?',
          subtitle:
            '인파트너(Inpartner) AI가 기업의 주요 과제를 분석하고 최적화된 전략 자문 솔루션을 제시합니다.',
          featured: {
            title: '기업전략 & 투자 자문',
            desc: '기업 전략, M&A, IPO, 타당성 연구 및 투자 자문 서비스',
            query:
              '인파트너는 기업전략, 투자 자문, 시장 접근 전략을 어떻게 지원합니까?',
            intent: 'strategy_corporate',
          },
          dividerText: '주요 자문 분야 둘러보기',
          secondary1: {
            title: '시장 접근 & 사업 확장',
            query:
              '시장 조사, 신규 시장 진입 전략, 또는 비즈니스 매칭 서비스에 대한 자문이 필요합니다.',
            intent: 'market_access',
          },
          secondary2: {
            title: '기업 경영 진단 및 솔루션 매칭',
            query:
              '현재 기업에 가장 필요한 솔루션이 무엇인지 진단을 받고 싶습니다.',
            intent: 'other',
          },
          inputPlaceholder: '기업 경영 과제 또는 문의 사항을 입력하세요...',
          sending: '답변 작성 중...',
          stopGenerating: '답변 생성 중지',
          disclaimer:
            'AI 응답은 참고용입니다. 세부 사항은 인파트너 전문 컨설턴트와 확인하세요.',
          sources: '참조 공식 문서:',
          service: '추천 서비스:',
          generating: '분석 내용 생성 중...',
          interestedCta: '심층 비즈니스 자문이 필요하십니까?',
          interestedDesc:
            '기업의 전략적 목표와 경영 과제를 인파트너 수석 자문팀과 실시간으로 상담해 보세요.',
          diagnosticBadge: '맞춤형 기업 사전 진단 (Consultative Discovery)',
          diagnosticStep1: '1단계 / 2단계',
          diagnosticStep2: '2단계 / 2단계',
          diagnosticCompletedBadge: '사전 진단 요약 완료',
          diagnosticWaWithScoping: '수석 파트너 WhatsApp 실시간 문의',
          diagnosticChangeStep1: '1단계 선택 변경',
          diagnosticRestart: '진단 다시 시작하기',
        }
      : {
          onlineStatus: 'Online • Ready to assist',
          newChat: 'New conversation',
          chatWa: 'Official WhatsApp Chat',
          callOffice: 'Call Corporate Office',
          privacyPolicy: 'Privacy Policy',
          title: 'What Business Solutions Do You Need?',
          subtitle:
            'Inpartner AI is ready to analyze your corporate challenges and recommend tailored strategic advisory solutions.',
          featured: {
            title: 'Corporate Strategy & Investment Advisory',
            desc: 'Corporate strategy, M&A Advisory, IPO, Feasibility Studies & Investment Advisory',
            query:
              'How does Inpartner assist with corporate strategy, investment advisory, and market access for my company?',
            intent: 'strategy_corporate',
          },
          dividerText: 'EXPLORE OTHER ADVISORY SERVICES',
          secondary1: {
            title: 'Market Access & Business Expansion',
            query:
              'I need assistance with market research, market entry strategy, or business matching.',
            intent: 'market_access',
          },
          secondary2: {
            title: 'Business Needs Diagnosis',
            query:
              'I am not sure which service my company needs most. Please guide me through a business needs diagnosis.',
            intent: 'other',
          },
          inputPlaceholder:
            "Ask about business solutions or your company's challenges...",
          sending: 'Thinking...',
          stopGenerating: 'Stop generating',
          disclaimer:
            'AI can make mistakes. Double-check replies with our advisory team.',
          sources: 'Sources:',
          service: 'Service:',
          generating: 'Generating response...',
          interestedCta: 'Interested in Further Corporate Advisory?',
          interestedDesc:
            'Consult your strategic goals and business challenges directly with Inpartner senior advisors.',
          diagnosticBadge: 'Consultative Discovery Diagnostic',
          diagnosticStep1: 'Step 1 of 2',
          diagnosticStep2: 'Step 2 of 2',
          diagnosticCompletedBadge: 'Preliminary Scoping Complete',
          diagnosticWaWithScoping: 'Fast-Track WhatsApp Discussion',
          diagnosticChangeStep1: 'Change Step 1 Choice',
          diagnosticRestart: 'Restart Diagnostic',
        }

  // Inpartner Agent Configuration derived from active language
  const agentConfig = {
    name: 'Inpartner Agent',
    title: t.title,
    subtitle: t.subtitle,
    featured: t.featured,
    dividerText: t.dividerText,
    secondary1: t.secondary1,
    secondary2: t.secondary2,
    inputPlaceholder: t.inputPlaceholder,
  }

  const [activeDiagnostic, setActiveDiagnostic] =
    useState<ActiveDiagnosticSession | null>(null)

  // Messages state
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isStreaming, setIsStreaming] = useState(false)
  const [mounted, setMounted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  // Initialize session and restore persisted conversation
  useEffect(() => {
    setMounted(true)
    let sess = localStorage.getItem('inpartner_chat_session')
    if (!sess) {
      sess = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`
      localStorage.setItem('inpartner_chat_session', sess)
    }
    setSessionId(sess)

    // Restore saved language preference
    try {
      const savedLang = localStorage.getItem('inpartner_chat_lang') as
        | 'id'
        | 'en'
        | 'ko'
        | null
      if (savedLang === 'id' || savedLang === 'en' || savedLang === 'ko') {
        setLang(savedLang)
      }
    } catch {}

    // Restore previously saved conversation state
    try {
      const savedMessagesStr = localStorage.getItem(
        `inpartner_chat_messages_${sess}`
      )
      if (savedMessagesStr) {
        const savedMessages = JSON.parse(savedMessagesStr)
        if (Array.isArray(savedMessages) && savedMessages.length > 0) {
          setMessages(
            savedMessages.map((m: ChatMessage) => ({
              ...m,
              isStreaming: false,
            }))
          )
        }
      }

      const savedConvId = localStorage.getItem(`inpartner_conv_id_${sess}`)
      if (savedConvId) {
        setConversationId(savedConvId)
      }

      const savedNeed = localStorage.getItem(`inpartner_selected_need_${sess}`)
      if (savedNeed) {
        setSelectedNeed(savedNeed)
      }

      const savedDiagStr = localStorage.getItem(`inpartner_diagnostic_${sess}`)
      if (savedDiagStr) {
        try {
          const parsedDiag = JSON.parse(savedDiagStr)
          if (parsedDiag && parsedDiag.pillarKey) {
            setActiveDiagnostic(parsedDiag)
          }
        } catch {}
      }
    } catch (err) {
      console.warn('Could not restore chat state from localStorage:', err)
    }
  }, [])

  const handleToggleLanguage = (targetLang?: 'id' | 'en' | 'ko') => {
    let next: 'id' | 'en' | 'ko'
    if (targetLang) {
      next = targetLang
    } else {
      // Cycle: id -> en -> ko -> id
      if (lang === 'id') next = 'en'
      else if (lang === 'en') next = 'ko'
      else next = 'id'
    }
    setLang(next)
    try {
      localStorage.setItem('inpartner_chat_lang', next)
    } catch {}
  }

  const trackEvent = (eventName: string, metadata?: Record<string, any>) => {
    if (!sessionId) return
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_name: eventName,
        session_id: sessionId,
        conversation_id: conversationId,
        metadata: { ...metadata, lang },
      }),
    }).catch(() => {})
  }

  // Auto-save messages to localStorage
  useEffect(() => {
    if (!mounted || !sessionId) return
    try {
      if (messages.length > 0) {
        localStorage.setItem(
          `inpartner_chat_messages_${sessionId}`,
          JSON.stringify(messages.slice(-60))
        )
      } else {
        localStorage.removeItem(`inpartner_chat_messages_${sessionId}`)
      }
    } catch (err) {
      console.warn('Failed to save chat messages to localStorage:', err)
    }
  }, [messages, sessionId, mounted])

  // Auto-save conversationId
  useEffect(() => {
    if (!mounted || !sessionId) return
    try {
      if (conversationId) {
        localStorage.setItem(`inpartner_conv_id_${sessionId}`, conversationId)
      }
    } catch {}
  }, [conversationId, sessionId, mounted])

  // Auto-save selectedNeed
  useEffect(() => {
    if (!mounted || !sessionId) return
    try {
      if (selectedNeed) {
        localStorage.setItem(
          `inpartner_selected_need_${sessionId}`,
          selectedNeed
        )
      }
    } catch {}
  }, [selectedNeed, sessionId, mounted])

  // Auto-save activeDiagnostic
  useEffect(() => {
    if (!mounted || !sessionId) return
    try {
      if (activeDiagnostic) {
        localStorage.setItem(
          `inpartner_diagnostic_${sessionId}`,
          JSON.stringify(activeDiagnostic)
        )
      } else {
        localStorage.removeItem(`inpartner_diagnostic_${sessionId}`)
      }
    } catch (err) {
      console.warn('Failed to save active diagnostic to localStorage:', err)
    }
  }, [activeDiagnostic, sessionId, mounted])

  // Initialize visitor session & return visitor recognition on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const { isReturning } = recordVisitorSession(window.localStorage)
        setIsReturningVisitor(isReturning)

        // Capture marketing attribution telemetry (UTM parameters, referrer, landing page)
        const attr = captureMarketingAttribution(
          window.location.href,
          document.referrer,
          window.sessionStorage
        )
        setAttribution(attr)
      } catch {}
    }
  }, [])

  // Proactive Advisory Engagement & Exit-Intent Triggers (Issue #8)
  useEffect(() => {
    if (embeddedMode || isOpen || hasUserInteracted) return
    if (!PROACTIVE_TRIGGER_CONFIG.enabled) return

    const canTrigger = canShowProactiveNudge({
      isOpen,
      hasInteracted: hasUserInteracted,
      sessionStorage:
        typeof window !== 'undefined' ? window.sessionStorage : null,
    })
    if (!canTrigger) return

    // 1. Dwell Time Trigger: Configured dwell time (default 25s; 10s for recognized return visitors)
    const dwellSeconds = isReturningVisitor
      ? PROACTIVE_TRIGGER_CONFIG.returnVisitorDwellSeconds
      : PROACTIVE_TRIGGER_CONFIG.dwellTimeSeconds

    const dwellTimer = setTimeout(() => {
      const stillEligible = canShowProactiveNudge({
        isOpen,
        hasInteracted: hasUserInteracted,
        sessionStorage:
          typeof window !== 'undefined' ? window.sessionStorage : null,
      })

      if (stillEligible && !isOpen) {
        setNudgeType(isReturningVisitor ? 'return_visitor' : 'dwell_time')
        setShowTeaser(true)
        markNudgeShown(
          typeof window !== 'undefined' ? window.sessionStorage : null
        )
      }
    }, dwellSeconds * 1000)

    // 2. Desktop Exit-Intent Trigger: Detect cursor movement towards tab closure/address bar
    const handleMouseLeave = (e: MouseEvent) => {
      if (!PROACTIVE_TRIGGER_CONFIG.exitIntentEnabled) return
      // Exit intent condition: cursor moves towards top boundary of window (y <= 15) on desktop
      if (
        e.clientY <= 15 &&
        typeof window !== 'undefined' &&
        window.innerWidth >= 768
      ) {
        const eligibleForExit = canShowProactiveNudge({
          isOpen,
          hasInteracted: hasUserInteracted,
          sessionStorage: window.sessionStorage,
        })

        if (eligibleForExit && !isOpen) {
          setNudgeType('exit_intent')
          setShowTeaser(true)
          markNudgeShown(window.sessionStorage)
        }
      }
    }

    if (typeof document !== 'undefined') {
      document.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      clearTimeout(dwellTimer)
      if (typeof document !== 'undefined') {
        document.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [isOpen, embeddedMode, isReturningVisitor, hasUserInteracted])

  // Track chatbot open
  useEffect(() => {
    if (isOpen && sessionId) {
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_name: 'chatbot_opened',
          session_id: sessionId,
          conversation_id: conversationId,
          metadata: { page: window.location.pathname },
        }),
      }).catch(() => {})
    }
  }, [isOpen, sessionId, conversationId])

  // Scroll to bottom on new message (Instant during streaming to prevent animation jitter, smooth on complete)
  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({
        behavior: isStreaming ? 'auto' : 'smooth',
      })
    }
  }, [messages, isLoading, isStreaming])

  const handleStopGeneration = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
      abortControllerRef.current = null
    }
    setIsStreaming(false)
    setIsLoading(false)
    setMessages((prev) =>
      prev.map((m) => (m.isStreaming ? { ...m, isStreaming: false } : m))
    )
  }

  const handleSendMessage = async (
    textToSend?: string,
    needCategory?: string
  ) => {
    const text = (textToSend || inputMessage).trim()
    if (!text || isLoading || isStreaming) return

    const currentNeed = needCategory || selectedNeed || undefined

    const userMsg: ChatMessage = {
      id: `usr_${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }

    setMessages((prev) => [...prev, userMsg])
    setInputMessage('')
    setIsLoading(true)

    if (textToSend && needCategory) {
      trackEvent('intent_selected', { intent: needCategory, query: textToSend })
    }
    trackEvent('chat_message_sent', {
      text_length: text.length,
      need: currentNeed,
    })

    const abortController = new AbortController()
    abortControllerRef.current = abortController
    const botMsgId = `bot_${Date.now()}`

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/event-stream',
        },
        body: JSON.stringify({
          sessionId,
          message: text,
          selectedNeed: currentNeed,
          chatHistory: messages.map((m) => ({
            sender: m.sender,
            text: m.text,
          })),
          stream: true,
        }),
        signal: abortController.signal,
      })

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const contentType = res.headers.get('content-type') || ''

      if (contentType.includes('text/event-stream') && res.body) {
        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let buffer = ''
        let botMessageCreated = false
        let accumulatedText = ''
        let botMetadata: Partial<ChatMessage> = {}

        setIsStreaming(true)

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split('\n')
          buffer = lines.pop() || ''

          for (const line of lines) {
            const trimmed = line.trim()
            if (!trimmed || !trimmed.startsWith('data: ')) continue
            const jsonStr = trimmed.slice(6).trim()
            if (!jsonStr) continue

            try {
              const event = JSON.parse(jsonStr)

              if (event.type === 'start') {
                if (event.conversationId) {
                  setConversationId(event.conversationId)
                }
                botMetadata = {
                  recommendedService: event.recommendedService,
                  sources: event.sources,
                  isFallback: event.isFallback,
                }
              } else if (event.type === 'chunk') {
                accumulatedText += event.text

                if (!botMessageCreated) {
                  botMessageCreated = true
                  setIsLoading(false) // Stop "thinking" dots, typewriter has begun!
                  setMessages((prev) => [
                    ...prev,
                    {
                      id: botMsgId,
                      sender: 'bot',
                      text: accumulatedText,
                      timestamp: new Date().toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      }),
                      isStreaming: true,
                      ...botMetadata,
                    },
                  ])
                } else {
                  setMessages((prev) =>
                    prev.map((m) =>
                      m.id === botMsgId
                        ? { ...m, text: accumulatedText, isStreaming: true }
                        : m
                    )
                  )
                }
              } else if (event.type === 'done') {
                const finalAnswer = event.fullAnswer || accumulatedText
                if (event.recommendedService) {
                  trackEvent('service_viewed', {
                    service: event.recommendedService,
                  })
                }
                const detectedPillar = detectDiagnosticPillar(
                  event.intent || event.recommendedService || finalAnswer
                )
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === botMsgId
                      ? {
                          ...m,
                          text: finalAnswer,
                          isStreaming: false,
                          recommendedService: event.recommendedService,
                          sources: event.sources,
                          suggestLeadCapture: event.suggestLeadCapture,
                          followUpQuestions: event.followUpQuestions,
                          quickActions: event.quickActions,
                          isFallback: event.isFallback,
                          diagnosticPillar: detectedPillar || undefined,
                        }
                      : m
                  )
                )
              }
            } catch (err) {
              console.warn('Failed to parse SSE chunk:', err)
            }
          }
        }

        // Final safety check after stream ends: ensure isStreaming is marked false
        setMessages((prev) =>
          prev.map((m) =>
            m.id === botMsgId ? { ...m, isStreaming: false } : m
          )
        )
      } else {
        // Fallback for non-streaming JSON responses
        const data = await res.json()
        if (data.conversationId) {
          setConversationId(data.conversationId)
        }

        if (data.recommendedService) {
          trackEvent('service_viewed', { service: data.recommendedService })
        }

        const detectedPillar = detectDiagnosticPillar(
          data.intent || data.recommendedService || data.answer
        )
        const botMsg: ChatMessage = {
          id: botMsgId,
          sender: 'bot',
          text: data.answer,
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
          recommendedService: data.recommendedService,
          sources: data.sources,
          suggestLeadCapture: data.suggestLeadCapture,
          followUpQuestions: data.followUpQuestions,
          quickActions: data.quickActions,
          isFallback: data.isFallback,
          isStreaming: false,
          diagnosticPillar: detectedPillar || undefined,
        }

        setMessages((prev) => [...prev, botMsg])
      }
    } catch (err: any) {
      if (err.name === 'AbortError') {
        console.log('AI generation stopped by user')
      } else {
        const errorMsg: ChatMessage = {
          id: `err_${Date.now()}`,
          sender: 'bot',
          text:
            lang === 'id'
              ? `Mohon maaf, terjadi gangguan koneksi ke server. Silakan coba kembali atau hubungi konsultan kami via WhatsApp di [${
                  INPARTNER_CONFIG.whatsappDisplay
                }](${getWhatsAppUrl()}).`
              : lang === 'ko'
              ? `죄송합니다. 서버 연결에 일시적인 문제가 발생했습니다. 잠시 후 다시 시도해 주시거나 공식 WhatsApp [${
                  INPARTNER_CONFIG.whatsappDisplay
                }](${getWhatsAppUrl()})로 직접 문의해 주십시오.`
              : `We apologize, but a connection error occurred while reaching the server. Please try again or reach our team directly via WhatsApp at [${
                  INPARTNER_CONFIG.whatsappDisplay
                }](${getWhatsAppUrl()}).`,
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
          isFallback: true,
          isStreaming: false,
        }
        setMessages((prev) => [...prev, errorMsg])
      }
    } finally {
      setIsLoading(false)
      setIsStreaming(false)
      abortControllerRef.current = null
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  const handleResetConversation = () => {
    if (sessionId) {
      try {
        localStorage.removeItem(`inpartner_chat_messages_${sessionId}`)
        localStorage.removeItem(`inpartner_conv_id_${sessionId}`)
        localStorage.removeItem(`inpartner_selected_need_${sessionId}`)
        localStorage.removeItem(`inpartner_diagnostic_${sessionId}`)
      } catch (err) {
        console.warn('Could not clear session storage:', err)
      }
    }

    const newSess = `sess_${Date.now()}_${Math.random()
      .toString(36)
      .substring(2, 7)}`
    localStorage.setItem('inpartner_chat_session', newSess)
    setSessionId(newSess)
    setConversationId(null)
    setSelectedNeed(null)
    setActiveDiagnostic(null)
    setMessages([])
  }

  const handleSelectDiagnosticOption = (
    pillarKey: DiagnosticPillarKey,
    stepNum: 1 | 2,
    option: DiagnosticOption
  ) => {
    const tree = getDiagnosticTree(pillarKey)
    if (!tree) return

    const optLabel =
      lang === 'ko'
        ? option.label_ko
        : lang === 'en'
        ? option.label_en
        : option.label_id

    if (stepNum === 1) {
      setActiveDiagnostic({
        pillarKey,
        currentStep: 2,
        step1ChoiceId: option.id,
        step1ChoiceLabel: optLabel,
      })
      trackEvent('diagnostic_step_completed', {
        pillar: pillarKey,
        step: 1,
        choice_id: option.id,
        choice_label: optLabel,
      })
    } else if (stepNum === 2) {
      const s1Id =
        activeDiagnostic?.pillarKey === pillarKey &&
        activeDiagnostic.step1ChoiceId
          ? activeDiagnostic.step1ChoiceId
          : tree.step1.options[0].id
      const s1Label =
        activeDiagnostic?.pillarKey === pillarKey &&
        activeDiagnostic.step1ChoiceLabel
          ? activeDiagnostic.step1ChoiceLabel
          : lang === 'ko'
          ? tree.step1.options[0].label_ko
          : lang === 'en'
          ? tree.step1.options[0].label_en
          : tree.step1.options[0].label_id

      const synthesis = generateScopingSummary(pillarKey, s1Id, option.id, lang)

      const completedState: ActiveDiagnosticSession = {
        pillarKey,
        currentStep: 'completed',
        step1ChoiceId: s1Id,
        step1ChoiceLabel: s1Label,
        step2ChoiceId: option.id,
        step2ChoiceLabel: optLabel,
        scopingSummary: synthesis.scopingSummary,
      }

      setActiveDiagnostic(completedState)

      trackEvent('diagnostic_completed', {
        pillar: pillarKey,
        scoping_summary: synthesis.scopingSummary,
      })
    }
  }

  const handleResetDiagnostic = (pillarKey: DiagnosticPillarKey) => {
    setActiveDiagnostic({
      pillarKey,
      currentStep: 1,
    })
    trackEvent('diagnostic_reset', { pillar: pillarKey })
  }

  if (!mounted) {
    if (embeddedMode) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-white">
          <div className="w-6 h-6 border-2 border-[#005DAD] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )
    }
    return null
  }

  return (
    <div id="inpartner-chatbot-container">
      {/* Floating Launcher Button & Proactive Teaser Bubble (Only Shown When Chat Is Closed) */}
      {!embeddedMode && !isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
          {/* Proactive Bubble Teaser */}
          {showTeaser && (
            <div
              onClick={() => {
                setShowTeaser(false)
                setHasUserInteracted(true)
                markNudgeDismissed(
                  typeof window !== 'undefined' ? window.sessionStorage : null
                )
                setIsOpen(true)
              }}
              className="pointer-events-auto max-w-[320px] w-full bg-white rounded-2xl p-4 shadow-2xl border border-[#0070BA]/20 animate-in fade-in slide-in-from-bottom-3 duration-300 cursor-pointer hover:shadow-3xl hover:border-[#0070BA]/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-bold text-[11px] text-[#0070BA]">
                    {getNudgeMessage(nudgeType, lang).badge}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowTeaser(false)
                    markNudgeDismissed(
                      typeof window !== 'undefined'
                        ? window.sessionStorage
                        : null
                    )
                  }}
                  className="text-slate-400 hover:text-slate-600 p-0.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close teaser"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <h4 className="font-bold text-sm text-slate-900 leading-snug group-hover:text-[#0070BA] transition-colors">
                {getNudgeMessage(nudgeType, lang).title}
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                {getNudgeMessage(nudgeType, lang).body}
              </p>

              <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-[#0070BA] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  {getNudgeMessage(nudgeType, lang).cta}
                </span>
                <span className="text-[10px] text-slate-400">
                  {lang === 'id'
                    ? 'Online 24/7 • Rahasia'
                    : lang === 'ko'
                    ? '24시간 상시 운영 • 비밀보장'
                    : '24/7 • Confidential'}
                </span>
              </div>
            </div>
          )}

          {/* Launcher Row */}
          <div className="flex items-center gap-3 pointer-events-auto">
            {!showTeaser && (
              <button
                onClick={() => {
                  setShowTeaser(false)
                  setHasUserInteracted(true)
                  markNudgeDismissed(
                    typeof window !== 'undefined' ? window.sessionStorage : null
                  )
                  setIsOpen(true)
                }}
                className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold px-3.5 py-2.5 rounded-full shadow-lg border border-slate-200/80 hover:shadow-xl transition-all cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>
                  Consult{' '}
                  <strong className="text-[#0070BA] font-bold">
                    {agentConfig.name}
                  </strong>
                </span>
              </button>
            )}
            <button
              onClick={() => {
                setShowTeaser(false)
                setHasUserInteracted(true)
                markNudgeDismissed(
                  typeof window !== 'undefined' ? window.sessionStorage : null
                )
                setIsOpen(true)
              }}
              aria-label={`Open ${agentConfig.name}`}
              className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0070BA] hover:bg-[#005FA0] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-200 cursor-pointer"
            >
              <div className="flex items-center justify-center">
                <ChatbotIcon
                  size="md"
                  className="transition-transform group-hover:scale-110 duration-200"
                />
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Main Chat Window (Docked cleanly at bottom right, matching Image 1) */}
      {(isOpen || embeddedMode) && (
        <div
          className={`${
            embeddedMode
              ? 'w-full h-full'
              : 'fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-24px)] sm:w-[410px] h-[min(640px,calc(100dvh-24px))] sm:h-[640px] sm:max-h-[calc(100dvh-48px)] rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/90 animate-in fade-in zoom-in-95 duration-200'
          } flex flex-col bg-white overflow-hidden transition-all duration-300 font-sans`}
        >
          {/* Minimalist Top Header (Exact Match Image 1) */}
          <div className="sticky top-0 px-4 sm:px-5 py-3 sm:py-3.5 border-b border-slate-100 flex items-center justify-between bg-white shrink-0 z-20">
            {/* Left: Brand Mascot + Agent Title */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
                <ChatbotIcon size="md" />
              </div>
              <div>
                <h2 className="font-bold text-sm sm:text-[15px] text-[#0070BA] tracking-tight leading-snug">
                  {agentConfig.name}
                </h2>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium tracking-normal mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  {t.onlineStatus}
                </div>
              </div>
            </div>

            {/* Right: Header Action Buttons (New Chat + Lang Toggle + Minimize + Close) */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              {/* New Chat Button (Visible when chat has messages) */}
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={handleResetConversation}
                  className="w-7 h-7 sm:w-7.5 sm:h-7.5 flex items-center justify-center text-slate-400 hover:text-[#0070BA] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  aria-label={t.newChat}
                  title={t.newChat}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Language Switcher Badge Button */}
              <button
                type="button"
                onClick={() => handleToggleLanguage()}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] font-semibold rounded-full border border-slate-200/90 hover:border-[#0070BA] hover:bg-[#0070BA]/5 text-slate-700 transition-colors cursor-pointer flex items-center gap-1 bg-slate-50/70"
                aria-label="Switch Language"
                title="Switch Language"
              >
                <span
                  className={
                    lang === 'id'
                      ? 'text-[#0070BA] font-bold'
                      : 'text-slate-400 font-normal'
                  }
                >
                  ID
                </span>
                <span className="text-slate-300">/</span>
                <span
                  className={
                    lang === 'en'
                      ? 'text-[#0070BA] font-bold'
                      : 'text-slate-400 font-normal'
                  }
                >
                  EN
                </span>
                <span className="text-slate-300">/</span>
                <span
                  className={
                    lang === 'ko'
                      ? 'text-[#0070BA] font-bold'
                      : 'text-slate-400 font-normal'
                  }
                >
                  KO
                </span>
              </button>

              {/* Minimize Button (Matching Image 1 ChevronDown) */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 sm:w-7.5 sm:h-7.5 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                aria-label="Minimize Chat"
                title="Minimize Chat"
              >
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Close Button (Matching Image 1 X) */}
              <button
                type="button"
                onClick={handleCloseWidget}
                className="w-7 h-7 sm:w-7.5 sm:h-7.5 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                aria-label="Close Chat"
                title="Close Chat"
              >
                <X className="w-4 h-4 stroke-[2.2]" />
              </button>
            </div>
          </div>

          {/* Main Body Area */}
          <div className="flex-1 min-h-0 overflow-y-auto px-4 sm:px-5 py-3.5 sm:py-4 overscroll-contain scroll-smooth">
            {messages.length === 0 ? (
              /* State 1: Clean Minimalist Welcome Screen (Matching Screenshot) */
              <div className="min-h-full max-w-[340px] mx-auto w-full py-3 sm:py-6 flex flex-col items-center justify-start sm:justify-center">
                {/* Agent Mascot / Brand Badge */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-100 border border-slate-200/90 flex items-center justify-center shadow-xs mb-3 ring-4 ring-[#0070BA]/8 group">
                  <ChatbotIcon
                    size="lg"
                    className="transition-transform group-hover:scale-105 duration-200"
                  />
                </div>

                {/* Heading */}
                <h1 className="text-lg sm:text-[20px] font-bold text-slate-900 text-center tracking-tight leading-snug">
                  {agentConfig.title}
                </h1>

                {/* Subtitle */}
                <p className="text-xs sm:text-[13px] text-slate-500 text-center mt-1.5 leading-relaxed max-w-[310px] font-normal">
                  {agentConfig.subtitle}
                </p>

                {/* Featured / Hero Card */}
                <button
                  type="button"
                  onClick={() =>
                    handleSendMessage(
                      agentConfig.featured.query,
                      agentConfig.featured.intent
                    )
                  }
                  className="mt-5 w-full p-3.5 sm:p-4 rounded-2xl bg-[#0070BA]/6 hover:bg-[#0070BA]/10 border border-[#0070BA]/20 transition-all flex items-center justify-between gap-3 cursor-pointer shadow-2xs hover:shadow-xs text-left group active:scale-[0.99]"
                >
                  {/* Executive Inpartner Blue Icon */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0070BA] to-[#005FA0] text-white flex items-center justify-center shrink-0 shadow-xs ring-2 ring-[#0070BA]/20">
                    <TrendingUp className="w-5 h-5 text-white stroke-[2.3]" />
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-xs sm:text-sm text-slate-900 group-hover:text-[#0070BA] transition-colors leading-snug tracking-tight">
                      {agentConfig.featured.title}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-normal font-normal line-clamp-2">
                      {agentConfig.featured.desc}
                    </div>
                  </div>

                  {/* Right Chevron */}
                  <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 group-hover:text-[#0070BA] group-hover:translate-x-0.5 transition-all" />
                </button>

                {/* Divider */}
                <div className="my-4 sm:my-5 relative flex items-center justify-center w-full">
                  <div className="w-full border-t border-slate-200/80"></div>
                  <span className="absolute bg-white px-2.5 text-[10px] sm:text-[10.5px] uppercase font-bold text-slate-400 tracking-wider select-none">
                    {agentConfig.dividerText}
                  </span>
                </div>

                {/* 2-Column Grid Secondary Cards */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
                  {/* Card 1: Funding & Profitability */}
                  <button
                    type="button"
                    onClick={() =>
                      handleSendMessage(
                        agentConfig.secondary1.query,
                        agentConfig.secondary1.intent
                      )
                    }
                    className="p-3 sm:p-3.5 rounded-2xl border border-slate-200/90 hover:border-[#0070BA]/40 hover:bg-[#0070BA]/5 transition-all flex flex-col items-center justify-center text-center gap-2 cursor-pointer shadow-2xs hover:shadow-xs group active:scale-[0.99] min-h-[102px]"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0070BA]/10 text-[#0070BA] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                      <Landmark className="w-4 h-4 stroke-[2]" />
                    </div>
                    <span className="text-[11.5px] sm:text-xs font-semibold text-slate-800 group-hover:text-[#0070BA] transition-colors leading-snug tracking-tight line-clamp-2">
                      {agentConfig.secondary1.title}
                    </span>
                  </button>

                  {/* Card 2: Business Diagnostic & Advisory Routing */}
                  <button
                    type="button"
                    onClick={() =>
                      handleSendMessage(
                        agentConfig.secondary2.query,
                        agentConfig.secondary2.intent
                      )
                    }
                    className="p-3 sm:p-3.5 rounded-2xl border border-slate-200/90 hover:border-[#0070BA]/40 hover:bg-[#0070BA]/5 transition-all flex flex-col items-center justify-center text-center gap-2 cursor-pointer shadow-2xs hover:shadow-xs group active:scale-[0.99] min-h-[102px]"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0070BA]/10 text-[#0070BA] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                      <Compass className="w-4 h-4 stroke-[2]" />
                    </div>
                    <span className="text-[11.5px] sm:text-xs font-semibold text-slate-800 group-hover:text-[#0070BA] transition-colors leading-snug tracking-tight line-clamp-2">
                      {agentConfig.secondary2.title}
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              /* State 2: Active Chat Thread */
              <div className="space-y-3.5 w-full max-w-2xl mx-auto py-1 sm:py-2">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-2 sm:gap-2.5 ${
                      msg.sender === 'user'
                        ? 'justify-end'
                        : 'justify-start items-start'
                    }`}
                  >
                    {msg.sender === 'bot' && (
                      <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 flex items-center justify-center shrink-0 mt-0.5">
                        <ChatbotIcon size="xs" />
                      </div>
                    )}
                    <div
                      className={`flex flex-col ${
                        msg.sender === 'user' ? 'items-end' : 'items-start'
                      } max-w-[85%] sm:max-w-[80%]`}
                    >
                      <div
                        className={`w-full rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-[#0070BA] text-white rounded-br-xs shadow-xs font-normal'
                            : 'bg-slate-50/95 border border-slate-200/70 text-slate-800 rounded-bl-xs shadow-2xs font-normal'
                        }`}
                      >
                        {/* Message Content with Markdown rendering & Typewriter Caret */}
                        <div className="prose prose-sm max-w-none text-xs sm:text-sm leading-relaxed space-y-0.5">
                          {formatBotMessage(msg.text)}
                          {msg.isStreaming && (
                            <span className="inline-block w-1.5 h-3.5 ml-1 bg-[#0070BA] animate-pulse align-middle rounded-xs" />
                          )}
                        </div>

                        {/* Recommended Service Badge */}
                        {msg.recommendedService && !msg.isStreaming && (
                          <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0070BA]/10 text-[#0070BA] border border-[#0070BA]/20 rounded-lg text-[11px] sm:text-xs font-semibold tracking-tight">
                            <Sparkles className="w-3.5 h-3.5 text-[#0070BA]" />
                            <span>
                              {t.service} {msg.recommendedService}
                            </span>
                          </div>
                        )}

                        {/* Official Sources */}
                        {msg.sources &&
                          msg.sources.length > 0 &&
                          !msg.isStreaming && (
                            <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                              <span className="font-bold text-slate-400 uppercase tracking-wider text-[9.5px]">
                                {t.sources}
                              </span>
                              {msg.sources.map((s, idx) => (
                                <span
                                  key={idx}
                                  className="bg-white px-2 py-0.5 rounded-md border border-slate-200/90 font-mono text-[10.5px] text-slate-600 font-medium"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          )}

                        {/* Timestamp & Realtime indicator */}
                        <div
                          className={`mt-1.5 flex items-center justify-end text-[10px] font-mono ${
                            msg.sender === 'user'
                              ? 'text-sky-100/85 text-right'
                              : 'text-slate-400'
                          }`}
                        >
                          {msg.sender === 'bot' && msg.isStreaming ? (
                            <span className="inline-flex items-center gap-1 text-[#0070BA] font-medium not-italic animate-pulse mr-auto">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0070BA]" />
                              {t.generating}
                            </span>
                          ) : null}
                          <span>{msg.timestamp}</span>
                        </div>
                      </div>

                      {/* Interactive Consultative Discovery Module */}
                      {msg.diagnosticPillar &&
                        !msg.isStreaming &&
                        (() => {
                          const tree = getDiagnosticTree(msg.diagnosticPillar)
                          if (!tree) return null

                          const currentDiagState =
                            activeDiagnostic &&
                            activeDiagnostic.pillarKey === msg.diagnosticPillar
                              ? activeDiagnostic
                              : {
                                  pillarKey: msg.diagnosticPillar,
                                  currentStep: 1 as const,
                                }

                          const isCompleted =
                            currentDiagState.currentStep === 'completed'
                          const isStep1 = currentDiagState.currentStep === 1
                          const isStep2 = currentDiagState.currentStep === 2

                          const currentStepTitle = isCompleted
                            ? t.diagnosticCompletedBadge
                            : isStep1
                            ? `${t.diagnosticStep1}: ${
                                tree.step1[`title_${lang}`]
                              }`
                            : `${t.diagnosticStep2}: ${
                                tree.step2[`title_${lang}`]
                              }`

                          return (
                            <div className="mt-3 w-full sm:w-[94%] bg-gradient-to-br from-white via-sky-50/40 to-[#0070BA]/5 border border-[#0070BA]/20 rounded-2xl p-3.5 sm:p-4 shadow-xs">
                              {/* Module Header */}
                              <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5 mb-3">
                                <div className="flex items-center gap-2 min-w-0">
                                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0070BA] to-[#005FA0] text-white flex items-center justify-center shrink-0 shadow-2xs">
                                    <Compass className="w-4 h-4 text-white stroke-[2.2]" />
                                  </div>
                                  <div className="min-w-0">
                                    <span className="text-[10px] font-bold text-[#0070BA] uppercase tracking-wider block truncate">
                                      {t.diagnosticBadge}
                                    </span>
                                    <span className="text-xs font-semibold text-slate-800 block truncate">
                                      {tree[`serviceName_${lang}`]}
                                    </span>
                                  </div>
                                </div>
                                <span
                                  className={`text-[10px] font-bold px-2.5 py-1 rounded-full border shrink-0 ${
                                    isCompleted
                                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                      : 'bg-sky-50 text-[#0070BA] border-sky-200'
                                  }`}
                                >
                                  {currentStepTitle}
                                </span>
                              </div>

                              {/* Step 1 State */}
                              {isStep1 && (
                                <div className="space-y-2.5">
                                  <p className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-snug">
                                    {tree.step1[`question_${lang}`]}
                                  </p>
                                  <div className="space-y-1.5 pt-1">
                                    {tree.step1.options.map((opt) => (
                                      <button
                                        key={opt.id}
                                        type="button"
                                        onClick={() =>
                                          handleSelectDiagnosticOption(
                                            tree.pillarKey,
                                            1,
                                            opt
                                          )
                                        }
                                        className="w-full text-left p-2.5 sm:p-3 rounded-xl border border-slate-200 bg-white hover:border-[#0070BA] hover:bg-[#0070BA]/5 transition-all shadow-2xs group flex items-start gap-2.5 cursor-pointer active:scale-[0.99]"
                                      >
                                        <div className="w-5 h-5 rounded-full bg-slate-100 group-hover:bg-[#0070BA]/10 text-slate-500 group-hover:text-[#0070BA] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <span className="font-semibold text-xs sm:text-sm text-slate-800 group-hover:text-[#0070BA] block leading-snug">
                                            {opt[`label_${lang}`]}
                                          </span>
                                          {opt[`detail_${lang}`] && (
                                            <span className="text-[11px] text-slate-500 mt-0.5 block leading-tight font-normal">
                                              {opt[`detail_${lang}`]}
                                            </span>
                                          )}
                                        </div>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Step 2 State */}
                              {isStep2 && (
                                <div className="space-y-2.5">
                                  {/* Confirmed Step 1 Choice Chip */}
                                  <div className="flex items-center justify-between bg-sky-50/80 border border-sky-200/80 rounded-xl px-3 py-1.5 text-xs text-slate-700">
                                    <span className="truncate pr-2 font-medium">
                                      <span className="text-slate-400 font-semibold mr-1">
                                        {t.diagnosticStep1}:
                                      </span>
                                      <strong>
                                        {currentDiagState.step1ChoiceLabel}
                                      </strong>
                                    </span>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleResetDiagnostic(tree.pillarKey)
                                      }
                                      className="text-[#0070BA] hover:underline font-semibold text-[11px] shrink-0 cursor-pointer"
                                    >
                                      {t.diagnosticChangeStep1}
                                    </button>
                                  </div>

                                  <p className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-snug">
                                    {tree.step2[`question_${lang}`]}
                                  </p>
                                  <div className="space-y-1.5 pt-1">
                                    {tree.step2.options.map((opt) => (
                                      <button
                                        key={opt.id}
                                        type="button"
                                        onClick={() =>
                                          handleSelectDiagnosticOption(
                                            tree.pillarKey,
                                            2,
                                            opt
                                          )
                                        }
                                        className="w-full text-left p-2.5 sm:p-3 rounded-xl border border-slate-200 bg-white hover:border-[#0070BA] hover:bg-[#0070BA]/5 transition-all shadow-2xs group flex items-start gap-2.5 cursor-pointer active:scale-[0.99]"
                                      >
                                        <div className="w-5 h-5 rounded-full bg-slate-100 group-hover:bg-[#0070BA]/10 text-slate-500 group-hover:text-[#0070BA] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <span className="font-semibold text-xs sm:text-sm text-slate-800 group-hover:text-[#0070BA] block leading-snug">
                                            {opt[`label_${lang}`]}
                                          </span>
                                          {opt[`detail_${lang}`] && (
                                            <span className="text-[11px] text-slate-500 mt-0.5 block leading-tight font-normal">
                                              {opt[`detail_${lang}`]}
                                            </span>
                                          )}
                                        </div>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Completed Scoping State */}
                              {isCompleted && (
                                <div className="space-y-3">
                                  <div className="p-3 bg-emerald-50/70 border border-emerald-200/90 rounded-xl space-y-1">
                                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                                      {lang === 'id'
                                        ? 'Hasil Scoping Diagnostik Awal'
                                        : lang === 'ko'
                                        ? '사전 진단 요약 결과'
                                        : 'Preliminary Scoping Synthesis'}
                                    </span>
                                    <p className="text-xs sm:text-sm font-semibold text-emerald-950 leading-relaxed">
                                      {currentDiagState.scopingSummary}
                                    </p>
                                  </div>

                                  <div className="flex flex-wrap items-center gap-2 pt-1">
                                    <a
                                      href={getWhatsAppUrl(
                                        lang === 'ko'
                                          ? `안녕하세요 인파트너 자문팀, 사전 진단을 완료하고 상담을 요청합니다: ${currentDiagState.scopingSummary}`
                                          : lang === 'en'
                                          ? `Hello Inpartner Advisory Team, I have completed the preliminary scoping diagnostic: ${currentDiagState.scopingSummary}. Please advise on consultation booking.`
                                          : `Halo tim konsultan INPARTNER, saya telah melakukan scoping diagnostik awal: ${currentDiagState.scopingSummary}. Mohon info konsultasi lebih lanjut.`
                                      )}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={() =>
                                        trackEvent('contact_clicked', {
                                          channel: 'whatsapp',
                                          location: 'diagnostic_complete',
                                        })
                                      }
                                      className="bg-[#0070BA] hover:bg-[#005FA0] text-white text-xs font-bold px-3.5 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
                                    >
                                      <Phone className="w-3.5 h-3.5" />{' '}
                                      {t.diagnosticWaWithScoping}
                                    </a>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleResetDiagnostic(tree.pillarKey)
                                      }
                                      className="text-slate-500 hover:text-slate-700 text-xs font-medium px-2 py-1 transition-colors cursor-pointer"
                                    >
                                      {t.diagnosticRestart}
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          )
                        })()}

                      {/* Follow-up Questions Suggestions */}
                      {msg.followUpQuestions &&
                        msg.followUpQuestions.length > 0 &&
                        !msg.isStreaming && (
                          <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                            {msg.followUpQuestions.map((q, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleSendMessage(q)}
                                className="text-left text-[11.5px] sm:text-xs font-medium bg-white hover:bg-[#0070BA]/5 text-slate-700 hover:text-[#0070BA] px-3 py-1.5 rounded-full border border-slate-200 hover:border-[#0070BA]/40 transition-all shadow-2xs flex items-center gap-1.5 group cursor-pointer"
                              >
                                <span>{q}</span>
                                <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#0070BA] shrink-0" />
                              </button>
                            ))}
                          </div>
                        )}

                      {/* Consultation CTA Card */}
                      {msg.suggestLeadCapture && !msg.isStreaming && (
                        <div className="mt-3.5 mb-1 w-full bg-[#F0F7FD] border border-[#CDE3F7] rounded-2xl p-4 sm:p-4.5 shadow-xs">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-[#0070BA] text-white flex items-center justify-center shrink-0 shadow-2xs">
                              <Building2 className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="text-sm sm:text-[14.5px] font-bold text-slate-900 leading-snug tracking-tight">
                              {t.interestedCta}
                            </h4>
                          </div>
                          <p className="text-xs sm:text-[12.5px] text-slate-600 leading-relaxed font-normal mb-3.5">
                            {t.interestedDesc}
                          </p>
                          <a
                            href={getWhatsAppUrl(
                              lang === 'id'
                                ? `Halo tim Inpartner, saya ingin berkonsultasi lebih lanjut mengenai ${
                                    msg.recommendedService ||
                                    'layanan penasihat bisnis'
                                  }.`
                                : lang === 'ko'
                                ? `안녕하세요 인파트너 팀, ${
                                    msg.recommendedService ||
                                    '비즈니스 자문 서비스'
                                  } 관련 상담을 요청합니다.`
                                : `Hello Inpartner team, I would like to consult further regarding ${
                                    msg.recommendedService ||
                                    'business advisory services'
                                  }.`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() =>
                              trackEvent('contact_clicked', {
                                channel: 'whatsapp',
                                location: 'chat_cta',
                                service: msg.recommendedService,
                              })
                            }
                            className="w-full py-2.5 px-4 rounded-xl bg-[#0070BA] hover:bg-[#005FA0] text-white font-bold text-xs sm:text-[13px] shadow-xs hover:shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <Phone className="w-4 h-4 text-white" />
                            <span>
                              {lang === 'id'
                                ? 'Konsultasi via WhatsApp'
                                : lang === 'ko'
                                ? 'WhatsApp으로 실시간 상담'
                                : 'Consult via WhatsApp'}
                            </span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Typing Indicator (Only before first token/chunk arrives) */}
                {isLoading && !messages.some((m) => m.isStreaming) && (
                  <div className="flex gap-2 sm:gap-2.5 items-start">
                    <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 shadow-2xs mt-1 ring-1 ring-black/5">
                      <ChatbotIcon size="xs" />
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl rounded-bl-xs px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-2xs">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#0070BA] animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-[#0070BA] animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#0070BA] animate-bounce [animation-delay:0.4s]"></div>
                        <span className="text-xs text-slate-500 font-medium ml-1.5">
                          {t.sending}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Bottom Chat Input Bar - Fixed at Bottom (Matching Image 1 Pill Input) */}
          <div className="sticky bottom-0 z-20 shrink-0 border-t border-slate-100 p-2.5 sm:p-3.5 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.03)] pb-[max(0.65rem,env(safe-area-inset-bottom))]">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
              className="relative flex items-center"
            >
              <input
                ref={inputRef}
                id="chat-input-message"
                name="chatMessage"
                type="text"
                autoComplete="off"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={agentConfig.inputPlaceholder}
                className="w-full bg-slate-50 hover:bg-slate-100/60 focus:bg-white text-slate-900 text-xs sm:text-[13.5px] font-normal pl-4 pr-11 py-2.5 sm:py-3 rounded-full border border-slate-200 focus:border-[#0070BA] focus:ring-2 focus:ring-[#0070BA]/15 focus:outline-none transition-all placeholder:text-slate-400 placeholder:font-normal"
                disabled={isLoading || isStreaming}
              />
              {isLoading || isStreaming ? (
                <button
                  type="button"
                  onClick={handleStopGeneration}
                  aria-label={t.stopGenerating}
                  className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all bg-rose-50 hover:bg-rose-100 text-rose-600 cursor-pointer active:scale-95 shadow-xs border border-rose-200"
                  title={t.stopGenerating}
                >
                  <Square className="w-3.5 h-3.5 fill-rose-600 stroke-rose-600" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  aria-label="Send message"
                  className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all disabled:bg-slate-100 disabled:text-slate-300 bg-[#0070BA] hover:bg-[#005FA0] text-white cursor-pointer active:scale-95 shadow-xs"
                >
                  <ArrowUp className="w-4 h-4 stroke-[2.5]" />
                </button>
              )}
            </form>

            {/* Disclaimer Matching Screenshot */}
            <div className="text-center text-[10px] sm:text-[11px] text-slate-400 mt-1.5 font-normal tracking-normal select-none">
              {t.disclaimer}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Clean Helper to format bot responses cleanly without raw markdown symbols (###, ---, *, etc.)
function formatBotMessage(text: string) {
  if (!text) return null

  // Pre-normalize text so headings and dividers have proper line breaks
  const normalized = text
    .replace(/\r\n/g, '\n')
    .replace(/([^\n])\s*(#{1,4}\s+)/g, '$1\n\n$2')
    .replace(/([^\n])\s*(\-{3,}|\*{3,}|_{3,})\s*/g, '$1\n\n$2\n\n')

  // Split text by newlines into logical lines
  const lines = normalized.split('\n')

  return lines.map((line, lineIndex) => {
    const trimmed = line.trim()

    // 1. Horizontal rules (--- or ***) -> render clean subtle divider
    if (/^(\-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      return <hr key={`hr-${lineIndex}`} className="my-2 border-slate-200/80" />
    }

    // 2. Headings (### Title or ## Title) -> render clean bold subheader without ### symbols
    const headingMatch = trimmed.match(/^#{1,4}\s+(.+)$/)
    if (headingMatch) {
      return (
        <div
          key={`h-${lineIndex}`}
          className="font-bold text-[#0070BA] text-xs sm:text-sm mt-2.5 mb-1 leading-snug"
        >
          {renderInlineElements(headingMatch[1])}
        </div>
      )
    }

    // 3. Bullet points (* item, - item, • item) -> render clean bullet dot without raw asterisk
    const bulletMatch = trimmed.match(/^[\*\-\•]\s+(.+)$/)
    if (bulletMatch) {
      return (
        <div
          key={`b-${lineIndex}`}
          className="flex items-start gap-2 my-1 pl-0.5"
        >
          <span className="text-[#0070BA] font-bold select-none text-xs leading-5">
            •
          </span>
          <div className="flex-1 text-slate-800 text-xs sm:text-sm leading-relaxed">
            {renderInlineElements(bulletMatch[1])}
          </div>
        </div>
      )
    }

    // 4. Numbered list (1. item, 2. item)
    const numMatch = trimmed.match(/^(\d+[\.\)])\s+(.+)$/)
    if (numMatch) {
      return (
        <div
          key={`num-${lineIndex}`}
          className="flex items-start gap-2 my-1 pl-0.5"
        >
          <span className="text-[#0070BA] font-semibold select-none text-xs leading-5 min-w-[16px]">
            {numMatch[1]}
          </span>
          <div className="flex-1 text-slate-800 text-xs sm:text-sm leading-relaxed">
            {renderInlineElements(numMatch[2])}
          </div>
        </div>
      )
    }

    // 5. Empty line -> clean spacing
    if (!trimmed) {
      return <div key={`empty-${lineIndex}`} className="h-1.5" />
    }

    // 6. Regular paragraph text
    return (
      <div
        key={`p-${lineIndex}`}
        className="my-1 text-slate-800 text-xs sm:text-sm leading-relaxed"
      >
        {renderInlineElements(line)}
      </div>
    )
  })
}

// Inline renderer for bold, italic, and links without leaking raw asterisks
function renderInlineElements(content: string) {
  // Matches **bold**, *italic*, and [link](url)
  const regex = /(\*\*.*?\*\*|\*[^\*]+?\*|\[.*?\]\(.*?\))/g
  const parts = content.split(regex)

  return parts.map((part, index) => {
    if (!part) return null

    // Bold: **text**
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={index} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      )
    }

    // Italic: *text* (clean up the asterisks so no raw symbol is shown)
    if (
      part.startsWith('*') &&
      part.endsWith('*') &&
      part.length > 2 &&
      !part.includes('**')
    ) {
      return (
        <span key={index} className="italic text-slate-700">
          {part.slice(1, -1)}
        </span>
      )
    }

    // Link: [label](url)
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/)
    if (linkMatch) {
      return (
        <a
          key={index}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0070BA] font-semibold underline underline-offset-2 hover:text-[#005FA0] transition-colors"
        >
          {linkMatch[1]}
        </a>
      )
    }

    // Clean any stray single asterisk or hashes from text
    const cleaned = part.replace(/#{1,4}\s*/g, '').replace(/[\*\_]/g, '')
    return cleaned
  })
}
