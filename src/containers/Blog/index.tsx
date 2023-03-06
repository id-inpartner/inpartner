import Button from '@components/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, useMemo, useState } from 'react'
import { Card, Col, Form, InputGroup, Row, Button as B } from 'react-bootstrap'
import { Categories, Chips, Container } from './styled'
import type { Category, Post } from './types'

export interface IndexProps {
  readonly posts: ReadonlyArray<Post>
  readonly categories: ReadonlyArray<Category>
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

  return (
    <Container>
      <Categories>
        {categories.map((it) => (
          <Form.Check
            key={it.id}
            type="checkbox"
            label={it.name}
            onChange={() => {
              const cc = checked[it.id]
                ? { ...checked, [it.id]: undefined }
                : { ...checked, [it.id]: true }
              router.push(
                {
                  pathname: `/blog`,
                  query: {
                    c: Object.keys(cc).filter((i) => cc[i]),
                    q: search.trim(),
                  },
                },
                null,
                { shallow: false }
              )
              setChecked(cc)
            }}
            checked={checked[it.id]}
          />
        ))}
        <InputGroup>
          <Form.Control
            placeholder="Search article ..."
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <B
            onClick={() => {
              router.push(
                {
                  pathname: `/blog`,
                  query: {
                    c: Object.keys(checked).filter((i) => checked[i]),
                    q: search.trim(),
                  },
                },
                null,
                { shallow: false }
              )
            }}
          >
            Search
          </B>
        </InputGroup>
      </Categories>
      <Row>
        {posts.map((it) => (
          <Col key={it.id} xs={12} sm={12} md={12} lg={6}>
            <Card style={{ width: '100%', marginTop: '1rem' }}>
              {/* <pre>
                <code>{JSON.stringify(it._embedded, null, 2)}</code>
              </pre> */}
              <Card.Img
                variant="top"
                src={
                  it._embedded['wp:featuredmedia']
                    ? it._embedded['wp:featuredmedia'][0]?.source_url
                    : '/images/contemporary-architecture-office-building-cityscape-personal-perspective-concept_53876-42940.jpg'
                }
              />
              <Card.Body>
                <Card.Title
                  dangerouslySetInnerHTML={{ __html: it.title.rendered }}
                />
                <Card.Text
                  dangerouslySetInnerHTML={{ __html: it.excerpt.rendered }}
                />
                <Chips>
                  {it._embedded['wp:term'].map(([it]) =>
                    it && it.id ? <div key={it.id}>{it.name}</div> : undefined
                  )}
                </Chips>
                <Link href={`/blog/${it.slug}`} passHref>
                  <Button>See More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Index
