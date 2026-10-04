import ColumnContainer from '@components/ColumnContainer'
import { FC } from 'react'
import { Items, Title } from './styled'
import { ViewMore } from '../styled'
import Button from '@components/Button'
import type { Post } from './types'
import Item, { Dummy } from './Item'
import useTranslation from '../../../locales/useTranslation'

export type { Post }

export interface BlogProps {
  readonly data: ReadonlyArray<Post>
}

export const Blog: FC<BlogProps> = ({ data }) => {
  const { t } = useTranslation()

  return (
    <ColumnContainer>
      <Title>{t.home.blog.title}</Title>
      <Items>
        {data.map((it) => (
          <Item key={it.id} data={it} />
        ))}
      </Items>
      <ViewMore href="/blog">
        <Button as="span">{t.home.blog.viewAll}</Button>
      </ViewMore>
    </ColumnContainer>
  )
}

export default Blog
