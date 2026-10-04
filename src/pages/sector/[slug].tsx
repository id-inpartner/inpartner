import type { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Container, { Sector } from '@containers/Sector'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import SEO from '@components/SEO'

const Page: NextPage<Sector> = (props) => {
  const router = useRouter()
  const isKo = router.locale === 'ko'

  const rawDesc = props.description
    ? props.description.replace(/<[^>]+>/g, '').trim()
    : ''
  const title = isKo
    ? `${props.title} | 산업별 커버리지 | 인파트너`
    : `${props.metaTitle || props.title} | Inpartner`

  const description = isKo
    ? `인파트너(Inpartner)의 ${
        props.title
      } 부문 전문 컨설팅 및 자문 서비스를 확인하십시오. ${
        props.metaDescription || rawDesc.slice(0, 120) || ''
      }`
    : props.metaDescription ||
      rawDesc.slice(0, 155) ||
      `${props.title} advisory services by Inpartner.`

  return (
    <>
      <SEO title={title} description={description} ogImage={props.image} />
      <Navbar />
      <Container data={props} />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const { sequelize, Op } = req.ctx
  const { Sector } = sequelize.models
  const { slug } = query
  const datum = await Sector.findOne({
    where: { slug: { [Op.like]: `%${slug}%` } },
    include: [
      {
        association: 'projects',
        include: [
          { association: 'sector', attributes: ['id', 'title', 'name'] },
          { association: 'category', attributes: ['id', 'title', 'name'] },
        ],
        limit: 3,
      },
    ],
  })
  if (!datum) {
    return { notFound: true }
  }
  return { props: JSON.parse(JSON.stringify(datum.toJSON())) }
}

export default Page
