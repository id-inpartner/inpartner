import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Container from '@containers/Contact'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import SEO from '@components/SEO'
import { contactFaqSchema } from '@utils/seo-schemas'

const Page: NextPage = () => {
  const router = useRouter()
  const isKo = router.locale === 'ko'

  const title = isKo
    ? '상담 문의 및 오피스 안내 | 인파트너 (자카르타·수라바야)'
    : 'Contact Us | Inpartner Consulting Offices Jakarta & Surabaya'
  const description = isKo
    ? '인파트너 자카르타 본사 및 수라바야 지사 연락처. 한국 기업의 인도네시아 진출, 사업 타당성 조사, 투자 자문 상담을 신속하게 접수하십시오.'
    : "Connect with Inpartner's senior consultants in Jakarta and Surabaya. Request a consultation for strategic business management or investment advisory."

  return (
    <>
      <SEO
        title={title}
        description={description}
        schemaData={contactFaqSchema}
      />
      <Navbar />
      <Container />
      <Footer />
    </>
  )
}

export default Page
