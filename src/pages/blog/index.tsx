import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import axios from 'axios'
import Container, { IndexProps } from '@containers/Blog'

const Page: NextPage<IndexProps> = (props) => {
  return (
    <>
      <Head>
        <title>Blog Inpartner</title>
        <meta
          name="description"
          content="Inpartner involves the planning, organizing, and overseeing of resources to achieve a specific goal or objective within a defined timeline and budget"
        />
      </Head>
      <Navbar />
      <Container {...props} />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const posts = await axios.get(`${process.env.BLOG_URL}wp-json/wp/v2/posts`, {
    params: {
      _embed: 1,
      categories: Array.isArray(query.c) ? query.c.join(',') : query.c,
      search: query.q,
    },
    headers: { accept: 'application/json' },
  })
  const categories = await axios.get(
    `${process.env.BLOG_URL}wp-json/wp/v2/categories`,
    {
      params: { _embed: 1 },
      headers: { accept: 'application/json' },
    }
  )
  return { props: { posts: posts.data, categories: categories.data } }
}

export default Page
