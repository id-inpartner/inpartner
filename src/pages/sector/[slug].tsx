import type { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Container, { Sector } from '@containers/Sector'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import SEO from '@components/SEO'

import { getSectorContent } from '../../locales/sectors'

const Page: NextPage<Sector> = (props) => {
  const router = useRouter()
  const locale = router.locale || 'en'
  const isKo = locale === 'ko'

  const content = getSectorContent(props.slug, props, locale)

  const rawDesc = content.description
    ? content.description.replace(/<[^>]+>/g, '').trim()
    : ''
  const title = isKo
    ? `${content.title} | 산업별 커버리지 | 인파트너`
    : `${content.metaTitle || content.title} | Inpartner`

  const description = isKo
    ? content.metaDescription ||
      `인파트너(Inpartner)의 ${
        content.title
      } 부문 전문 컨설팅 및 자문 서비스를 확인하십시오. ${
        rawDesc.slice(0, 120) || ''
      }`
    : content.metaDescription ||
      rawDesc.slice(0, 155) ||
      `${content.title} advisory services by Inpartner.`

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
