import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Container, { Sector } from '@containers/Sectors'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const Page: NextPage<{ readonly data: ReadonlyArray<Sector> }> = ({ data }) => {
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
      <Container data={data} />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { sequelize } = req.ctx
  const { Sector } = sequelize.models
  const data = await Sector.findAll()
  return {
    props: { data: JSON.parse(JSON.stringify(data.map((d) => d.toJSON()))) },
  }
}

export default Page
