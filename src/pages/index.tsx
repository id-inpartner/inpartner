import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Container, { IndexProps } from '@containers/Home'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const Page: NextPage<IndexProps> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>INPARTNER CONSULTANT</title>
        <meta
          name="description"
          content="Through our Consultation Services, we take a holistic approach to identify the problem and give you a home run."
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
      order: [['id', 'ASC']],
      include: [
        {
          association: 'category',
          attributes: ['id', 'title'],
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
