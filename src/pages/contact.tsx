import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '@containers/Contact'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Get in Touch with Inpartner</title>
        <meta name="description" content="Get in Touch with Inpartner" />
      </Head>
      <Navbar />
      <Container />
      <Footer />
    </>
  )
}

export default Page
