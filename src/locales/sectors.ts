export interface SectorTranslation {
  readonly en: string
  readonly ko: string
}

export const sectorMap: Record<string, SectorTranslation> = {
  'restructuring-pre-ipo-ipo-and-right-issue': {
    en: 'Restructuring, Pre-IPO, IPO, and Right Issue',
    ko: '기업 구조조정, 프리IPO, IPO 및 유상증자',
  },
  'alternative-investment': {
    en: 'Alternative Investment',
    ko: '대체 투자 (사모펀드 & 벤처캐피탈)',
  },
  'financial-services': {
    en: 'Financial Services',
    ko: '금융 서비스 및 자산 관리',
  },
  'health-and-pharmaceutical': {
    en: 'Health and Pharmaceutical',
    ko: '보건 의료 및 제약 바이오',
  },
  biotechnology: {
    en: 'Biotechnology',
    ko: '생명공학 및 바이오테크',
  },
  'renewable-energy': {
    en: 'Renewable Energy',
    ko: '신재생에너지 및 클린테크',
  },
  'waste-solution': {
    en: 'Waste Solution',
    ko: '폐기물 처리 및 환경 솔루션',
  },
  'property-investment-and-development': {
    en: 'Property Investment and Development',
    ko: '부동산 투자 및 개발',
  },
  'electric-vehicle': {
    en: 'Electric Vehicle',
    ko: '전기차 (EV) 및 이차전지',
  },
  infrastructure: {
    en: 'Infrastructure',
    ko: '인프라 및 사회간접자본',
  },
  'information-technology': {
    en: 'Information Technology',
    ko: '정보기술 (IT) 및 디지털 솔루션',
  },
  'environmental-social-and-governance': {
    en: 'Environmental, Social, and Governance',
    ko: 'ESG (환경·사회·지배구조) 경영',
  },
  'food-and-beverange': {
    en: 'Food and Beverage',
    ko: '식음료 (F&B) 및 농식품 산업',
  },
  'industrial-gas': {
    en: 'Industrial Gas',
    ko: '산업용 가스 및 화학',
  },
}

export const getSectorTitle = (
  slug: string | undefined,
  defaultTitle: string,
  locale: string = 'en'
): string => {
  if (!slug) return defaultTitle
  const cleanSlug = slug.toLowerCase().trim()
  const found = sectorMap[cleanSlug]
  if (!found) return defaultTitle
  return locale === 'ko' ? found.ko : found.en || defaultTitle
}

export const getSectorTitleByName = (
  name: string | undefined,
  locale: string = 'en'
): string => {
  if (!name) return ''
  if (locale !== 'ko') return name
  const lower = name.toLowerCase().trim()
  for (const key of Object.keys(sectorMap)) {
    const item = sectorMap[key]
    if (
      key === lower ||
      item.en.toLowerCase() === lower ||
      lower.includes(key.replace(/-/g, ' ')) ||
      item.en.toLowerCase().includes(lower)
    ) {
      return item.ko
    }
  }
  return name
}

export const getCategoryTitle = (
  name: string | undefined,
  locale: string = 'en'
): string => {
  if (!name) return ''
  if (locale !== 'ko') return name
  const lower = name.toLowerCase()
  if (lower.includes('business')) return '경영 및 비즈니스 컨설팅'
  if (lower.includes('investment')) return '투자 자문 및 금융'
  if (lower.includes('capacity')) return '기업 역량 강화 프로그램'
  return name
}
