/* =========================================================================
 * Inpartner AI Advisory Assistant - Elevated Emotion Design System
 * Modern Executive Aesthetic (Consistent with Inpartner Brand & Tech Stack)
 * ========================================================================= */

import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/react'

/* =========================================================================
 * Keyframe Animations
 * ========================================================================= */

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const zoomIn = keyframes`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
`

export const slideUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`

export const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
`

export const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`

export const ping = keyframes`
  0% { transform: scale(1); opacity: 0.75; }
  75%, 100% { transform: scale(1.6); opacity: 0; }
`

export const pulseRing = keyframes`
  0% { transform: scale(0.95); opacity: 0.7; }
  50% { transform: scale(1.15); opacity: 0.2; }
  100% { transform: scale(1.25); opacity: 0; }
`

export const rotateSlow = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

/* =========================================================================
 * Root Container & Reset Isolation
 * ========================================================================= */

export const Root = styled.div`
  box-sizing: border-box;
  font-family: 'Plus Jakarta Sans', Inter, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, sans-serif;
  color: #0f172a;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Custom 5px Scrollbar */
  *::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 9999px;
    &:hover {
      background: #94a3b8;
    }
  }
  * {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 transparent;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

/* =========================================================================
 * Floating Launcher Component
 * ========================================================================= */

export const LauncherWrap = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
  pointer-events: none;
`

export const LauncherRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  pointer-events: auto;
`

export const PillBtn = styled.button`
  display: none;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(12px);
  color: #1e293b;
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 0.625rem 1rem;
  border-radius: 9999px;
  box-shadow: 0 10px 25px -5px rgba(0, 30, 60, 0.12),
    0 2px 6px -1px rgba(0, 112, 186, 0.08), 0 0 0 1px rgba(226, 232, 240, 0.95);
  border: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  @media (min-width: 640px) {
    display: flex;
  }

  .pill-dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: #10b981;
    box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.25);
    animation: ${pulse} 2s infinite;
  }

  strong {
    color: #0070ba;
    font-weight: 700;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 32px -6px rgba(0, 30, 60, 0.16),
      0 0 0 1px rgba(0, 112, 186, 0.35);
  }

  &:active {
    transform: scale(0.98);
  }
`

export const LauncherBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, #0070ba 0%, #004d82 100%);
  color: #ffffff;
  border: none;
  box-shadow: 0 14px 32px -4px rgba(0, 112, 186, 0.45),
    0 4px 12px -2px rgba(0, 112, 186, 0.25),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  /* Subtle Radar Ambient Wave Ring */
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 9999px;
    background: radial-gradient(
      circle,
      rgba(56, 189, 248, 0.4) 0%,
      rgba(0, 112, 186, 0) 70%
    );
    z-index: -1;
    animation: ${pulseRing} 3s ease-out infinite;
  }

  /* Live green beacon on top-right */
  .launcher-online-beacon {
    position: absolute;
    top: 2px;
    right: 2px;
    width: 11px;
    height: 11px;
    border-radius: 9999px;
    background: #10b981;
    border: 2px solid #ffffff;
    box-shadow: 0 0 6px #10b981;
  }

  &:hover {
    background: linear-gradient(135deg, #005fa0 0%, #003e6b 100%);
    transform: scale(1.06) translateY(-2px);
    box-shadow: 0 20px 40px -4px rgba(0, 112, 186, 0.55),
      0 6px 16px -2px rgba(0, 112, 186, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`

/* =========================================================================
 * Main Chat Window
 * ========================================================================= */

interface ChatWindowProps {
  embedded?: boolean
}

export const ChatWindow = styled.div<ChatWindowProps>`
  position: fixed;
  bottom: 0.75rem;
  right: 0.75rem;
  z-index: 99999;
  width: calc(100vw - 20px);
  max-width: 418px;
  height: min(640px, calc(100dvh - 20px));
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 1.25rem;
  border: 1px solid rgba(226, 232, 240, 0.95);
  box-shadow: 0 24px 60px -12px rgba(11, 37, 69, 0.22),
    0 8px 24px -6px rgba(0, 112, 186, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.85);
  overflow: hidden;
  animation: ${fadeIn} 0.2s cubic-bezier(0.16, 1, 0.3, 1),
    ${zoomIn} 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  @media (min-width: 640px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 418px;
    height: 640px;
    max-height: calc(100dvh - 36px);
    border-radius: 1.375rem;
  }

  ${({ embedded }) =>
    embedded &&
    css`
      position: relative;
      bottom: auto;
      right: auto;
      width: 100%;
      height: 100%;
      max-width: none;
      border-radius: 0;
      box-shadow: none;
      border: none;
    `}
`

/* =========================================================================
 * Header Component
 * ========================================================================= */

export const ChatHeader = styled.div`
  position: relative;
  top: 0;
  z-index: 20;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0.875rem;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.85);

  /* Top Executive Accent Stripe */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2.5px;
    background: linear-gradient(90deg, #005fa0 0%, #0088e8 50%, #38bdf8 100%);
  }

  @media (min-width: 640px) {
    padding: 0.75rem 1rem;
  }
`

export const HeaderBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;

  .header-avatar {
    position: relative;
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 0.6875rem;
    background: linear-gradient(135deg, #f0f7fd 0%, #e2eef9 100%);
    border: 1px solid rgba(0, 112, 186, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 2px 8px -2px rgba(0, 112, 186, 0.15);
  }

  .header-title-row {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  .header-verified-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.2rem;
    font-size: 8.5px;
    font-weight: 700;
    color: #0070ba;
    background: rgba(0, 112, 186, 0.08);
    border: 1px solid rgba(0, 112, 186, 0.15);
    border-radius: 9999px;
    padding: 0.0625rem 0.35rem;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    white-space: nowrap;
  }
`

export const HeaderTitle = styled.h2`
  font-size: 0.875rem;
  font-weight: 800;
  color: #0b2545;
  margin: 0;
  line-height: 1.25;
  letter-spacing: -0.015em;
  white-space: nowrap;

  @media (min-width: 640px) {
    font-size: 0.9375rem;
  }
`

export const OnlineStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 10.5px;
  color: #059669;
  font-weight: 600;
  margin-top: 0.0625rem;
`

export const OnlineDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 9999px;
  background: #10b981;
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.25);
  animation: ${pulse} 2s infinite;

  &.pinned {
    position: absolute;
    bottom: -1px;
    right: -1px;
    border: 2px solid #ffffff;
    box-shadow: 0 0 4px #10b981;
  }
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`

/* Segmented Language Selector */
export const LangSegmented = styled.div`
  display: inline-flex;
  align-items: center;
  background: #f1f5f9;
  border: 1px solid rgba(226, 232, 240, 0.95);
  border-radius: 9999px;
  padding: 2px;
  gap: 1px;
`

export const LangSegmentBtn = styled.button<{ active?: boolean }>`
  border: none;
  background: ${({ active }) => (active ? '#0070ba' : 'transparent')};
  color: ${({ active }) => (active ? '#ffffff' : '#64748b')};
  font-size: 10px;
  font-weight: ${({ active }) => (active ? 700 : 500)};
  padding: 0.15rem 0.375rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: ${({ active }) =>
    active ? '0 1px 4px rgba(0, 112, 186, 0.3)' : 'none'};

  &:hover {
    color: ${({ active }) => (active ? '#ffffff' : '#1e293b')};
  }
`

/* Legacy fallback for LangPill */
export const LangPill = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-size: 11px;
  font-weight: 600;
  border-radius: 9999px;
  border: 1px solid rgba(226, 232, 240, 0.95);
  background: rgba(248, 250, 252, 0.9);
  color: #334155;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #0070ba;
    background: rgba(0, 112, 186, 0.06);
  }
`

export const IconBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 0.5rem;
  border: none;
  background: transparent;
  color: #94a3b8;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #1e293b;
    background: #f1f5f9;
  }

  &.spin-on-hover:hover svg {
    transform: rotate(-180deg);
    transition: transform 0.4s ease;
  }
`

/* =========================================================================
 * Chat Body
 * ========================================================================= */

export const ChatBody = styled.div`
  flex: 1 1 0%;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  scroll-behavior: smooth;
  padding: 0.875rem 1rem;
  background: #ffffff;

  @media (min-width: 640px) {
    padding: 1rem 1.125rem;
  }
`

/* =========================================================================
 * Welcome Screen (Zero State) - Tuned for Perfect Viewport Fit
 * ========================================================================= */

export const WelcomeView = styled.div`
  min-height: 100%;
  max-width: 356px;
  margin: 0 auto;
  width: 100%;
  padding: 0.25rem 0 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  animation: ${fadeIn} 0.3s ease;
`

export const BrandAvatarBox = styled.div`
  position: relative;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 0.875rem;
  background: linear-gradient(135deg, #f0f7fd 0%, #ffffff 50%, #e6f3fd 100%);
  border: 1px solid rgba(0, 112, 186, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.375rem;
  box-shadow: 0 6px 16px -4px rgba(0, 112, 186, 0.15),
    0 0 0 3px rgba(0, 112, 186, 0.05);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  /* Ambient Glow Aura */
  &::before {
    content: '';
    position: absolute;
    inset: -6px;
    border-radius: 1.25rem;
    background: radial-gradient(
      circle,
      rgba(56, 189, 248, 0.2) 0%,
      transparent 70%
    );
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
  }
`

export const WelcomeTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 10.5px;
  font-weight: 600;
  color: #0070ba;
  background: rgba(0, 112, 186, 0.07);
  border: 1px solid rgba(0, 112, 186, 0.15);
  border-radius: 9999px;
  padding: 0.15rem 0.5rem;
  margin-bottom: 0.25rem;
`

export const WelcomeHeading = styled.h1`
  font-size: 1.0625rem;
  font-weight: 800;
  color: #0f172a;
  text-align: center;
  line-height: 1.25;
  margin: 0;
  letter-spacing: -0.015em;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`

export const WelcomeSub = styled.p`
  font-size: 0.75rem;
  color: #64748b;
  text-align: center;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  max-width: 320px;
  font-weight: 400;
`

/* Executive Action Cards */
export const ActionCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  width: 100%;
`

export const ActionCard = styled.button<{
  colorScheme?: 'blue' | 'cyan' | 'emerald'
}>`
  width: 100%;
  padding: 0.5625rem 0.75rem;
  border-radius: 0.8125rem;
  background: #ffffff;
  border: 1px solid rgba(226, 232, 240, 0.95);
  display: flex;
  align-items: center;
  gap: 0.6875rem;
  cursor: pointer;
  text-align: left;
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 6px rgba(0, 30, 60, 0.03);

  .action-icon-box {
    width: 2.125rem;
    height: 2.125rem;
    border-radius: 0.5625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.2s ease;

    ${({ colorScheme }) =>
      colorScheme === 'cyan'
        ? css`
            background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
            color: #ffffff;
            box-shadow: 0 2px 8px rgba(2, 132, 199, 0.28);
          `
        : colorScheme === 'emerald'
        ? css`
            background: linear-gradient(135deg, #059669 0%, #047857 100%);
            color: #ffffff;
            box-shadow: 0 2px 8px rgba(5, 150, 105, 0.28);
          `
        : css`
            background: linear-gradient(135deg, #0070ba 0%, #005fa0 100%);
            color: #ffffff;
            box-shadow: 0 2px 8px rgba(0, 112, 186, 0.28);
          `}
  }

  .action-content {
    flex: 1;
    min-width: 0;
  }

  .action-title {
    font-size: 0.8125rem;
    font-weight: 700;
    color: #0f172a;
    line-height: 1.3;
    transition: color 0.2s ease;
  }

  .action-desc {
    font-size: 0.71875rem;
    color: #64748b;
    margin-top: 0.125rem;
    line-height: 1.35;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }

  .action-arrow {
    width: 0.875rem;
    height: 0.875rem;
    color: #94a3b8;
    flex-shrink: 0;
    transition: all 0.2s ease;
  }

  &:hover {
    border-color: rgba(0, 112, 186, 0.35);
    background: linear-gradient(
      135deg,
      rgba(240, 247, 253, 0.6) 0%,
      #ffffff 100%
    );
    transform: translateY(-2px);
    box-shadow: 0 8px 18px -4px rgba(0, 112, 186, 0.14),
      0 2px 6px rgba(0, 0, 0, 0.02);

    .action-icon-box {
      transform: scale(1.05);
    }

    .action-title {
      color: #0070ba;
    }

    .action-arrow {
      color: #0070ba;
      transform: translateX(3px);
    }
  }

  &:active {
    transform: scale(0.99);
  }
`

/* Quick Prompt Pills */
export const QuickPillsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.3125rem;
  margin-top: 0.45rem;
  width: 100%;
`

export const QuickPillBtn = styled.button`
  border: 1px solid rgba(226, 232, 240, 0.95);
  background: #f8fafc;
  color: #475569;
  font-size: 0.65625rem;
  font-weight: 600;
  padding: 0.25rem 0.5625rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.18s ease;

  &:hover {
    background: #f0f7fd;
    border-color: rgba(0, 112, 186, 0.3);
    color: #0070ba;
    transform: translateY(-1px);
  }
`

/* Legacy Aliases for Existing Imports */
export const FeaturedCard = ActionCard
export const SecondaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  width: 100%;
`
export const SecondaryCard = styled.button`
  padding: 0.75rem 0.625rem;
  border-radius: 0.875rem;
  border: 1px solid rgba(226, 232, 240, 0.95);
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
  cursor: pointer;
  min-height: 90px;
  transition: all 0.22s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);

  .card-icon-box {
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    background: rgba(0, 112, 186, 0.1);
    color: #0070ba;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .card-title {
    font-size: 0.71875rem;
    font-weight: 600;
    color: #1e293b;
    line-height: 1.3;
  }

  &:hover {
    border-color: rgba(0, 112, 186, 0.35);
    background: rgba(240, 247, 253, 0.6);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px -3px rgba(0, 112, 186, 0.12);
  }
`
export const DividerBox = styled.div`
  width: 100%;
  margin: 0.875rem 0 0.625rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background: #e2e8f0;
`
export const DividerText = styled.span`
  font-size: 9px;
  font-weight: 700;
  color: #94a3b8;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`

/* =========================================================================
 * Chat Thread & Bubbles
 * ========================================================================= */

export const ThreadWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  width: 100%;
  max-width: 42rem;
  margin: 0 auto;
  padding: 0.25rem 0;
`

interface MsgRowProps {
  sender: 'user' | 'bot' | 'system'
}

export const MsgRow = styled.div<MsgRowProps>`
  display: flex;
  gap: 0.5rem;
  animation: ${fadeIn} 0.25s ease;

  ${({ sender }) =>
    sender === 'user' &&
    css`
      justify-content: flex-end;
    `}

  ${({ sender }) =>
    sender === 'bot' &&
    css`
      justify-content: flex-start;
      align-items: flex-start;
    `}

  .bot-avatar-col {
    width: 2rem;
    height: 2rem;
    border-radius: 0.625rem;
    background: linear-gradient(135deg, #f0f7fd 0%, #e2eef9 100%);
    border: 1px solid rgba(0, 112, 186, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 0.125rem;
    box-shadow: 0 2px 6px -1px rgba(0, 112, 186, 0.1);
  }
`

export const MsgCol = styled.div<{ sender?: 'user' | 'bot' | 'system' }>`
  display: flex;
  flex-direction: column;
  max-width: 86%;
  align-items: ${({ sender }) =>
    sender === 'user' ? 'flex-end' : 'flex-start'};

  @media (min-width: 640px) {
    max-width: 84%;
  }
`

interface BubbleProps {
  sender: 'user' | 'bot' | 'system'
}

export const Bubble = styled.div<BubbleProps>`
  width: 100%;
  border-radius: 1.125rem;
  padding: 0.75rem 0.9375rem;
  font-size: 0.8125rem;
  line-height: 1.6;
  position: relative;
  word-break: break-word;

  ${({ sender }) =>
    sender === 'user' &&
    css`
      background: linear-gradient(135deg, #0070ba 0%, #005696 100%);
      color: #ffffff;
      border-bottom-right-radius: 0.25rem;
      box-shadow: 0 4px 14px -2px rgba(0, 112, 186, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);

      p,
      div,
      span,
      strong {
        color: #ffffff !important;
      }
    `}

  ${({ sender }) =>
    sender === 'bot' &&
    css`
      background: #ffffff;
      border: 1px solid rgba(226, 232, 240, 0.9);
      color: #0f172a;
      border-bottom-left-radius: 0.25rem;
      box-shadow: 0 2px 10px -2px rgba(15, 23, 42, 0.05);
    `}

  /* Bot Header strip inside bubble */
  .bot-bubble-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.375rem;
    padding-bottom: 0.375rem;
    border-bottom: 1px solid rgba(241, 245, 249, 0.9);
  }

  .bot-name-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 10px;
    font-weight: 700;
    color: #0070ba;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  /* Prose styling for bot responses */
  .bot-prose {
    font-size: 0.8125rem;
    line-height: 1.65;
    color: #1e293b;

    p {
      margin: 0 0 0.5rem 0;
      &:last-child {
        margin-bottom: 0;
      }
    }

    .bot-heading {
      font-size: 0.875rem;
      font-weight: 700;
      color: #005fa0;
      margin-top: 0.75rem;
      margin-bottom: 0.375rem;
      line-height: 1.4;
      display: flex;
      align-items: center;
      gap: 0.375rem;

      &::before {
        content: '';
        width: 3px;
        height: 12px;
        border-radius: 2px;
        background: #0070ba;
        display: inline-block;
      }
    }

    .bot-bullet-row {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      margin: 0.25rem 0;
      padding-left: 0.125rem;

      .bullet-dot {
        color: #0070ba;
        font-weight: 800;
        line-height: 1.4;
        user-select: none;
      }
      .bullet-text {
        flex: 1;
        color: #334155;
      }
    }

    .bot-num-row {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      margin: 0.25rem 0;
      padding-left: 0.125rem;

      .num-prefix {
        color: #0070ba;
        font-weight: 700;
        font-size: 11px;
        min-width: 1.125rem;
        line-height: 1.45;
        user-select: none;
      }
      .num-text {
        flex: 1;
        color: #334155;
      }
    }

    hr {
      margin: 0.625rem 0;
      border: 0;
      border-top: 1px solid rgba(226, 232, 240, 0.85);
    }

    strong {
      font-weight: 700;
      color: #0f172a;
    }

    a {
      color: #0070ba;
      font-weight: 600;
      text-decoration: underline;
      text-underline-offset: 2px;
      transition: color 0.15s ease;
      &:hover {
        color: #004d82;
      }
    }

    .bot-paragraph {
      margin: 0.25rem 0;
      color: #1e293b;
      line-height: 1.6;
    }

    .streaming-caret {
      display: inline-block;
      width: 6px;
      height: 14px;
      margin-left: 4px;
      background: #0070ba;
      vertical-align: middle;
      border-radius: 2px;
      animation: ${pulse} 1.2s infinite;
    }
  }
`

export const MsgTimestamp = styled.div<{ sender?: 'user' | 'bot' | 'system' }>`
  margin-top: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  font-size: 10px;
  font-family: ui-monospace, SFMono-Regular, monospace;
  color: ${({ sender }) =>
    sender === 'user' ? 'rgba(224, 242, 254, 0.85)' : '#94a3b8'};

  .streaming-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    color: #0070ba;
    font-weight: 600;
    margin-right: auto;

    .tag-dot {
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: #0070ba;
      animation: ${pulse} 1.5s infinite;
    }
  }

  .copy-btn {
    border: none;
    background: transparent;
    color: #94a3b8;
    padding: 2px 4px;
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 3px;
    font-size: 10px;
    font-family: inherit;
    transition: all 0.18s ease;

    &:hover {
      color: #0070ba;
      background: #f1f5f9;
    }

    &.copied {
      color: #059669;
    }
  }
`

/* =========================================================================
 * Consultation Card (Official WhatsApp Direct)
 * ========================================================================= */

export const ConsultationCard = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.25rem;
  width: 100%;
  background: linear-gradient(135deg, #f0f7fd 0%, #e6f3fd 100%);
  border: 1px solid rgba(0, 112, 186, 0.22);
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 14px -3px rgba(0, 112, 186, 0.1);
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(0, 112, 186, 0.35);
    box-shadow: 0 6px 20px -3px rgba(0, 112, 186, 0.15);
  }
`

export const ConsultationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 0.375rem;
`

export const ConsultationBadge = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.625rem;
  background: linear-gradient(135deg, #0070ba 0%, #005fa0 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 3px 8px rgba(0, 112, 186, 0.25);
`

export const ConsultationTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.35;
  margin: 0;
`

export const ConsultationDesc = styled.p`
  font-size: 0.78125rem;
  color: #475569;
  line-height: 1.5;
  font-weight: 400;
  margin: 0 0 0.75rem 0;
`

export const BtnWa = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.625rem 1rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.8125rem;
  text-decoration: none;
  box-shadow: 0 4px 14px -2px rgba(37, 211, 102, 0.4);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: linear-gradient(135deg, #20bd5a 0%, #0e7065 100%);
    box-shadow: 0 6px 18px -2px rgba(37, 211, 102, 0.5);
    transform: translateY(-1px);
    color: #ffffff;
  }

  &:active {
    transform: scale(0.99);
  }
`

/* =========================================================================
 * Diagnostic Module (Consultative Discovery)
 * ========================================================================= */

export const DiagModule = styled.div`
  margin-top: 0.75rem;
  width: 100%;
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    rgba(240, 249, 255, 0.5) 50%,
    rgba(0, 112, 186, 0.06) 100%
  );
  border: 1px solid rgba(0, 112, 186, 0.2);
  border-radius: 1rem;
  padding: 0.875rem;
  box-shadow: 0 2px 8px rgba(0, 112, 186, 0.06);

  @media (min-width: 640px) {
    width: 98%;
    padding: 1rem;
  }

  .diag-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 0.625rem;
    margin-bottom: 0.75rem;
  }

  .diag-badge-left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 0;
  }

  .diag-icon-box {
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 0.5rem;
    background: linear-gradient(135deg, #0070ba 0%, #005fa0 100%);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 2px 4px rgba(0, 112, 186, 0.2);
  }

  .diag-titles {
    min-width: 0;
  }

  .diag-badge-label {
    font-size: 10px;
    font-weight: 700;
    color: #0070ba;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .diag-service-name {
    font-size: 0.75rem;
    font-weight: 600;
    color: #1e293b;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .diag-step-pill {
    font-size: 10px;
    font-weight: 700;
    padding: 0.25rem 0.625rem;
    border-radius: 9999px;
    border: 1px solid #bae6fd;
    background: #f0f7fd;
    color: #0070ba;
    flex-shrink: 0;

    &.completed {
      background: #ecfdf5;
      color: #047857;
      border-color: #a7f3d0;
    }
  }

  .diag-step-content {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  .diag-question {
    font-size: 0.78125rem;
    font-weight: 600;
    color: #0f172a;
    line-height: 1.4;
    margin: 0;
  }

  .diag-opt-list {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    padding-top: 0.25rem;
  }

  .diag-choice-chip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(240, 247, 253, 0.85);
    border: 1px solid rgba(0, 112, 186, 0.2);
    border-radius: 0.75rem;
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
    color: #334155;

    .chip-left {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-right: 0.5rem;
      font-weight: 500;
    }

    .chip-step-label {
      color: #94a3b8;
      font-weight: 600;
      margin-right: 0.25rem;
    }

    .chip-reset-btn {
      color: #0070ba;
      font-weight: 600;
      font-size: 11px;
      flex-shrink: 0;
      background: none;
      border: none;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .diag-summary-box {
    padding: 0.75rem;
    background: rgba(236, 253, 245, 0.85);
    border: 1px solid rgba(167, 243, 208, 0.9);
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    .summary-label {
      font-size: 10px;
      font-weight: 700;
      color: #065f46;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .summary-text {
      font-size: 0.75rem;
      font-weight: 600;
      color: #064e3b;
      line-height: 1.5;
      margin: 0;
    }
  }

  .diag-cta-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    padding-top: 0.25rem;

    .diag-wa-btn {
      background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
      color: #ffffff;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.5rem 0.875rem;
      border-radius: 0.75rem;
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
      text-decoration: none;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(37, 211, 102, 0.35);
      transition: all 0.2s ease;
      &:hover {
        background: linear-gradient(135deg, #20bd5a 0%, #0e7065 100%);
        transform: translateY(-1px);
        color: #ffffff;
      }
    }

    .diag-restart-btn {
      color: #64748b;
      font-size: 0.75rem;
      font-weight: 500;
      padding: 0.25rem 0.5rem;
      background: none;
      border: none;
      cursor: pointer;
      transition: color 0.15s ease;
      &:hover {
        color: #1e293b;
      }
    }
  }
`

export const DiagOptBtn = styled.button`
  width: 100%;
  text-align: left;
  padding: 0.625rem 0.8125rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);

  .diag-opt-icon {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 9999px;
    background: #f1f5f9;
    color: #64748b;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 0.125rem;
    transition: all 0.2s ease;
  }

  .diag-opt-text-wrap {
    flex: 1;
    min-width: 0;
  }

  .diag-opt-title {
    font-size: 0.75rem;
    font-weight: 600;
    color: #1e293b;
    display: block;
    line-height: 1.35;
    transition: color 0.2s ease;
  }

  .diag-opt-desc {
    font-size: 11px;
    color: #64748b;
    margin-top: 0.125rem;
    display: block;
    line-height: 1.3;
    font-weight: 400;
  }

  &:hover {
    border-color: #0070ba;
    background: rgba(240, 247, 253, 0.85);
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(0, 112, 186, 0.08);

    .diag-opt-icon {
      background: rgba(0, 112, 186, 0.1);
      color: #0070ba;
    }

    .diag-opt-title {
      color: #0070ba;
    }
  }
`

/* =========================================================================
 * Follow-up Suggestions
 * ========================================================================= */

export const FollowupWrap = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  width: 100%;

  .followup-label {
    font-size: 10.5px;
    font-weight: 600;
    color: #64748b;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`

export const FollowupChip = styled.button`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  background: #ffffff;
  color: #334155;
  padding: 0.4375rem 0.75rem;
  border-radius: 9999px;
  border: 1px solid rgba(226, 232, 240, 0.95);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);

  &:hover {
    background: rgba(240, 247, 253, 0.9);
    border-color: rgba(0, 112, 186, 0.4);
    color: #0070ba;
    transform: translateY(-1px);
    box-shadow: 0 4px 10px -2px rgba(0, 112, 186, 0.15);
  }

  &:active {
    transform: scale(0.98);
  }
`

/* =========================================================================
 * Typing Indicator
 * ========================================================================= */

export const TypingRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
`

export const TypingBubble = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  border-bottom-left-radius: 2px;
  padding: 0.5625rem 0.8125rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
`

export const TypingDot = styled.div<{ delay?: string }>`
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: #0070ba;
  animation: ${bounce} 1s infinite;
  ${({ delay }) => delay && `animation-delay: ${delay};`}
`

/* =========================================================================
 * Service Badges & Sources
 * ========================================================================= */

export const ServiceBadge = styled.div`
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.625rem;
  background: rgba(0, 112, 186, 0.07);
  color: #0070ba;
  border: 1px solid rgba(0, 112, 186, 0.18);
  border-radius: 0.5rem;
  font-size: 0.71875rem;
  font-weight: 600;
  letter-spacing: -0.01em;
`

export const SourcesWrap = styled.div`
  margin-top: 0.5rem;
  padding-top: 0.4375rem;
  border-top: 1px solid rgba(226, 232, 240, 0.8);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.71875rem;
  color: #64748b;

  .sources-label {
    font-size: 9.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #94a3b8;
  }
`

export const SourceTag = styled.span`
  background: #f8fafc;
  padding: 0.1875rem 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid rgba(226, 232, 240, 0.95);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 10px;
  color: #475569;
  font-weight: 500;
`

/* =========================================================================
 * Teaser Card (Proactive Bubble)
 * ========================================================================= */

export const TeaserCard = styled.div`
  max-width: 320px;
  width: 100%;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(16px);
  border-radius: 1.125rem;
  padding: 0.875rem 1rem;
  box-shadow: 0 16px 36px -8px rgba(0, 30, 60, 0.2),
    0 0 0 1px rgba(0, 112, 186, 0.14);
  border: 1px solid rgba(226, 232, 240, 0.85);
  cursor: pointer;
  animation: ${fadeIn} 0.25s ease, ${slideUp} 0.25s ease;
  pointer-events: auto;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    border-color: rgba(0, 112, 186, 0.35);
    transform: translateY(-2px);
    box-shadow: 0 20px 42px -8px rgba(0, 30, 60, 0.26),
      0 0 0 1px rgba(0, 112, 186, 0.25);
  }

  .teaser-badge-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.375rem;
  }

  .teaser-badge {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 11px;
    font-weight: 700;
    color: #0070ba;
  }

  .teaser-pulse-dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: #10b981;
    animation: ${pulse} 2s infinite;
  }

  .teaser-close-btn {
    color: #94a3b8;
    background: transparent;
    border: none;
    border-radius: 0.375rem;
    padding: 0.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.15s ease;
    &:hover {
      color: #475569;
      background: #f1f5f9;
    }
  }

  .teaser-title {
    font-size: 0.875rem;
    font-weight: 700;
    color: #0f172a;
    line-height: 1.35;
    margin: 0;
  }

  .teaser-body {
    font-size: 0.75rem;
    color: #64748b;
    margin-top: 0.25rem;
    line-height: 1.45;
  }

  .teaser-footer {
    margin-top: 0.5rem;
    padding-top: 0.4375rem;
    border-top: 1px solid #f1f5f9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
  }

  .teaser-cta {
    font-weight: 700;
    color: #0070ba;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .teaser-subtext {
    font-size: 10px;
    color: #94a3b8;
  }
`

/* =========================================================================
 * Footer & Input Bar
 * ========================================================================= */

export const ChatFooter = styled.div`
  position: relative;
  bottom: 0;
  z-index: 20;
  flex-shrink: 0;
  border-top: 1px solid rgba(241, 245, 249, 0.95);
  padding: 0.625rem 0.875rem;
  padding-bottom: max(0.625rem, env(safe-area-inset-bottom));
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(12px);
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.02);
`

export const InputForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
`

export const ChatInput = styled.input`
  width: 100%;
  background: #f8fafc;
  color: #0f172a;
  font-size: 0.8125rem;
  font-weight: 400;
  padding: 0.625rem 2.75rem 0.625rem 1rem;
  border-radius: 9999px;
  border: 1px solid #e2e8f0;
  outline: none;
  transition: all 0.2s ease;
  font-family: inherit;

  @media (min-width: 640px) {
    font-size: 0.84375rem;
    padding: 0.6875rem 2.875rem 0.6875rem 1.125rem;
  }

  &:hover {
    background: #ffffff;
    border-color: #cbd5e1;
  }

  &:focus {
    background: #ffffff;
    border-color: #0070ba;
    box-shadow: 0 0 0 3px rgba(0, 112, 186, 0.12);
  }

  &::placeholder {
    color: #94a3b8;
    font-weight: 400;
  }
`

interface SendBtnProps {
  isStop?: boolean
}

export const SendBtn = styled.button<SendBtnProps>`
  position: absolute;
  right: 0.3125rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0070ba 0%, #005696 100%);
  color: #ffffff;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 112, 186, 0.25);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover:not(:disabled) {
    transform: translateY(-50%) scale(1.08);
    box-shadow: 0 4px 10px rgba(0, 112, 186, 0.35);
  }

  &:active:not(:disabled) {
    transform: translateY(-50%) scale(0.95);
  }

  &:disabled {
    background: #f1f5f9;
    color: #cbd5e1;
    box-shadow: none;
    cursor: not-allowed;
  }

  ${({ isStop }) =>
    isStop &&
    css`
      background: #fee2e2;
      color: #e11d48;
      box-shadow: 0 2px 6px rgba(225, 29, 72, 0.15);
      &:hover {
        background: #fecdd3;
        transform: translateY(-50%) scale(1.08);
      }
    `}
`

export const DisclaimerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  text-align: center;
  font-size: 10px;
  color: #94a3b8;
  margin-top: 0.375rem;
  font-weight: 400;
  user-select: none;
`

/* =========================================================================
 * No-scrollbar utility
 * ========================================================================= */
export const noScrollbarStyles = css`
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
