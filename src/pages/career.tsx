import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '@containers/Career'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lowongan Kerja Inpartner</title>
        <meta name="description" content="Lowongan kerja terdekat" />
      </Head>
      <Navbar />
      <Container />
      <Footer />
    </>
  )
}

export default Page
