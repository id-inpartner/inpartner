import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Container, { IndexProps } from '@containers/Home'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import axios from 'axios'

const Page: NextPage<IndexProps> = (props) => {
  return (
    <>
      <Head>
        <title>
          Business Consultant Company, Jakarta, Indonesia | Inpartner
        </title>
        <meta
          name="description"
          content="Inpartner are The Most Trusted Consulting Partner To help create positive and endure changes in Local and Global Coverage"
        />
      </Head>
      <Navbar />
      <Container {...props} />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
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
