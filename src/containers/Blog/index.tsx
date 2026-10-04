import Button from '@components/Button'
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useMemo, useState } from 'react'
import { Form } from 'react-bootstrap'
import Categories from './Categories'
import { Banner, Container, Item, PostRow } from './styled'
import type { Category, Post } from './types'
import useTranslation from '../../locales/useTranslation'

export interface IndexProps {
  readonly posts: ReadonlyArray<Post>
  readonly categories: ReadonlyArray<{
    readonly category: Category
    posts: ReadonlyArray<Post>
  }>
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

export const Index: FC<IndexProps> = ({ posts = [], categories = [] }) => {
  const router = useRouter()
  const { t, locale } = useTranslation()
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

  const [first, second, third, fourth, fifth] = useMemo(() => {
    if (!posts || posts.length === 0) {
      return []
    }
    if (posts.length === 1) {
      return [...posts, ...posts, ...posts, ...posts, ...posts]
    }
    if (posts.length === 2) {
      return [...posts, ...posts, ...posts, ...posts, posts[0]]
    }
    if (posts.length === 3) {
      return [...posts, posts[0], posts[1]]
    }
    if (posts.length === 4) {
      return [...posts, posts[0]]
    }
    return posts
  }, [posts])

  return (
    <Container>
      <Banner>
        <div className="search">
          <Form.Control
            id="blog-search"
            name="q"
            placeholder={t.blogPage.searchPlaceholder}
            aria-label={t.blogPage.searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <Button
            aria-label={locale === 'ko' ? '검색' : 'Search'}
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
        </div>
        {!first ? (
          <div
            style={{
              textAlign: 'center',
              width: '100%',
              padding: '64px 16px',
              color: '#666',
              fontSize: '18px',
            }}
          >
            {t.blogPage.noArticles}
          </div>
        ) : (
          <>
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
                  dangerouslySetInnerHTML={{
                    __html: first.title?.rendered || '',
                  }}
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
                {third && (
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
                )}
              </div>
            )}
          </>
        )}
      </Banner>
      {fourth && (
        <PostRow>
          <Item href={`/blog/${fourth.slug}`}>
            <div className="aspect">
              <Image
                fill
                quality={100}
                src={getMedia(fourth).source_url}
                alt={getMedia(fourth).alt_text}
                sizes="(min-width: 1200px) 380px, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="content">
              <div className="term">{getTerm(fourth)}</div>
              <div
                className="title"
                dangerouslySetInnerHTML={{
                  __html: fourth.title?.rendered || '',
                }}
              />
              <div className="dste">
                {fourth.modified
                  ? format(new Date(fourth.modified), 'd MMMM yyyy')
                  : ''}
              </div>
            </div>
          </Item>
          {fifth && (
            <Item href={`/blog/${fifth.slug}`}>
              <div className="aspect">
                <Image
                  fill
                  quality={100}
                  src={getMedia(fifth).source_url}
                  alt={getMedia(fifth).alt_text}
                  sizes="(min-width: 1200px) 380px, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="content">
                <div className="term">{getTerm(fifth)}</div>
                <div
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: fifth.title?.rendered || '',
                  }}
                />
                <div className="dste">
                  {fifth.modified
                    ? format(new Date(fifth.modified), 'd MMMM yyyy')
                    : ''}
                </div>
              </div>
            </Item>
          )}
        </PostRow>
      )}
      {Boolean(categories?.length) && <Categories data={categories} />}
    </Container>
  )
}

export default Index
