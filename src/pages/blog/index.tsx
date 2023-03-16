import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import axios from 'axios'
import Container, { IndexProps } from '@containers/Blog'
import type { Category, Post } from '@containers/Blog/types'

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
  const [posts, c] = await Promise.all([
    axios.get<ReadonlyArray<Post>>(
      `${process.env.BLOG_URL}wp-json/wp/v2/posts`,
      {
        params: {
          _embed: 1,
          categories: Array.isArray(query.c) ? query.c.join(',') : query.c,
          per_page: 5,
          _fields:
            'id,title,slug,modified,categories,_embedded,_links.wp:featuredmedia,_links.wp:term',
          search: query.q,
        },
        headers: { accept: 'application/json' },
      }
    ),
    axios.get<ReadonlyArray<Category>>(
      `${process.env.BLOG_URL}wp-json/wp/v2/categories`,
      {
        params: { _embed: 1, _fields: 'id,name,slug' },
        headers: { accept: 'application/json' },
      }
    ),
  ])
  const categories = await Promise.all(
    c.data
      .filter((it) => it.slug !== 'other')
      .map(async (it: Category) => {
        const posts = await axios.get<ReadonlyArray<Post>>(
          `${process.env.BLOG_URL}wp-json/wp/v2/posts`,
          {
            params: {
              _embed: 1,
              categories: it.id,
              per_page: 6,
              _fields:
                'id,title,slug,modified,categories,_embedded,_links.wp:featuredmedia,_links.wp:term',
              search: query.q,
            },
            headers: { accept: 'application/json' },
          }
        )
        return { category: it, posts: posts.data }
      })
  )
  return {
    props: {
      posts: posts.data,
      categories: categories.filter((it) => it.posts.length),
    },
  }
}

export default Page
