import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '@containers/About'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const Page: NextPage = () => {
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
      <Container />
      <Footer />
    </>
  )
}

export default Page
