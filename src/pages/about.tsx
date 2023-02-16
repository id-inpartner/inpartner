import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '@containers/About'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Most Trusted Consulting Partner | Inpartner</title>
        <meta
          name="description"
          content="Through our Consultation Services, we take a holistic approach to identify the right problem and give clear guides to unleash the power of your business for a brighter future"
        />
      </Head>
      <Navbar />
      <Container />
      <Footer />
    </>
  )
}

export default Page
