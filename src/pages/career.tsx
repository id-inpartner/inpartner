import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Container from '@containers/Career'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import SEO from '@components/SEO'

const Page: NextPage = () => {
  const router = useRouter()
  const isKo = router.locale === 'ko'

  const title = isKo
    ? '인재 채용 및 커리어 | 인파트너'
    : 'Career Opportunities | Inpartner Consulting'
  const description = isKo
    ? '인파트너의 전문 경영 컨설팅 및 투자 자문 팀과 함께할 역량 있는 인재를 모집합니다.'
    : "Explore career opportunities and join Inpartner's management consulting and investment advisory team in Jakarta and Surabaya."

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
