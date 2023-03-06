import { format } from 'date-fns'
import React, { FC } from 'react'
import { Chips, Container, Content, Meta, Title } from './styled'
import type { Post } from './types'

export interface IndexProps {
  readonly post: Post
}

export const Index: FC<IndexProps> = ({ post }) => {
  return (
    <Container>
      <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <Meta>
        {`${post._embedded.author[0].name} | ${format(
          new Date(post.modified),
          'd MMMM yyyy'
        )}`}
      </Meta>
      <Content dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <Chips>
        {post._embedded['wp:term'].map(([it]) =>
          it && it.id ? <div key={it.id}>{it.name}</div> : undefined
        )}
      </Chips>
    </Container>
  )
}

export default Index
