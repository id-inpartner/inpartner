import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '@containers/Services'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Business and Management Consulting, Investment, Capacity Building
        </title>
        <meta
          name="description"
          content="Inpartner Services Cover Business and Management Consulting, Investment and Capacity Building (Inpartner Academy)"
        />
      </Head>
      <Navbar />
      <Container />
      <Footer />
    </>
  )
}

export default Page
