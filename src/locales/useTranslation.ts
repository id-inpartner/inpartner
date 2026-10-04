import { useRouter } from 'next/router'
import en from './en'
import ko from './ko'
import type { TranslationDictionary } from './types'

export interface UseTranslationReturn {
  t: TranslationDictionary
  locale: string
  isKo: boolean
}

export const useTranslation = (): UseTranslationReturn => {
  const router = useRouter()
  const locale = router?.locale || 'en'
  const isKo = locale === 'ko'
  const t = isKo ? ko : en

  return { t, locale, isKo }
}

export default useTranslation
