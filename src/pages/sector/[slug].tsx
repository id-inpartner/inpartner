import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Container, { Sector } from '@containers/Sector'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const Page: NextPage<Sector> = (props) => {
  return (
    <>
      <Head>
        <title>Sectors & Themes Coverage | INPARTNER CONSULTANT</title>
        <meta
          name="description"
          content="Through our Consultation Services, we take a holistic approach to identify the problem and give you a home run."
        />
      </Head>
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
          { association: 'sector', attributes: ['id', 'title'] },
          { association: 'category', attributes: ['id', 'title'] },
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
