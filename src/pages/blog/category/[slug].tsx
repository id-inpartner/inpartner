import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import SEO from '@components/SEO'
import axios from 'axios'
import Container, { IndexProps } from '@containers/Category'
import type { Category, Post } from '@containers/Category/types'

const Page: NextPage<IndexProps> = (props) => {
  const router = useRouter()
  const isKo = router.locale === 'ko'

  const meta: Record<string, any> =
    (props.category?.yoast_head_json as any) || {}
  const categoryName = props.category?.name || 'Category'

  const pageTitle = isKo
    ? `${categoryName} 카테고리 아티클 및 인사이트 | 인파트너`
    : meta.title || `${categoryName} | Inpartner Insights`

  const pageDescription = isKo
    ? `인파트너 블로그의 ${categoryName} 관련 최신 비즈니스 트렌드, 산업 분석 및 전문 인사이트를 확인하세요.`
    : meta.og_description ||
      `Read latest insights and articles in ${categoryName} on Inpartner.`

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} />
      <Navbar />
      <Container {...props} />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async ({
  query,
}) => {
  const slug = (query.slug as string)?.toLowerCase()
  if (!slug) {
    return { notFound: true }
  }

  try {
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
  } catch {
    return { notFound: true }
  }
}

export default Page
