import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Container from '@containers/Services'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import SEO from '@components/SEO'
import { servicesSchema } from '@utils/seo-schemas'

const Page: NextPage = () => {
  const router = useRouter()
  const isKo = router.locale === 'ko'

  const title = isKo
    ? '전문 컨설팅 서비스 안내 | 인도네시아 인파트너 (Inpartner)'
    : 'Consulting & Investment Advisory Services | Inpartner Indonesia'
  const description = isKo
    ? '인도네시아 경영 전략 수립, 시장 조사, 사업 타당성 조사(FS), 투자 자문 및 기업 역량 강화 프로그램 등 인파트너의 전방위 B2B 전문 자문 서비스를 확인하십시오.'
    : "Explore Inpartner's comprehensive advisory services: corporate strategy, operational optimization, market research, and investment feasibility studies."

  return (
    <>
      <SEO
        title={title}
        description={description}
        schemaData={servicesSchema}
      />
      <Navbar />
      <Container />
      <Footer />
    </>
  )
}

export default Page
