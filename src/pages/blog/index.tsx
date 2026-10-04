import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import SEO from '@components/SEO'
import axios from 'axios'
import Container, { IndexProps } from '@containers/Blog'
import type { Category, Post } from '@containers/Blog/types'

const Page: NextPage<IndexProps> = (props) => {
  const router = useRouter()
  const isKo = router.locale === 'ko'

  const title = isKo
    ? '인도네시아 비즈니스 & 투자 인사이트 | 인파트너'
    : 'Indonesia Business & Investment Insights | Inpartner Insights'
  const description = isKo
    ? '인도네시아 시장 진출, 외국인 직접투자(FDI), 산업 동향 및 규제 정책에 대한 인파트너의 전문 시장 분석과 인사이트를 제공합니다.'
    : 'Authoritative analyses, market intelligence, and regulatory updates on Indonesian business expansion, foreign direct investment (FDI), and industrial trends.'

  return (
    <>
      <SEO title={title} description={description} />
      <Navbar />
      <Container {...props} />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
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
        .filter((it) => it.slug !== 'others')
        .map(async (it: Category) => {
          const catPosts = await axios.get<ReadonlyArray<Post>>(
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
          return { category: it, posts: catPosts.data }
        })
    )
    return {
      props: {
        posts: posts.data,
        categories: categories.filter((it) => it.posts.length),
      },
    }
  } catch {
    return {
      props: {
        posts: [],
        categories: [],
      },
    }
  }
}

export default Page
