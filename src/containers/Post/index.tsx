import { format } from 'date-fns'
import Image from 'next/image'
import React, { FC } from 'react'
import {
  Article,
  Chips,
  Container,
  Content,
  Divider,
  Empty,
  Item,
  Meta,
  Sidebar,
  Title,
} from './styled'
import type { Category, PlainPost, Post } from './types'
import useTranslation from '../../locales/useTranslation'

export interface IndexProps {
  readonly post: Post
  readonly related: ReadonlyArray<PlainPost>
}

export const Index: FC<IndexProps> = ({ post, related }) => {
  const { t } = useTranslation()
  return (
    <Container>
      <Article>
        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <Meta>{format(new Date(post.modified), 'd MMMM yyyy')}</Meta>
        <Content dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        <Chips>
          {post._embedded?.['wp:term']
            ? post._embedded['wp:term'].map((its) =>
                its.map((it) =>
                  it && it.id ? <div key={it.id}>{it.name}</div> : undefined
                )
              )
            : null}
        </Chips>
      </Article>
      <Divider />
      <Sidebar>
        <div className="title">{t.blogPage.relatedArticles}</div>
        {related && related.length ? (
          related.map((it) => {
            const m = it._embedded?.['wp:featuredmedia']?.length
              ? it._embedded['wp:featuredmedia'][0]
              : {
                  alt_text: '',
                  source_url: '/images/default_post_img.png',
                }
            const catGroup = it._embedded?.['wp:term']?.find((i) =>
              i.find((ii) => ii.taxonomy === 'category')
            )
            const c = catGroup && catGroup[0]
            return (
              <Item key={it.id} href={`/blog/${it.slug}`}>
                <Image
                  width={127 * (200 / 127)}
                  height={96 * (200 / 127)}
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
          })
        ) : (
          <Empty>{t.blogPage.noRelatedArticles}</Empty>
        )}
      </Sidebar>
    </Container>
  )
}

export default Index
