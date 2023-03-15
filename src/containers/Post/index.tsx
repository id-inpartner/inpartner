import Button from '@components/Button'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import {
  Article,
  Categories,
  Chips,
  Container,
  Content,
  Divider,
  Item,
  Meta,
  Sidebar,
  Title,
} from './styled'
import type { Category, PlainPost, Post } from './types'

export interface IndexProps {
  readonly post: Post
  readonly categories: ReadonlyArray<Category>
  readonly related: ReadonlyArray<PlainPost>
}

export const Index: FC<IndexProps> = ({ post, categories, related }) => {
  return (
    <Container>
      <Article>
        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <Meta>{format(new Date(post.modified), 'd MMMM yyyy')}</Meta>
        <Content dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        <Chips>
          {post._embedded['wp:term'].map((its) =>
            its.map((it) =>
              it && it.id ? <div key={it.id}>{it.name}</div> : undefined
            )
          )}
        </Chips>
      </Article>
      <Divider />
      <Sidebar>
        <div className="title">Discover More</div>
        <Categories>
          {categories.map(
            (it) =>
              it.slug !== 'others' && (
                <Link key={it.id} passHref href={{ pathname: '/blog' }}>
                  <Button>{it.name}</Button>
                </Link>
              )
          )}
        </Categories>
        <div className="title">Related Articles</div>
        {related.map((it) => {
          const m = it._embedded['wp:featuredmedia'].length
            ? it._embedded['wp:featuredmedia'][0]
            : {
                alt_text: '',
                source_url: '/images/default_post_img.png',
              }
          const [c] = it._embedded['wp:term'].find((i) =>
            i.find((ii) => ii.taxonomy === 'category')
          )
          return (
            <Item key={it.id} href={`/blog/${it.slug}`}>
              <Image
                width={127}
                height={96}
                quality={100}
                alt={m.alt_text}
                src={m.source_url}
              />
              <div className="content">
                <div className="category">{c && c.name}</div>
                <div
                  className="title"
                  dangerouslySetInnerHTML={{ __html: it.title.rendered }}
                />
              </div>
            </Item>
          )
        })}
      </Sidebar>
    </Container>
  )
}

export default Index
