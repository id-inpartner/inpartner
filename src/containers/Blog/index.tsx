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

export interface IndexProps {
  readonly posts: ReadonlyArray<Post>
  readonly categories: ReadonlyArray<{
    readonly category: Category
    posts: ReadonlyArray<Post>
  }>
}

export const Index: FC<IndexProps> = ({ posts, categories }) => {
  const router = useRouter()
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
        </div>
        <Item href={`/blog/${first.slug}`} className="main">
          <div className="aspect">
            <Image
              fill
              quality={100}
              src={first._embedded['wp:featuredmedia'][0].source_url}
              alt={first._embedded['wp:featuredmedia'][0].alt_text}
            />
          </div>
          <div className="content">
            <div className="term">{first._embedded['wp:term'][0][0].name}</div>
            <div
              className="title"
              dangerouslySetInnerHTML={{ __html: first.title.rendered }}
            />
            <div className="dste">
              {format(new Date(first.modified), 'd MMMM yyyy')}
            </div>
          </div>
        </Item>
        <div className="side">
          <Item href={`/blog/${second.slug}`}>
            <div className="aspect">
              <Image
                fill
                quality={100}
                src={second._embedded['wp:featuredmedia'][0].source_url}
                alt={second._embedded['wp:featuredmedia'][0].alt_text}
              />
            </div>
            <div className="content">
              <div className="term">
                {second._embedded['wp:term'][0][0].name}
              </div>
              <div
                className="title"
                dangerouslySetInnerHTML={{ __html: second.title.rendered }}
              />
              <div className="dste">
                {format(new Date(second.modified), 'd MMMM yyyy')}
              </div>
            </div>
          </Item>
          <Item href={`/blog/${third.slug}`}>
            <div className="aspect">
              <Image
                fill
                quality={100}
                src={third._embedded['wp:featuredmedia'][0].source_url}
                alt={third._embedded['wp:featuredmedia'][0].alt_text}
              />
            </div>
            <div className="content">
              <div className="term">
                {third._embedded['wp:term'][0][0].name}
              </div>
              <div
                className="title"
                dangerouslySetInnerHTML={{ __html: third.title.rendered }}
              />
              <div className="dste">
                {format(new Date(third.modified), 'd MMMM yyyy')}
              </div>
            </div>
          </Item>
        </div>
      </Banner>
      <PostRow>
        <Item href={`/blog/${fourth.slug}`}>
          <div className="aspect">
            <Image
              fill
              quality={100}
              src={fourth._embedded['wp:featuredmedia'][0].source_url}
              alt={fourth._embedded['wp:featuredmedia'][0].alt_text}
            />
          </div>
          <div className="content">
            <div className="term">{fourth._embedded['wp:term'][0][0].name}</div>
            <div
              className="title"
              dangerouslySetInnerHTML={{ __html: fourth.title.rendered }}
            />
            <div className="dste">
              {format(new Date(fourth.modified), 'd MMMM yyyy')}
            </div>
          </div>
        </Item>
        <Item href={`/blog/${fifth.slug}`}>
          <div className="aspect">
            <Image
              fill
              quality={100}
              src={fifth._embedded['wp:featuredmedia'][0].source_url}
              alt={fifth._embedded['wp:featuredmedia'][0].alt_text}
            />
          </div>
          <div className="content">
            <div className="term">{fifth._embedded['wp:term'][0][0].name}</div>
            <div
              className="title"
              dangerouslySetInnerHTML={{ __html: fifth.title.rendered }}
            />
            <div className="dste">
              {format(new Date(fifth.modified), 'd MMMM yyyy')}
            </div>
          </div>
        </Item>
      </PostRow>
      <Categories data={categories} />
    </Container>
  )
}

export default Index
