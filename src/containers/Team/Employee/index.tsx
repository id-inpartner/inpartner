import Image from '@components/Image'
import employees from './employees'
import { Aspect, Card, Container, Dummy, Name, Pos } from './styled'
import useTranslation from '../../../locales/useTranslation'

const positionTranslations: Record<string, { en: string; ko: string }> = {
  'Business Development & Strategy': {
    en: 'Business Development & Strategy',
    ko: '사업 개발 및 전략',
  },
  'Financial Controller': {
    en: 'Financial Controller',
    ko: '재무 총괄 (Financial Controller)',
  },
  'Content Writer & SEO Specialist': {
    en: 'Content Writer & SEO Specialist',
    ko: '콘텐츠 작가 및 SEO 전문가',
  },
  'Corporate Partnership': {
    en: 'Corporate Partnership',
    ko: '기업 파트너십 및 제휴',
  },
  'Creative Designer': {
    en: 'Creative Designer',
    ko: '크리에이티브 디자이너',
  },
  'Creatie Designer': {
    en: 'Creative Designer',
    ko: '크리에이티브 디자이너',
  },
  'Legal & Compliance': {
    en: 'Legal & Compliance',
    ko: '법무 및 컴플라이언스',
  },
  'Investment Analyst': {
    en: 'Investment Analyst',
    ko: '투자 분석가 (Investment Analyst)',
  },
  'Junior Consultant': {
    en: 'Junior Consultant',
    ko: '주니어 컨설턴트',
  },
  'Web Programming & IT Solution': {
    en: 'Web Programming & IT Solution',
    ko: '웹 개발 및 IT 솔루션',
  },
}

export const Employee = () => {
  const { locale } = useTranslation()
  const isKo = locale === 'ko'

  const translatePos = (pos: string) => {
    if (!pos) return ''
    const match = positionTranslations[pos.trim()]
    if (match) {
      return isKo ? match.ko : match.en
    }
    return pos
  }

  return (
    <Container>
      {employees.map((it, i) => (
        <Card key={i} aria-hidden={it.h}>
          <Aspect>
            <Image
              src={it.src}
              fill
              quality={100}
              alt={it.name || 'Inpartner Team Member'}
              sizes="(min-width: 1200px) 250px, (min-width: 768px) 33vw, 50vw"
            />
          </Aspect>
          <Name>{it.name}</Name>
          <Pos>{translatePos(it.pos)}</Pos>
        </Card>
      ))}
      <Dummy aria-hidden />
      <Dummy aria-hidden />
    </Container>
  )
}
