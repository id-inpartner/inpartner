import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Container, { Sector } from '@containers/Sectors'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import SEO from '@components/SEO'
import { jsonify } from '@utils/json'

const Page: NextPage<{ readonly data: ReadonlyArray<Sector> }> = ({ data }) => {
  const router = useRouter()
  const isKo = router.locale === 'ko'

  const title = isKo
    ? '산업별 커버리지 & 전문 분야 | 인파트너'
    : 'Industry Sectors Coverage | Inpartner Indonesia'
  const description = isKo
    ? '인프라, 신재생에너지, 프리IPO 기업 구조조정, 클린테크 및 IT 등 인파트너의 광범위한 산업별 자문 역량을 확인하십시오.'
    : "Explore Inpartner's extensive cross-sector coverage: infrastructure, renewable energy, pre-IPO restructuring, cleantech, and information technology."

  return (
    <>
      <SEO title={title} description={description} />
      <Navbar />
      <Container data={data} />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (!req?.ctx?.sequelize) {
    return { props: { data: [] } }
  }
  const { sequelize } = req.ctx
  const { Sector } = sequelize.models
  const data = await Sector.findAll()
  return {
    props: { data: JSON.parse(JSON.stringify(jsonify(data))) },
  }
}

export default Page
