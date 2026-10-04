import Button from '@components/Button'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useMemo, useState } from 'react'
import {
  Banner,
  Categories,
  Container,
  Dummy,
  Item,
  PostRow,
  Title,
} from './styled'
import type { Category, Post } from './types'
import useTranslation from '../../locales/useTranslation'

export interface IndexProps {
  readonly category: Category
  readonly posts: ReadonlyArray<Post>
  readonly categories: ReadonlyArray<Category>
}

const getMedia = (post?: Post) => {
  const media = post?._embedded?.['wp:featuredmedia']?.[0]
  return {
    source_url: media?.source_url || '/images/default_post_img.png',
    alt_text: media?.alt_text || '',
  }
}

const getTerm = (post?: Post) => {
  const terms = post?._embedded?.['wp:term']
  if (Array.isArray(terms) && terms[0] && terms[0][0]) {
    return terms[0][0].name
  }
  return ''
}

export const Index: FC<IndexProps> = ({ category, posts, categories }) => {
  const router = useRouter()
  const { t } = useTranslation()
  const { c, q }: { c: Record<string, boolean | undefined>; q: string } =
    useMemo(() => {
      let c = {}
      if (router.query.c) {
        if (Array.isArray(router.query.c)) {
          c = router.query.c.reduce((a, it) => {
            a[it] = true
            return a
          }, c)
        } else {
          c = { [router.query.c]: true }
        }
      }
      let q = ''
      if (router.query.q) {
        q = router.query.q as string
      }
      return { c, q }
    }, [router.query])

  const [checked, setChecked] = useState(c)
  const [search, setSearch] = useState(q)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(false)
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', end)
    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', end)
    }
  }, [router.events])

  const [first, second, third, others] = useMemo<
    [Post, Post, Post, ReadonlyArray<Post>]
  >(() => {
    if (posts.length === 0) {
      return [null, null, null, []]
    }
    if (posts.length === 1) {
      return [posts[0], null, null, []]
    }
    if (posts.length === 2) {
      return [posts[0], posts[1], null, []]
    }
    if (posts.length === 3) {
      return [posts[0], posts[1], posts[2], []]
    }
    return [posts[0], posts[1], posts[2], posts.slice(3, posts.length)]
  }, [posts])

  if (!first) {
    return (
      <Container>
        <Banner>
          <Title>{category.name}</Title>
          <div
            style={{
              textAlign: 'center',
              width: '100%',
              padding: '64px 16px',
              color: '#666',
              fontSize: '18px',
            }}
          >
            {t.blogPage.noCategoryArticles}
          </div>
        </Banner>
      </Container>
    )
  }

  return (
    <Container>
      <Banner>
        <Title>{category.name}</Title>
        {/* <div className="search">
          <Form.Control
            placeholder="Search article ..."
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <Button
            disabled={loading}
            onClick={() => {
              router.push(
                {
                  pathname: `/blog`,
                  query: {
                    c: Object.keys(checked).filter((i) => checked[i]),
                    q: search.trim().toLowerCase(),
                  },
                },
                null,
                { shallow: false }
              )
            }}
          >
            <FontAwesomeIcon
              icon={loading ? faSpinner : faMagnifyingGlass}
              spin={loading}
            />
          </Button>
        </div> */}
        <Item href={`/blog/${first.slug}`} className="main">
          <div className="aspect">
            <Image
              fill
              quality={100}
              src={getMedia(first).source_url}
              alt={getMedia(first).alt_text}
              sizes="(min-width: 1200px) 760px, (min-width: 768px) 60vw, 100vw"
            />
          </div>
          <div className="content">
            <div className="term">{getTerm(first)}</div>
            <div
              className="title"
              dangerouslySetInnerHTML={{ __html: first.title?.rendered || '' }}
            />
            <div className="dste">
              {first.modified
                ? format(new Date(first.modified), 'd MMMM yyyy')
                : ''}
            </div>
          </div>
        </Item>
        {second && (
          <div className="side">
            <Item href={`/blog/${second.slug}`}>
              <div className="aspect">
                <Image
                  fill
                  quality={100}
                  src={getMedia(second).source_url}
                  alt={getMedia(second).alt_text}
                  sizes="(min-width: 1200px) 380px, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="content">
                <div className="term">{getTerm(second)}</div>
                <div
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: second.title?.rendered || '',
                  }}
                />
                <div className="dste">
                  {second.modified
                    ? format(new Date(second.modified), 'd MMMM yyyy')
                    : ''}
                </div>
              </div>
            </Item>
            {third ? (
              <Item href={`/blog/${third.slug}`}>
                <div className="aspect">
                  <Image
                    fill
                    quality={100}
                    src={getMedia(third).source_url}
                    alt={getMedia(third).alt_text}
                    sizes="(min-width: 1200px) 380px, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="content">
                  <div className="term">{getTerm(third)}</div>
                  <div
                    className="title"
                    dangerouslySetInnerHTML={{
                      __html: third.title?.rendered || '',
                    }}
                  />
                  <div className="dste">
                    {third.modified
                      ? format(new Date(third.modified), 'd MMMM yyyy')
                      : ''}
                  </div>
                </div>
              </Item>
            ) : (
              <Dummy aria-hidden />
            )}
          </div>
        )}
      </Banner>
      {!!others.length && (
        <PostRow>
          {others.map((it) => (
            <Item key={it.id} href={`/blog/${it.slug}`}>
              <div className="aspect">
                <Image
                  fill
                  quality={100}
                  src={getMedia(it).source_url}
                  alt={getMedia(it).alt_text}
                  sizes="(min-width: 1200px) 380px, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="content">
                <div className="term">{getTerm(it)}</div>
                <div
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: it.title?.rendered || '',
                  }}
                />
                <div className="dste">
                  {it.modified
                    ? format(new Date(it.modified), 'd MMMM yyyy')
                    : ''}
                </div>
              </div>
            </Item>
          ))}
          <Dummy aria-hidden />
          <Dummy aria-hidden />
        </PostRow>
      )}
      <Categories>
        <Title>{t.blogPage.checkOtherArticles}</Title>
        {categories.map((it) => (
          <Link
            key={it.id}
            passHref
            legacyBehavior
            href={{ pathname: '/blog' }}
          >
            <Button>{it.name}</Button>
          </Link>
        ))}
      </Categories>
    </Container>
  )
}

export default Index
