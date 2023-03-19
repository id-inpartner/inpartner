import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import axios from 'axios'
import Container, { IndexProps } from '@containers/Category'
import type { Category, Post } from '@containers/Category/types'

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

export const getServerSideProps: GetServerSideProps<IndexProps> = async ({
  req,
  query,
}) => {
  const slug = (query.slug as string).toLowerCase()
  const res = await axios.get<ReadonlyArray<Category>>(
    `${process.env.BLOG_URL}wp-json/wp/v2/categories`,
    {
      params: { _embed: 1, _fields: 'id,name,slug' },
      headers: { accept: 'application/json' },
    }
  )

  const category = res.data.find((it) => it.slug.toLowerCase() === slug)
  if (!category) {
    return { notFound: true }
  }
  const categories = res.data.filter(
    (it) => it.slug.toLowerCase() !== slug && it.slug !== 'others'
  )

  const posts = await axios.get<ReadonlyArray<Post>>(
    `${process.env.BLOG_URL}wp-json/wp/v2/posts`,
    {
      params: {
        _embed: 1,
        categories: category.id,
        per_page: 6,
        _fields:
          'id,title,slug,modified,categories,_embedded,_links.wp:featuredmedia,_links.wp:term',
      },
      headers: { accept: 'application/json' },
    }
  )
  return { props: { category, posts: posts.data, categories } }
}

export default Page
