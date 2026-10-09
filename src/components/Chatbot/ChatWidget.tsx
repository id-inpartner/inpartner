'use client'

import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import { Global, css } from '@emotion/react'
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
import {
  Root,
  LauncherWrap,
  LauncherRow,
  PillBtn,
  LauncherBtn,
  ChatWindow,
  ChatHeader,
  HeaderBrand,
  HeaderTitle,
  OnlineStatus,
  OnlineDot,
  HeaderActions,
  LangPill,
  IconBtn,
  ChatBody,
  WelcomeView,
  BrandAvatarBox,
  WelcomeHeading,
  WelcomeSub,
  FeaturedCard,
  DividerBox,
  DividerLine,
  DividerText,
  SecondaryGrid,
  SecondaryCard,
  ThreadWrap,
  MsgRow,
  MsgCol,
  Bubble,
  MsgTimestamp,
  ConsultationCard,
  ConsultationHeader,
  ConsultationBadge,
  ConsultationTitle,
  ConsultationDesc,
  BtnWa,
  FollowupWrap,
  FollowupChip,
  TeaserCard,
  ChatFooter,
  InputForm,
  ChatInput,
  SendBtn,
  DisclaimerText,
  DiagModule,
  DiagOptBtn,
  TypingRow,
  TypingBubble,
  TypingDot,
  ServiceBadge,
  SourcesWrap,
  SourceTag,
} from './styled'

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
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#ffffff',
          }}
        >
          <div
            style={{
              width: '24px',
              height: '24px',
              border: '2px solid #0070ba',
              borderTopColor: 'transparent',
              borderRadius: '9999px',
              animation: 'spin 0.8s linear infinite',
            }}
          />
        </div>
      )
    }
    return null
  }

  return (
    <Root id="inpartner-chatbot-container">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      {!embeddedMode && !isOpen && (
        <LauncherWrap>
          {/* Proactive Bubble Teaser */}
          {showTeaser && (
            <TeaserCard
              onClick={() => {
                setShowTeaser(false)
                setHasUserInteracted(true)
                markNudgeDismissed(
                  typeof window !== 'undefined' ? window.sessionStorage : null
                )
                setIsOpen(true)
              }}
            >
              <div className="teaser-badge-row">
                <div className="teaser-badge">
                  <span className="teaser-pulse-dot" />
                  <span>{getNudgeMessage(nudgeType, lang).badge}</span>
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
                  className="teaser-close-btn"
                  aria-label="Close teaser"
                >
                  <X size={14} />
                </button>
              </div>

              <h4 className="teaser-title">
                {getNudgeMessage(nudgeType, lang).title}
              </h4>
              <p className="teaser-body">
                {getNudgeMessage(nudgeType, lang).body}
              </p>

              <div className="teaser-footer">
                <span className="teaser-cta">
                  {getNudgeMessage(nudgeType, lang).cta}
                </span>
                <span className="teaser-subtext">
                  {lang === 'id'
                    ? 'Online 24/7 • Rahasia'
                    : lang === 'ko'
                    ? '24시간 상시 운영 • 비밀보장'
                    : '24/7 • Confidential'}
                </span>
              </div>
            </TeaserCard>
          )}

          {/* Launcher Row */}
          <LauncherRow>
            {!showTeaser && (
              <PillBtn
                onClick={() => {
                  setShowTeaser(false)
                  setHasUserInteracted(true)
                  markNudgeDismissed(
                    typeof window !== 'undefined' ? window.sessionStorage : null
                  )
                  setIsOpen(true)
                }}
              >
                <span className="pill-dot" />
                <span>
                  Consult <strong>{agentConfig.name}</strong>
                </span>
              </PillBtn>
            )}
            <LauncherBtn
              onClick={() => {
                setShowTeaser(false)
                setHasUserInteracted(true)
                markNudgeDismissed(
                  typeof window !== 'undefined' ? window.sessionStorage : null
                )
                setIsOpen(true)
              }}
              aria-label={`Open ${agentConfig.name}`}
            >
              <ChatbotIcon size="md" />
            </LauncherBtn>
          </LauncherRow>
        </LauncherWrap>
      )}

      {/* Main Chat Window (Docked cleanly at bottom right, matching Image 1) */}
      {(isOpen || embeddedMode) && (
        <ChatWindow embedded={embeddedMode}>
          {/* Minimalist Top Header (Exact Match Image 1) */}
          <ChatHeader>
            {/* Left: Brand Mascot + Agent Title */}
            <HeaderBrand>
              <div className="header-avatar">
                <ChatbotIcon size="md" />
              </div>
              <div>
                <HeaderTitle>{agentConfig.name}</HeaderTitle>
                <OnlineStatus>
                  <OnlineDot />
                  {t.onlineStatus}
                </OnlineStatus>
              </div>
            </HeaderBrand>

            {/* Right: Header Action Buttons (New Chat + Lang Toggle + Minimize + Close) */}
            <HeaderActions>
              {/* New Chat Button (Visible when chat has messages) */}
              {messages.length > 0 && (
                <IconBtn
                  type="button"
                  onClick={handleResetConversation}
                  aria-label={t.newChat}
                  title={t.newChat}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </IconBtn>
              )}

              {/* Language Switcher Badge Button */}
              <LangPill
                type="button"
                onClick={() => handleToggleLanguage()}
                aria-label="Switch Language"
                title="Switch Language"
              >
                <span
                  style={{
                    color: lang === 'id' ? '#0070BA' : '#94a3b8',
                    fontWeight: lang === 'id' ? 700 : 500,
                  }}
                >
                  ID
                </span>
                <span style={{ color: '#cbd5e1' }}>/</span>
                <span
                  style={{
                    color: lang === 'en' ? '#0070BA' : '#94a3b8',
                    fontWeight: lang === 'en' ? 700 : 500,
                  }}
                >
                  EN
                </span>
                <span style={{ color: '#cbd5e1' }}>/</span>
                <span
                  style={{
                    color: lang === 'ko' ? '#0070BA' : '#94a3b8',
                    fontWeight: lang === 'ko' ? 700 : 500,
                  }}
                >
                  KO
                </span>
              </LangPill>

              {/* Minimize Button (Matching Image 1 ChevronDown) */}
              <IconBtn
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Minimize Chat"
                title="Minimize Chat"
              >
                <ChevronDown className="w-4 h-4" />
              </IconBtn>

              {/* Close Button (Matching Image 1 X) */}
              <IconBtn
                type="button"
                onClick={handleCloseWidget}
                aria-label="Close Chat"
                title="Close Chat"
              >
                <X className="w-4 h-4 stroke-[2.2]" />
              </IconBtn>
            </HeaderActions>
          </ChatHeader>

          {/* Main Body Area */}
          <ChatBody>
            {messages.length === 0 ? (
              /* State 1: Clean Minimalist Welcome Screen (Matching Screenshot) */
              <WelcomeView>
                {/* Agent Mascot / Brand Badge */}
                <BrandAvatarBox>
                  <ChatbotIcon size="lg" />
                </BrandAvatarBox>

                {/* Heading */}
                <WelcomeHeading>
                  {agentConfig.title}
                </WelcomeHeading>

                {/* Subtitle */}
                <WelcomeSub>{agentConfig.subtitle}</WelcomeSub>

                {/* Featured / Hero Card */}
                <FeaturedCard
                  type="button"
                  onClick={() =>
                    handleSendMessage(
                      agentConfig.featured.query,
                      agentConfig.featured.intent
                    )
                  }
                >
                  {/* Executive Inpartner Blue Icon */}
                  <div className="featured-icon-box">
                    <TrendingUp size={20} strokeWidth={2.3} />
                  </div>

                  {/* Text Details */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="featured-title">
                      {agentConfig.featured.title}
                    </div>
                    <div className="featured-desc">
                      {agentConfig.featured.desc}
                    </div>
                  </div>

                  {/* Right Chevron */}
                  <ChevronRight className="featured-arrow" />
                </FeaturedCard>

                {/* Divider */}
                <DividerBox>
                  <DividerLine />
                  <DividerText>
                    {agentConfig.dividerText}
                  </DividerText>
                </DividerBox>

                {/* 2-Column Grid Secondary Cards */}
                <SecondaryGrid>
                  {/* Card 1: Funding & Profitability */}
                  <SecondaryCard
                    type="button"
                    onClick={() =>
                      handleSendMessage(
                        agentConfig.secondary1.query,
                        agentConfig.secondary1.intent
                      )
                    }
                  >
                    <div className="card-icon-box">
                      <Landmark size={18} strokeWidth={2} />
                    </div>
                    <span className="card-title">
                      {agentConfig.secondary1.title}
                    </span>
                  </SecondaryCard>

                  {/* Card 2: Business Diagnostic & Advisory Routing */}
                  <SecondaryCard
                    type="button"
                    onClick={() =>
                      handleSendMessage(
                        agentConfig.secondary2.query,
                        agentConfig.secondary2.intent
                      )
                    }
                  >
                    <div className="card-icon-box">
                      <Compass size={18} strokeWidth={2} />
                    </div>
                    <span className="card-title">
                      {agentConfig.secondary2.title}
                    </span>
                  </SecondaryCard>
                </SecondaryGrid>
              </WelcomeView>
            ) : (
              /* State 2: Active Chat Thread */
              <ThreadWrap>
                {messages.map((msg) => (
                  <MsgRow
                    key={msg.id}
                    sender={msg.sender}
                  >
                    {msg.sender === 'bot' && (
                      <div className="bot-avatar-col">
                        <ChatbotIcon size="xs" />
                      </div>
                    )}
                    <MsgCol sender={msg.sender}>
                      <Bubble sender={msg.sender}>
                        {/* Message Content with Markdown rendering & Typewriter Caret */}
                        <div className="bot-prose">
                          {formatBotMessage(msg.text)}
                          {msg.isStreaming && (
                            <span className="streaming-caret" />
                          )}
                        </div>

                        {/* Recommended Service Badge */}
                        {msg.recommendedService && !msg.isStreaming && (
                          <ServiceBadge>
                            <Sparkles size={14} />
                            <span>
                              {t.service} {msg.recommendedService}
                            </span>
                          </ServiceBadge>
                        )}

                        {/* Official Sources */}
                        {msg.sources &&
                          msg.sources.length > 0 &&
                          !msg.isStreaming && (
                            <SourcesWrap>
                              <span className="sources-label">
                                {t.sources}
                              </span>
                              {msg.sources.map((s, idx) => (
                                <SourceTag key={idx}>{s}</SourceTag>
                              ))}
                            </SourcesWrap>
                          )}

                        {/* Timestamp & Realtime indicator */}
                        <MsgTimestamp sender={msg.sender}>
                          {msg.sender === 'bot' && msg.isStreaming ? (
                            <span className="streaming-tag">
                              <span className="tag-dot" />
                              {t.generating}
                            </span>
                          ) : null}
                          <span>{msg.timestamp}</span>
                        </MsgTimestamp>
                      </Bubble>

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
                            <DiagModule>
                              {/* Module Header */}
                              <div className="diag-header">
                                <div className="diag-badge-left">
                                  <div className="diag-icon-box">
                                    <Compass size={16} strokeWidth={2.2} />
                                  </div>
                                  <div className="diag-titles">
                                    <span className="diag-badge-label">
                                      {t.diagnosticBadge}
                                    </span>
                                    <span className="diag-service-name">
                                      {tree[`serviceName_${lang}`]}
                                    </span>
                                  </div>
                                </div>
                                <span
                                  className={`diag-step-pill ${
                                    isCompleted ? 'completed' : 'active'
                                  }`}
                                >
                                  {currentStepTitle}
                                </span>
                              </div>

                              {/* Step 1 State */}
                              {isStep1 && (
                                <div className="diag-step-content">
                                  <p className="diag-question">
                                    {tree.step1[`question_${lang}`]}
                                  </p>
                                  <div className="diag-opt-list">
                                    {tree.step1.options.map((opt) => (
                                      <DiagOptBtn
                                        key={opt.id}
                                        type="button"
                                        onClick={() =>
                                          handleSelectDiagnosticOption(
                                            tree.pillarKey,
                                            1,
                                            opt
                                          )
                                        }
                                      >
                                        <div className="diag-opt-icon">
                                          <ChevronRight size={14} />
                                        </div>
                                        <div className="diag-opt-text-wrap">
                                          <span className="diag-opt-title">
                                            {opt[`label_${lang}`]}
                                          </span>
                                          {opt[`detail_${lang}`] && (
                                            <span className="diag-opt-desc">
                                              {opt[`detail_${lang}`]}
                                            </span>
                                          )}
                                        </div>
                                      </DiagOptBtn>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Step 2 State */}
                              {isStep2 && (
                                <div className="diag-step-content">
                                  {/* Confirmed Step 1 Choice Chip */}
                                  <div className="diag-choice-chip">
                                    <span className="chip-left">
                                      <span className="chip-step-label">
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
                                      className="chip-reset-btn"
                                    >
                                      {t.diagnosticChangeStep1}
                                    </button>
                                  </div>

                                  <p className="diag-question">
                                    {tree.step2[`question_${lang}`]}
                                  </p>
                                  <div className="diag-opt-list">
                                    {tree.step2.options.map((opt) => (
                                      <DiagOptBtn
                                        key={opt.id}
                                        type="button"
                                        onClick={() =>
                                          handleSelectDiagnosticOption(
                                            tree.pillarKey,
                                            2,
                                            opt
                                          )
                                        }
                                      >
                                        <div className="diag-opt-icon">
                                          <ChevronRight size={14} />
                                        </div>
                                        <div className="diag-opt-text-wrap">
                                          <span className="diag-opt-title">
                                            {opt[`label_${lang}`]}
                                          </span>
                                          {opt[`detail_${lang}`] && (
                                            <span className="diag-opt-desc">
                                              {opt[`detail_${lang}`]}
                                            </span>
                                          )}
                                        </div>
                                      </DiagOptBtn>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Completed Scoping State */}
                              {isCompleted && (
                                <div className="diag-step-content">
                                  <div className="diag-summary-box">
                                    <span className="summary-label">
                                      {lang === 'id'
                                        ? 'Hasil Scoping Diagnostik Awal'
                                        : lang === 'ko'
                                        ? '사전 진단 요약 결과'
                                        : 'Preliminary Scoping Synthesis'}
                                    </span>
                                    <p className="summary-text">
                                      {currentDiagState.scopingSummary}
                                    </p>
                                  </div>

                                  <div className="diag-cta-row">
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
                                      className="diag-wa-btn"
                                    >
                                      <Phone size={14} />{' '}
                                      {t.diagnosticWaWithScoping}
                                    </a>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleResetDiagnostic(tree.pillarKey)
                                      }
                                      className="diag-restart-btn"
                                    >
                                      {t.diagnosticRestart}
                                    </button>
                                  </div>
                                </div>
                              )}
                            </DiagModule>
                          )
                        })()}

                      {/* Follow-up Questions Suggestions */}
                      {msg.followUpQuestions &&
                        msg.followUpQuestions.length > 0 &&
                        !msg.isStreaming && (
                          <FollowupWrap>
                            {msg.followUpQuestions.map((q, idx) => (
                              <FollowupChip
                                key={idx}
                                type="button"
                                onClick={() => handleSendMessage(q)}
                              >
                                <span>{q}</span>
                                <ChevronRight size={12} />
                              </FollowupChip>
                            ))}
                          </FollowupWrap>
                        )}

                      {/* Consultation CTA Card */}
                      {msg.suggestLeadCapture && !msg.isStreaming && (
                        <ConsultationCard>
                          <ConsultationHeader>
                            <ConsultationBadge>
                              <Building2 className="w-5 h-5 text-white" />
                            </ConsultationBadge>
                            <ConsultationTitle>
                              {t.interestedCta}
                            </ConsultationTitle>
                          </ConsultationHeader>
                          <ConsultationDesc>
                            {t.interestedDesc}
                          </ConsultationDesc>
                          <BtnWa
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
                          >
                            <Phone className="w-4 h-4 text-white" />
                            <span>
                              {lang === 'id'
                                ? 'Konsultasi via WhatsApp'
                                : lang === 'ko'
                                ? 'WhatsApp으로 실시간 상담'
                                : 'Consult via WhatsApp'}
                            </span>
                          </BtnWa>
                        </ConsultationCard>
                      )}
                    </MsgCol>
                  </MsgRow>
                ))}

                {/* Typing Indicator (Only before first token/chunk arrives) */}
                {isLoading && !messages.some((m) => m.isStreaming) && (
                  <TypingRow>
                    <div className="bot-avatar-col">
                      <ChatbotIcon size="xs" />
                    </div>
                    <TypingBubble>
                      <TypingDot />
                      <TypingDot delay="0.2s" />
                      <TypingDot delay="0.4s" />
                      <span
                        style={{
                          fontSize: '12px',
                          color: '#64748b',
                          fontWeight: 500,
                          marginLeft: '4px',
                        }}
                      >
                        {t.sending}
                      </span>
                    </TypingBubble>
                  </TypingRow>
                )}
                <div ref={messagesEndRef} />
              </ThreadWrap>
            )}
          </ChatBody>

          {/* Bottom Chat Input Bar - Fixed at Bottom (Matching Image 1 Pill Input) */}
          <ChatFooter>
            <InputForm
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
            >
              <ChatInput
                ref={inputRef}
                id="chat-input-message"
                name="chatMessage"
                type="text"
                autoComplete="off"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={agentConfig.inputPlaceholder}
                disabled={isLoading || isStreaming}
              />
              {isLoading || isStreaming ? (
                <SendBtn
                  isStop
                  type="button"
                  onClick={handleStopGeneration}
                  aria-label={t.stopGenerating}
                  title={t.stopGenerating}
                >
                  <Square className="w-3.5 h-3.5 fill-rose-600 stroke-rose-600" />
                </SendBtn>
              ) : (
                <SendBtn
                  type="submit"
                  disabled={!inputMessage.trim()}
                  aria-label="Send message"
                >
                  <ArrowUp className="w-4 h-4 stroke-[2.5]" />
                </SendBtn>
              )}
            </InputForm>

            {/* Disclaimer Matching Screenshot */}
            <DisclaimerText>{t.disclaimer}</DisclaimerText>
          </ChatFooter>
        </ChatWindow>
      )}
    </Root>
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
      return <hr key={`hr-${lineIndex}`} />
    }

    // 2. Headings (### Title or ## Title) -> render clean bold subheader without ### symbols
    const headingMatch = trimmed.match(/^#{1,4}\s+(.+)$/)
    if (headingMatch) {
      return (
        <div key={`h-${lineIndex}`} className="bot-heading">
          {renderInlineElements(headingMatch[1])}
        </div>
      )
    }

    // 3. Bullet points (* item, - item, • item) -> render clean bullet dot without raw asterisk
    const bulletMatch = trimmed.match(/^[\*\-\•]\s+(.+)$/)
    if (bulletMatch) {
      return (
        <div key={`b-${lineIndex}`} className="bot-bullet-row">
          <span className="bullet-dot">•</span>
          <div className="bullet-text">
            {renderInlineElements(bulletMatch[1])}
          </div>
        </div>
      )
    }

    // 4. Numbered list (1. item, 2. item)
    const numMatch = trimmed.match(/^(\d+[\.\)])\s+(.+)$/)
    if (numMatch) {
      return (
        <div key={`num-${lineIndex}`} className="bot-num-row">
          <span className="num-prefix">{numMatch[1]}</span>
          <div className="num-text">
            {renderInlineElements(numMatch[2])}
          </div>
        </div>
      )
    }

    // 5. Empty line -> clean spacing
    if (!trimmed) {
      return <div key={`empty-${lineIndex}`} style={{ height: '6px' }} />
    }

    // 6. Regular paragraph text
    return (
      <div key={`p-${lineIndex}`} className="bot-paragraph">
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
