import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import axios from 'axios'
import Container, { IndexProps } from '@containers/Category'
import type { Category, Image, Post } from '@containers/Category/types'
import { Fragment } from 'react'

const Page: NextPage<IndexProps> = (props) => {
  const meta = props.category.yoast_head_json
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        {Object.keys(meta).map((k) => {
          const it = meta[k]
          if (k.startsWith('og_')) {
            if (k.endsWith('_image')) {
              const [i] = it as [Image]
              return (
                <Fragment key={k}>
                  <meta name="og:image:url" content={i.url} />
                  <meta name="og:image:type" content={i.type} />
                  <meta name="og:image:width" content={`${i.width}`} />
                  <meta name="og:image:height" content={`${i.height}`} />
                  {i.alt && <meta name="og:image:alt" content={i.alt} />}
                </Fragment>
              )
            }
            return <meta key={k} name={k.replace('_', ':')} content={it} />
          }
          if (k.startsWith('twitter_')) {
            return <meta key={k} name={k.replace('_', ':')} content={it} />
          }
          return undefined
        })}
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
      params: { _embed: 1, _fields: 'id,name,slug,yoast_head_json' },
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
