'use client'

import React, { useEffect, useId, useRef } from 'react'
import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/react'

export interface ChatbotIconProps {
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  variant?: 'light' | 'launcher' | 'header'
  state?: 'idle' | 'thinking'
}

const floatAnim = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
`

const blinkAnim = keyframes`
  0%, 92%, 100% { transform: scaleY(1); }
  95% { transform: scaleY(0.1); }
`

const antennaPulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
`

const antennaFast = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
`

const scanAnim = keyframes`
  0%, 100% { transform: translateX(-2.5px); }
  50% { transform: translateX(2.5px); }
`

const wiggleAnim = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-7deg); }
  75% { transform: rotate(7deg); }
`

const IconContainer = styled.div<{
  dim: number
  animated?: boolean
  thinking?: boolean
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  flex-shrink: 0;
  width: ${({ dim }) => dim}px;
  height: ${({ dim }) => dim}px;

  ${({ animated }) =>
    animated &&
    css`
      animation: ${floatAnim} 3.2s ease-in-out infinite;
    `}

  svg {
    width: 100%;
    height: 100%;
    display: block;
    overflow: visible;
  }

  .cb-head {
    transform-origin: 32px 40px;
    transform-box: view-box;
  }

  .cb-eye {
    transform-box: fill-box;
    transform-origin: center;
    animation: ${blinkAnim} 4.2s ease-in-out infinite;
  }

  .cb-eye-happy {
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .cb-eyes-open {
    transition: opacity 0.2s ease;
  }

  .cb-pupils {
    transition: transform 0.12s ease-out;
  }

  .cb-antenna-bulb {
    animation: ${({ thinking }) => (thinking ? antennaFast : antennaPulse)}
      ${({ thinking }) => (thinking ? '0.6s' : '2.4s')} ease-in-out infinite;
  }

  .cb-smile {
    transition: d 0.25s ease;
  }

  ${({ thinking }) =>
    thinking &&
    css`
      .cb-scan {
        animation: ${scanAnim} 1.1s ease-in-out infinite;
      }
    `}

  &:hover .cb-head,
  button:hover > & .cb-head {
    animation: ${wiggleAnim} 0.6s ease-in-out;
  }

  &:hover .cb-eyes-open,
  button:hover > & .cb-eyes-open {
    opacity: 0;
  }

  &:hover .cb-eye-happy,
  button:hover > & .cb-eye-happy {
    opacity: 1;
  }

  &:hover .cb-smile,
  button:hover > & .cb-smile {
    d: path('M24 43 Q32 50 40 43');
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    *,
    &:hover .cb-head {
      animation: none !important;
      transition: none !important;
    }
  }
`

const SIZES = { xs: 22, sm: 28, md: 38, lg: 54, xl: 72 }

export default function ChatbotIcon({
  className = '',
  size = 'md',
  animated = false,
  variant = 'light',
  state = 'idle',
}: ChatbotIconProps) {
  const uid = useId().replace(/:/g, '')
  const pupilsRef = useRef<SVGGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const dim = SIZES[size] || SIZES.md
  const isLauncher = variant === 'launcher'
  const isLarge = size === 'lg' || size === 'xl'
  const thinking = state === 'thinking'

  // Large mascot follows the cursor with its eyes
  useEffect(() => {
    if (!isLarge || thinking || typeof window === 'undefined') return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const el = containerRef.current
        const pupils = pupilsRef.current
        if (!el || !pupils) return
        const rect = el.getBoundingClientRect()
        const dx = e.clientX - (rect.left + rect.width / 2)
        const dy = e.clientY - (rect.top + rect.height / 2)
        const dist = Math.hypot(dx, dy) || 1
        const k = Math.min(dist / 120, 1)
        pupils.style.transform = `translate(${((dx / dist) * 2.2 * k).toFixed(
          2
        )}px, ${((dy / dist) * 1.6 * k).toFixed(2)}px)`
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMove)
    }
  }, [isLarge, thinking])

  const headFill = `url(#cb-head-${uid})`
  const accent = `url(#cb-accent-${uid})`
  const eyeColor = isLauncher ? '#38BDF8' : '#7DD3FC'

  return (
    <IconContainer
      ref={containerRef}
      className={className}
      dim={dim}
      animated={animated && isLarge}
      thinking={thinking}
      role="img"
      aria-label="Inpartner AI Chatbot"
    >
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`cb-head-${uid}`} x1="0" y1="0" x2="1" y2="1">
            {isLauncher ? (
              <>
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#1E3A5F" />
                <stop offset="100%" stopColor="#0B1E33" />
              </>
            )}
          </linearGradient>
          <linearGradient id={`cb-accent-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <radialGradient id={`cb-glow-${uid}`}>
            <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="cb-head">
          {/* Antenna */}
          <line
            x1="32"
            y1="14"
            x2="32"
            y2="7"
            stroke={accent}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle
            className="cb-antenna-bulb"
            cx="32"
            cy="6"
            r="5"
            fill={`url(#cb-glow-${uid})`}
          />
          <circle
            className="cb-antenna-bulb"
            cx="32"
            cy="6"
            r="2.6"
            fill="#38BDF8"
          />

          {/* Headset earpieces */}
          <rect x="4" y="27" width="7" height="16" rx="3.5" fill={accent} />
          <rect x="53" y="27" width="7" height="16" rx="3.5" fill={accent} />

          {/* Head */}
          <rect
            x="9"
            y="14"
            width="46"
            height="40"
            rx="15"
            fill={headFill}
            stroke={
              isLauncher ? 'rgba(2,132,199,0.25)' : 'rgba(125,211,252,0.25)'
            }
            strokeWidth="1"
          />
          {/* Sheen */}
          <path
            d="M17 21 Q24 16.5 33 17"
            stroke="#FFFFFF"
            strokeOpacity={isLauncher ? 0.9 : 0.35}
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Visor */}
          <rect
            x="15"
            y="23"
            width="34"
            height="24"
            rx="10"
            fill={isLauncher ? '#0B1E33' : '#06121F'}
          />

          {/* Eyes */}
          <g className="cb-scan">
            <g className="cb-eyes-open">
              <g ref={pupilsRef} className="cb-pupils">
                <ellipse
                  className="cb-eye"
                  cx="25"
                  cy="33"
                  rx="3.2"
                  ry="4"
                  fill={eyeColor}
                />
                <ellipse
                  className="cb-eye"
                  cx="39"
                  cy="33"
                  rx="3.2"
                  ry="4"
                  fill={eyeColor}
                />
              </g>
            </g>
            <g
              className="cb-eye-happy"
              stroke={eyeColor}
              strokeWidth="2.4"
              strokeLinecap="round"
            >
              <path d="M21.5 34 Q25 29 28.5 34" />
              <path d="M35.5 34 Q39 29 42.5 34" />
            </g>
          </g>

          {/* Smile */}
          <path
            className="cb-smile"
            d="M26 42 Q32 45.5 38 42"
            stroke={eyeColor}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </IconContainer>
  )
}
