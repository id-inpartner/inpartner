/**
 * Inpartner AI Advisory Assistant
 * Component Entrypoint for Host Integration
 */

import ChatbotMount from './ChatbotMount'
export { default as ChatbotIcon } from './ChatbotIcon'
export { ChatbotMount }
export type { ChatbotMountProps } from './ChatbotMount'
export type { ActiveDiagnosticSession } from './ChatWidget'

export default ChatbotMount
