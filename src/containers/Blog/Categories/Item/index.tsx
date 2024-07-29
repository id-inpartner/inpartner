import styled from '@emotion/styled'
import Image, { StaticImageData } from '@components/Image'
import { FC } from 'react'
import type { Post } from '../../types'
import { format } from 'date-fns'
import Link from 'next/link'

export interface ItemProps {
  readonly data: Post
}

const Inner = styled.div`
  margin-left: 14px;
  margin-right: 14px;
  width: calc(100% - 28px);
  border-radius: 8px;
  overflow: hidden;
`

const Aspect = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  padding-top: ${(288 / 384) * 100}%;
`

const Content = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
`

const Label = styled.div`
  font-size: 24px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  font-weight: 700;
`

const Dates = styled.div`
  font-size: 14px;
  padding: 0 16px 16px 16px;
`

export const Item: FC<ItemProps> = ({ data }) => {
  return (
    <Inner>
      <Aspect href={`/blog/${data.slug}`}>
        <Image
          fill
          src={data._embedded['wp:featuredmedia'][0].source_url}
          alt={data._embedded['wp:featuredmedia'][0].alt_text}
          quality={100}
          placeholder="empty"
        />
        <Content>
          <Label dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
          <Dates>{format(new Date(data.modified), 'd MMMM yyyy')}</Dates>
        </Content>
      </Aspect>
    </Inner>
  )
}

export default Item
