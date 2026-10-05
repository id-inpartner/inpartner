import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Container from '@containers/Team'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import SEO from '@components/SEO'

const Page: NextPage = () => {
  const router = useRouter()
  const isKo = router.locale === 'ko'

  const title = isKo
    ? '전문 컨설턴트 및 파트너 소개 | 인파트너'
    : 'Leadership & Professional Team | Inpartner'
  const description = isKo
    ? '기업 경영 전략 및 투자 자문 분야에서 탁월한 성과를 창출하는 인파트너의 전문 컨설턴트 팀을 소개합니다.'
    : "Meet Inpartner's experienced partners and management consultants dedicated to delivering strategic results for enterprise clients."

  return (
    <>
      <SEO title={title} description={description} />
      <Navbar />
      <Container />
      <Footer />
    </>
  )
}

export default Page
