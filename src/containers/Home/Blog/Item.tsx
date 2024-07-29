import { CardLink as Card } from '@components/Card'
import styled from '@emotion/styled'
import Image from 'next/image'
import { FC } from 'react'
import format from 'date-fns/format'
import { breakpoints } from '@components/GlobalStyle'
import type { Post } from './types'

export interface ItemProps {
  readonly data: Post
}

export const Item: FC<ItemProps> = ({ data }) => {
  const image = data._embedded['wp:featuredmedia'][0] || {
    source_url: '/images/default_post_img.png',
  }
  const category = data._embedded['wp:term'].find((it) =>
    it.find((i) => i.taxonomy === 'category')
  )[0] || { name: '' }
  return (
    <C href={`/blog/${data.slug}`}>
      <Aspect>
        <div className="aspect">
          <Image
            fill
            quality={100}
            src={image.source_url}
            alt=""
            sizes={`(min-width: ${breakpoints.xxl}) 414px, (min-width: ${breakpoints.xl}) 354px, (min-width: ${breakpoints.lg}) 454px, (min-width: ${breakpoints.md}) 334px, (min-width: ${breakpoints.sm}) 514px, 400px`}
          />
        </div>
      </Aspect>
      <Content>
        <Subtitle>{category.name}</Subtitle>
        <Title>{data.title.rendered}</Title>
        <Dates>{format(new Date(data.modified), 'd MMMM yyyy')}</Dates>
      </Content>
    </C>
  )
}

export const Dummy = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  flex: 1;
  min-width: 300px;
`

const C = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 12px;
  flex: 1;
  min-width: 300px;
  transition: transform 0.3s ease-in-out;
  position: relative;
  &:hover {
    transform: scale(1.015);
  }
  border-radius: 12px;
  overflow: hidden;
`

const Aspect = styled.div`
  position: relative;
  width: 100%;
  & > .aspect {
    padding-top: ${415 / 3.44}%;
    & > img {
      object-fit: cover;
    }
  }
`

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0 24px 0 24px;
  max-height: 57.6px;
  min-height: 57.6px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Subtitle = styled.div`
  margin: 0 24px 4px 24px;
  font-size: 20px;
  font-weight: bold;
`

const Dates = styled.table`
  margin: 0 24px 24px 24px;
  font-size: 14px;
`

export default Item
