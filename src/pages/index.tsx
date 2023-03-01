import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Container, { IndexProps } from '@containers/Home'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const Page: NextPage<IndexProps> = ({ projects }) => {
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
      <Container projects={projects} />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { sequelize } = req.ctx
  const { Project } = sequelize.models

  const transaction = await sequelize.transaction()
  try {
    const projects = await Project.findAll({
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
    })
    await transaction.commit()
    return {
      props: {
        projects: JSON.parse(JSON.stringify(projects.map((d) => d.toJSON()))),
      },
    }
  } catch (e) {
    await transaction.rollback()
    return {
      props: { projects: [] },
    }
  }
}

export default Page
