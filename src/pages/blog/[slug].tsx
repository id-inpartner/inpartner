import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import SEO from '@components/SEO'
import axios from 'axios'
import Container, { IndexProps } from '@containers/Post'
import type { PlainPost, Post } from '@containers/Post/types'

const Page: NextPage<IndexProps> = ({ post, related }) => {
  const router = useRouter()
  const isKo = router.locale === 'ko'

  if (!post) {
    return null
  }

  const meta: Record<string, any> = (post.yoast_head_json as any) || {}
  const cleanExcerpt =
    post.excerpt?.rendered?.replace(/<[^>]+>/g, '').trim() || ''

  const pageTitle = isKo
    ? `${post.title?.rendered || '인사이트'} | 인파트너 블로그`
    : meta.title || `${post.title?.rendered || 'Insights'} | Inpartner Insights`

  const pageDescription = isKo
    ? `인파트너 비즈니스 인사이트: ${
        cleanExcerpt.slice(0, 140) || post.title?.rendered || ''
      }`
    : meta.og_description ||
      cleanExcerpt.slice(0, 160) ||
      post.title?.rendered ||
      'Inpartner Insights'

  const ogImg =
    meta.og_image?.[0]?.url ||
    post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
    'https://inpartner.id/og-image.jpg'

  const authorName = post._embedded?.author?.[0]?.name
  const section = post._embedded?.['wp:term']?.[0]?.[0]?.name

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title?.rendered || pageTitle,
    description: pageDescription,
    image: ogImg,
    datePublished: post.date,
    dateModified: post.modified || post.date,
    author: {
      '@type': 'Person',
      name: authorName || 'Inpartner',
    },
    publisher: {
      '@type': 'Organization',
      name: isKo ? '인파트너' : 'Inpartner',
      logo: {
        '@type': 'ImageObject',
        url: 'https://inpartner.id/logo.png',
      },
    },
  }

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        ogImage={ogImg}
        ogType="article"
        publishedTime={post.date}
        modifiedTime={post.modified}
        author={authorName}
        section={section}
        schemaData={articleSchema}
      />
      <Navbar />
      <Container post={post} related={related} />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug } = query
  try {
    const posts = await axios.get<ReadonlyArray<Post>>(
      `${process.env.BLOG_URL}wp-json/wp/v2/posts`,
      {
        params: { slug, related: 3, _embed: 1 },
        headers: { accept: 'application/json' },
      }
    )
    if (!Array.isArray(posts.data) || posts.data.length === 0) {
      return { notFound: true }
    }
    const post = posts.data[0]
    let related: ReadonlyArray<PlainPost> = []
    try {
      const relatedRes = await axios.get<ReadonlyArray<PlainPost>>(
        `${process.env.BLOG_URL}wp-json/yarpp/v1/related/${post.id}`,
        {
          params: {
            limit: 3,
            _fields:
              'id,title,slug,categories,_embedded,_links.wp:featuredmedia,_links.wp:term',
            _embed: 1,
          },
          headers: { accept: 'application/json' },
        }
      )
      related = Array.isArray(relatedRes.data) ? relatedRes.data : []
    } catch {
      related = []
    }
    return { props: { post, related } }
  } catch {
    return { notFound: true }
  }
}

export default Page
