import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Container, { Sector } from '@containers/Sectors'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import { jsonify } from '@utils/json'

const Page: NextPage<{ readonly data: ReadonlyArray<Sector> }> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Inpartner sector coverage</title>
        <meta
          name="description"
          content="Restructuring, Pre-IPO, IPO, and Right Issue, Alternative Investment, Financial Services, Biotechnology, Information Technology and ESG"
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
    props: { data: JSON.parse(JSON.stringify(jsonify(data))) },
  }
}

export default Page
