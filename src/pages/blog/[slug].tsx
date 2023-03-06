import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import axios from 'axios'
import Container, { IndexProps } from '@containers/Post'
import { Fragment } from 'react'
import type { Image } from '@containers/Post/types'

const Page: NextPage<IndexProps> = ({ post }) => {
  const meta = post.yoast_head_json
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.og_description} />
        {Object.keys(meta).map((k) => {
          if (k.startsWith('og_')) {
            const it = meta[k]
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
          return undefined
        })}
      </Head>
      <Navbar />
      <Container post={post} />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const { slug } = query
  const posts = await axios.get(`${process.env.BLOG_URL}wp-json/wp/v2/posts`, {
    params: { slug, _embed: 1 },
    headers: { accept: 'application/json' },
  })
  if (Array.isArray(posts.data) && posts.data.length == 0) {
    return { notFound: true }
  }
  return { props: { post: posts.data[0] } }
}

export default Page
