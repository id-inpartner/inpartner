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
  Copy,
  Check,
  ShieldCheck,
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
  LangSegmented,
  LangSegmentBtn,
  LangPill,
  IconBtn,
  ChatBody,
  WelcomeView,
  BrandAvatarBox,
  WelcomeTag,
  WelcomeHeading,
  WelcomeSub,
  ActionCardList,
  ActionCard,
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
  diagnosticDismissed?: boolean
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
      const targetOrigin =
        process.env.NEXT_PUBLIC_SITE_URL || window.location.origin
      window.parent?.postMessage({ type: 'inpartner_close_chat' }, targetOrigin)
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
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopyMessage = (msgId: string, text: string) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(text)
        setCopiedId(msgId)
        setTimeout(() => setCopiedId(null), 2000)
      }
    } catch (e) {
      console.warn('Failed to copy text:', e)
    }
  }

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
          diagnosticBadge:
            'Biar kami pahami kebutuhan Anda · 2 pertanyaan singkat',
          diagnosticStep1: 'Langkah 1/2',
          diagnosticStep2: 'Langkah 2/2',
          diagnosticCompletedBadge: 'Scoping Diagnostik Selesai',
          diagnosticWaWithScoping: 'Konsultasi via WhatsApp',
          diagnosticChangeStep1: 'Ubah Pilihan Langkah 1',
          diagnosticRestart: 'Ulangi Diagnostik',
          diagnosticOther: 'Lainnya / belum yakin',
          diagnosticOtherDesc: 'Ceritakan langsung kebutuhan Anda di chat',
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
          diagnosticBadge: '귀사의 요구사항 파악을 위한 2가지 간단한 질문',
          diagnosticStep1: '1단계 / 2단계',
          diagnosticStep2: '2단계 / 2단계',
          diagnosticCompletedBadge: '사전 진단 요약 완료',
          diagnosticWaWithScoping: '수석 파트너 WhatsApp 실시간 문의',
          diagnosticChangeStep1: '1단계 선택 변경',
          diagnosticRestart: '진단 다시 시작하기',
          diagnosticOther: '기타 / 잘 모르겠음',
          diagnosticOtherDesc: '채팅으로 직접 설명해 주세요',
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
          diagnosticBadge: 'Help us understand your needs · 2 quick questions',
          diagnosticStep1: 'Step 1 of 2',
          diagnosticStep2: 'Step 2 of 2',
          diagnosticCompletedBadge: 'Preliminary Scoping Complete',
          diagnosticWaWithScoping: 'Fast-Track WhatsApp Discussion',
          diagnosticChangeStep1: 'Change Step 1 Choice',
          diagnosticRestart: 'Restart Diagnostic',
          diagnosticOther: 'Other / not sure yet',
          diagnosticOtherDesc: 'Describe your need directly in the chat',
        }

  // Inpartner Agent Configuration derived from active language
  const agentConfig = {
    name: lang === 'ko' ? '인파트너 AI' : 'Inpartner AI',
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
    if (text.length > 2000) return

    const currentNeed = needCategory || selectedNeed || undefined
    // Offer the diagnostic card only after the visitor has described a need
    // (a picked service, or at least one earlier message), never on the first free-typed line.
    const canOfferDiagnostic =
      !!currentNeed || messages.some((m) => m.sender === 'user')

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
        let streamErrored = false

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
              } else if (event.type === 'error') {
                streamErrored = true
              } else if (event.type === 'done') {
                const finalAnswer = event.fullAnswer || accumulatedText
                if (event.recommendedService) {
                  trackEvent('service_viewed', {
                    service: event.recommendedService,
                  })
                }
                const detectedPillar = canOfferDiagnostic
                  ? detectDiagnosticPillar(
                      event.intent || event.recommendedService || ''
                    )
                  : null
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

        // Server-side stream failure before any text: show the standard error bubble
        if (streamErrored && !botMessageCreated) {
          throw new Error('Chat stream error')
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

        const detectedPillar = canOfferDiagnostic
          ? detectDiagnosticPillar(data.intent || data.recommendedService || '')
          : null
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
        // user stopped generation — no action needed
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
        setTimeout(
          () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }),
          50
        )
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

      // Let the assistant respond to the visitor's choices instead of ending silently
      handleSendMessage(
        lang === 'ko'
          ? `제 상황: ${s1Label} — ${optLabel}`
          : lang === 'en'
          ? `My situation: ${s1Label} — ${optLabel}`
          : `Kebutuhan saya: ${s1Label} — ${optLabel}`
      )
    }
  }

  const handleDismissDiagnostic = (
    msgId: string,
    pillarKey: DiagnosticPillarKey
  ) => {
    setMessages((prev) =>
      prev.map((m) =>
        m.id === msgId ? { ...m, diagnosticDismissed: true } : m
      )
    )
    setActiveDiagnostic(null)
    trackEvent('diagnostic_dismissed', { pillar: pillarKey })
    handleSendMessage(
      lang === 'ko'
        ? '제 요구사항이 선택지에 없습니다. 직접 설명드려도 될까요?'
        : lang === 'en'
        ? "My need isn't listed in those options. Can I explain it directly?"
        : 'Kebutuhan saya belum ada di pilihan tersebut. Boleh saya jelaskan langsung?'
    )
  }

  const handleResetDiagnostic = (pillarKey: DiagnosticPillarKey) => {
    setActiveDiagnostic({
      pillarKey,
      currentStep: 1,
    })
    trackEvent('diagnostic_reset', { pillar: pillarKey })
  }

  // The discovery card lives on the first bot reply that carries a pillar, so it
  // appears once per conversation and does not jump while the visitor fills it in.
  const diagnosticAnchorId = messages.find(
    (m) => m.sender === 'bot' && m.diagnosticPillar
  )?.id

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
                  {lang === 'id'
                    ? 'Konsultasi '
                    : lang === 'ko'
                    ? '실시간 기업자문 '
                    : 'Consult '}
                  <strong>Inpartner AI</strong>
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
              <ChatbotIcon size="md" variant="launcher" />
              <span className="launcher-online-beacon" />
            </LauncherBtn>
          </LauncherRow>
        </LauncherWrap>
      )}

      {/* Main Chat Window */}
      {(isOpen || embeddedMode) && (
        <ChatWindow embedded={embeddedMode}>
          {/* Executive Top Header */}
          <ChatHeader>
            {/* Left: Brand Mascot + Agent Title */}
            <HeaderBrand>
              <div className="header-avatar">
                <ChatbotIcon size="xs" />
                <OnlineDot className="pinned" />
              </div>
              <div>
                <HeaderTitle>INPARTNER</HeaderTitle>
                <OnlineStatus>{t.onlineStatus}</OnlineStatus>
              </div>
            </HeaderBrand>

            {/* Right: Header Action Buttons */}
            <HeaderActions>
              {/* Segmented Language Switcher */}
              <LangSegmented>
                <LangSegmentBtn
                  type="button"
                  active={lang === 'id'}
                  onClick={() => handleToggleLanguage('id')}
                  aria-label="Bahasa Indonesia"
                  title="Bahasa Indonesia"
                >
                  ID
                </LangSegmentBtn>
                <LangSegmentBtn
                  type="button"
                  active={lang === 'en'}
                  onClick={() => handleToggleLanguage('en')}
                  aria-label="English"
                  title="English"
                >
                  EN
                </LangSegmentBtn>
                <LangSegmentBtn
                  type="button"
                  active={lang === 'ko'}
                  onClick={() => handleToggleLanguage('ko')}
                  aria-label="한국어"
                  title="한국어"
                >
                  KO
                </LangSegmentBtn>
              </LangSegmented>

              {/* New Chat Button (Visible when chat has messages) */}
              {messages.length > 0 && (
                <IconBtn
                  type="button"
                  className="spin-on-hover"
                  onClick={handleResetConversation}
                  aria-label={t.newChat}
                  title={t.newChat}
                >
                  <RotateCcw size={14} />
                </IconBtn>
              )}

              {/* Close / Minimize Button */}
              <IconBtn
                type="button"
                onClick={handleCloseWidget}
                aria-label="Close Chat"
                title="Close Chat"
              >
                <X size={16} />
              </IconBtn>
            </HeaderActions>
          </ChatHeader>

          {/* Main Body Area */}
          <ChatBody>
            {messages.length === 0 ? (
              /* State 1: Clean Minimalist Welcome Screen */
              <WelcomeView>
                {/* Agent Mascot / Brand Badge */}
                <BrandAvatarBox>
                  <ChatbotIcon size="lg" animated />
                </BrandAvatarBox>

                <WelcomeTag>
                  <Sparkles size={11} />
                  <span>
                    {lang === 'id'
                      ? 'Asisten Konsultasi Bisnis Resmi'
                      : lang === 'ko'
                      ? '공식 AI 기업 전략 자문'
                      : 'Official Advisory Assistant'}
                  </span>
                </WelcomeTag>

                {/* Heading */}
                <WelcomeHeading>{agentConfig.title}</WelcomeHeading>

                {/* Subtitle */}
                <WelcomeSub>{agentConfig.subtitle}</WelcomeSub>

                {/* Action Card List (Compact & Perfectly Fitted) */}
                <ActionCardList>
                  {/* Card 1: Strategi Korporat */}
                  <ActionCard
                    type="button"
                    colorScheme="blue"
                    onClick={() =>
                      handleSendMessage(
                        agentConfig.featured.query,
                        agentConfig.featured.intent
                      )
                    }
                  >
                    <div className="action-icon-box">
                      <TrendingUp size={18} strokeWidth={2.4} />
                    </div>
                    <div className="action-content">
                      <div className="action-title">
                        {agentConfig.featured.title}
                      </div>
                      <div className="action-desc">
                        {agentConfig.featured.desc}
                      </div>
                    </div>
                    <ChevronRight className="action-arrow" />
                  </ActionCard>

                  {/* Card 2: Akses Pasar */}
                  <ActionCard
                    type="button"
                    colorScheme="cyan"
                    onClick={() =>
                      handleSendMessage(
                        agentConfig.secondary1.query,
                        agentConfig.secondary1.intent
                      )
                    }
                  >
                    <div className="action-icon-box">
                      <Landmark size={18} strokeWidth={2.2} />
                    </div>
                    <div className="action-content">
                      <div className="action-title">
                        {agentConfig.secondary1.title}
                      </div>
                      <div className="action-desc">
                        {lang === 'id'
                          ? 'Riset pasar mendalam, regulasi & ekspansi bisnis Indonesia'
                          : lang === 'ko'
                          ? '인도네시아 시장 진입, 규제 분석 및 비즈니스 매칭'
                          : 'Market entry, regulatory intelligence & business matching'}
                      </div>
                    </div>
                    <ChevronRight className="action-arrow" />
                  </ActionCard>

                  {/* Card 3: Diagnostik Kebutuhan Bisnis */}
                  <ActionCard
                    type="button"
                    colorScheme="emerald"
                    onClick={() =>
                      handleSendMessage(
                        agentConfig.secondary2.query,
                        agentConfig.secondary2.intent
                      )
                    }
                  >
                    <div className="action-icon-box">
                      <Compass size={18} strokeWidth={2.2} />
                    </div>
                    <div className="action-content">
                      <div className="action-title">
                        {agentConfig.secondary2.title}
                      </div>
                      <div className="action-desc">
                        {lang === 'id'
                          ? 'Scoping interaktif menemukan advisory yang tepat'
                          : lang === 'ko'
                          ? '기업 맞춤형 자문 필요성 대화형 진단'
                          : 'Interactive preliminary scoping for your business'}
                      </div>
                    </div>
                    <ChevronRight className="action-arrow" />
                  </ActionCard>
                </ActionCardList>
              </WelcomeView>
            ) : (
              /* State 2: Active Chat Thread */
              <ThreadWrap>
                {messages.map((msg) => (
                  <MsgRow key={msg.id} sender={msg.sender}>
                    {msg.sender === 'bot' && (
                      <div className="bot-avatar-col">
                        <ChatbotIcon size="xs" />
                      </div>
                    )}
                    <MsgCol sender={msg.sender}>
                      <Bubble sender={msg.sender}>
                        {msg.sender === 'bot' && (
                          <div className="bot-bubble-meta">
                            <span className="bot-name-tag">
                              <Sparkles size={10} /> INPARTNER AI
                            </span>
                            <span
                              style={{
                                fontSize: '10px',
                                color: '#94a3b8',
                              }}
                            >
                              {msg.timestamp}
                            </span>
                          </div>
                        )}

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

                        {/* Timestamp & Realtime indicator */}
                        <MsgTimestamp sender={msg.sender}>
                          {msg.sender === 'bot' && msg.isStreaming ? (
                            <span className="streaming-tag">
                              <span className="tag-dot" />
                              {t.generating}
                            </span>
                          ) : null}
                          {msg.sender === 'bot' && !msg.isStreaming && (
                            <button
                              type="button"
                              className={`copy-btn ${
                                copiedId === msg.id ? 'copied' : ''
                              }`}
                              onClick={() =>
                                handleCopyMessage(msg.id, msg.text)
                              }
                              aria-label="Salin jawaban"
                              title="Salin jawaban"
                            >
                              {copiedId === msg.id ? (
                                <>
                                  <Check size={11} />{' '}
                                  {lang === 'id' ? 'Tersalin' : 'Copied'}
                                </>
                              ) : (
                                <>
                                  <Copy size={11} />{' '}
                                  {lang === 'id' ? 'Salin' : 'Copy'}
                                </>
                              )}
                            </button>
                          )}
                          <span>{msg.timestamp}</span>
                        </MsgTimestamp>
                      </Bubble>

                      {/* Interactive Consultative Discovery Module */}
                      {msg.diagnosticPillar &&
                        msg.id === diagnosticAnchorId &&
                        !msg.diagnosticDismissed &&
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
                                    <DiagOptBtn
                                      type="button"
                                      onClick={() =>
                                        handleDismissDiagnostic(
                                          msg.id,
                                          tree.pillarKey
                                        )
                                      }
                                    >
                                      <div className="diag-opt-icon">
                                        <ChevronRight size={14} />
                                      </div>
                                      <div className="diag-opt-text-wrap">
                                        <span className="diag-opt-title">
                                          {t.diagnosticOther}
                                        </span>
                                        <span className="diag-opt-desc">
                                          {t.diagnosticOtherDesc}
                                        </span>
                                      </div>
                                    </DiagOptBtn>
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
                                    <DiagOptBtn
                                      type="button"
                                      onClick={() =>
                                        handleDismissDiagnostic(
                                          msg.id,
                                          tree.pillarKey
                                        )
                                      }
                                    >
                                      <div className="diag-opt-icon">
                                        <ChevronRight size={14} />
                                      </div>
                                      <div className="diag-opt-text-wrap">
                                        <span className="diag-opt-title">
                                          {t.diagnosticOther}
                                        </span>
                                        <span className="diag-opt-desc">
                                          {t.diagnosticOtherDesc}
                                        </span>
                                      </div>
                                    </DiagOptBtn>
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
                            <Phone size={15} />
                            <span>
                              {lang === 'id'
                                ? 'Konsultasi via WhatsApp Resmi'
                                : lang === 'ko'
                                ? 'WhatsApp 공식 상담 연결'
                                : 'Consult via Official WhatsApp'}
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

          {/* Bottom Chat Input Bar - Fixed at Bottom */}
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
                maxLength={2000}
              />
              {isLoading || isStreaming ? (
                <SendBtn
                  isStop
                  type="button"
                  onClick={handleStopGeneration}
                  aria-label={t.stopGenerating}
                  title={t.stopGenerating}
                >
                  <Square size={13} style={{ fill: '#e11d48' }} />
                </SendBtn>
              ) : (
                <SendBtn
                  type="submit"
                  disabled={!inputMessage.trim()}
                  aria-label="Send message"
                >
                  <ArrowUp size={16} strokeWidth={2.6} />
                </SendBtn>
              )}
            </InputForm>

            {/* Disclaimer Matching Security & Advisory trust */}
            <DisclaimerText>
              <ShieldCheck
                size={11}
                style={{ color: '#0070ba', flexShrink: 0 }}
              />
              <span>{t.disclaimer}</span>
            </DisclaimerText>
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
          <div className="num-text">{renderInlineElements(numMatch[2])}</div>
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
        <strong key={index} style={{ fontWeight: 700, color: '#0f172a' }}>
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
        <span key={index} style={{ fontStyle: 'italic', color: '#334155' }}>
          {part.slice(1, -1)}
        </span>
      )
    }

    // Link: [label](url)
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/)
    // Model output is untrusted: only allow safe URL schemes (blocks javascript:, data:, etc.)
    if (linkMatch && !/^(https?:|mailto:|tel:)/i.test(linkMatch[2].trim())) {
      return linkMatch[1]
    }
    if (linkMatch) {
      return (
        <a
          key={index}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#0070ba',
            fontWeight: 600,
            textDecoration: 'underline',
            textUnderlineOffset: '2px',
          }}
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
