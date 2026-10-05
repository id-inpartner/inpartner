import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Container, { IndexProps } from '@containers/Home'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import SEO from '@components/SEO'
import { organizationSchema } from '@utils/seo-schemas'
import axios from 'axios'

const Page: NextPage<IndexProps> = (props) => {
  const router = useRouter()
  const isKo = router.locale === 'ko'

  const title = isKo
    ? '인도네시아 비즈니스 경영 컨설팅 및 투자 자문 | 인파트너'
    : 'Business & Management Consulting Jakarta | Inpartner'
  const description = isKo
    ? '인파트너(Inpartner)는 한국 기업의 인도네시아 시장 진출, 현지 법인 설립 자문, 사업 타당성 조사(FS), 투자 실사를 전문으로 지원하는 현지 전략 컨설팅 펌입니다.'
    : 'Inpartner is a leading management consulting and investment advisory firm in Jakarta and Surabaya, helping enterprises drive growth and optimize operations.'

  return (
    <>
      <SEO
        title={title}
        description={description}
        schemaData={organizationSchema}
      />
      <Navbar />
      <Container {...props} />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (!req?.ctx?.sequelize) {
    return {
      props: { projects: [], sectors: [], posts: [] },
    }
  }
  const { sequelize } = req.ctx
  const { Project, Sector } = sequelize.models

  const transaction = await sequelize.transaction()
  try {
    const [projects, sectors, posts] = await Promise.all([
      Project.findAll({
        transaction,
        limit: 3,
        order: [['promotedWeight', 'DESC']],
        include: [
          {
            association: 'category',
            attributes: ['id', 'title', 'name'],
          },
          {
            association: 'sector',
            attributes: ['id', 'title', 'name'],
          },
        ],
      }),
      Sector.findAll({
        transaction,
      }),
      axios.get(`${process.env.BLOG_URL}wp-json/wp/v2/posts`, {
        params: {
          _embed: 1,
          per_page: 3,
          page: 1,
          _fields:
            'id,title,slug,modified,categories,_embedded,_links.wp:featuredmedia,_links.wp:term',
        },
        headers: { accept: 'application/json' },
      }),
    ])
    await transaction.commit()
    return {
      props: {
        projects: JSON.parse(JSON.stringify(projects.map((d) => d.toJSON()))),
        sectors: JSON.parse(JSON.stringify(sectors.map((d) => d.toJSON()))),
        posts: posts.data,
      },
    }
  } catch (e) {
    await transaction.rollback()
    return {
      props: { projects: [], sectors: [], posts: [] },
    }
  }
}

export default Page
