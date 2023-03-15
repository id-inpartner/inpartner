import ColumnContainer from '@components/ColumnContainer'
import { FC } from 'react'
import { Items, Title } from './styled'
import { ViewMore } from '../styled'
import Button from '@components/Button'
import type { Post } from './types'
import Item, { Dummy } from './Item'

export type { Post }

export interface BlogProps {
  readonly data: ReadonlyArray<Post>
}

export const Blog: FC<BlogProps> = ({ data }) => {
  return (
    <ColumnContainer>
      <Title>Blog</Title>
      <Items>
        {data.map((it) => (
          <Item key={it.id} data={it} />
        ))}
      </Items>
      <ViewMore href="/blog">
        <Button>View All</Button>
      </ViewMore>
    </ColumnContainer>
  )
}

export default Blog
