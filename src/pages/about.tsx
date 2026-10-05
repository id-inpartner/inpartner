import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Container from '@containers/About'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import SEO from '@components/SEO'
import { organizationSchema } from '@utils/seo-schemas'

const Page: NextPage = () => {
  const router = useRouter()
  const isKo = router.locale === 'ko'

  const title = isKo
    ? '인파트너 소개 | 인도네시아 전문 경영 컨설팅 펌 (Inpartner)'
    : 'About Inpartner | Management Consulting & Investment Advisory'
  const description = isKo
    ? '2009년 설립된 PT Inpartner Optima Integra는 자카르타 본사와 수라바야 지사를 기반으로 국내외 중견·대기업에 최적화된 경영 및 투자 솔루션을 제공합니다.'
    : 'Established in 2009, PT Inpartner Optima Integra provides strategic corporate consulting, feasibility studies, and investment advisory in Indonesia.'

  return (
    <>
      <SEO
        title={title}
        description={description}
        schemaData={organizationSchema}
      />
      <Navbar />
      <Container />
      <Footer />
    </>
  )
}

export default Page
