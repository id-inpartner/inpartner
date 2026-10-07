/**
 * Inpartner AI Advisory Assistant & Lead Generation Engine
 * Component Entrypoint for Host Integration
 */

import ChatbotMount from './ChatbotMount'
export { default as ChatWidget } from './ChatWidget'
export { default as ChatbotIcon } from './ChatbotIcon'
export { ChatbotMount }
export type { ChatbotMountProps } from './ChatbotMount'
export type { ActiveDiagnosticSession } from './ChatWidget'

export default ChatbotMount
