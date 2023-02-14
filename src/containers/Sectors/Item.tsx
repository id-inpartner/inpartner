import Card from '@components/Card'
import { breakpoints, color } from '@components/GlobalStyle'
import Image from 'next/image'
import styled from '@emotion/styled'
import { ImageProps } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export interface ItemProps {
  readonly image: ImageProps['src']
  readonly title: string
  readonly slug: string
  readonly id: number
}

export const Dummy = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  @media (min-width: ${breakpoints.md}) {
    margin-left: 20px;
    margin-right: 20px;
  }
  flex: 1;
  min-width: 320px;
  @media (min-width: ${breakpoints.sm}) {
    min-width: 220px;
  }
  @media (min-width: ${breakpoints.lg}) {
    min-width: 320px;
  }
`

const C = styled(Card)`
  min-width: 320px;
  margin-left: 12px;
  margin-right: 12px;
  flex: 1;
  margin-top: 12px;
  position: relative;
  @media (min-width: ${breakpoints.sm}) {
    margin-top: 24px;
    min-width: 220px;
  }
  @media (min-width: ${breakpoints.md}) {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 40px;
  }
  @media (min-width: ${breakpoints.lg}) {
    min-width: 320px;
  }
  display: flex;
  flex-direction: column;
  align-items: stretch;
  & > .img {
    padding-top: ${164 / 3.4}%;
    position: relative;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    & > img {
      object-fit: cover;
    }
  }
`

const Title = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  margin-top: 8px;
  @media (min-width: ${breakpoints.md}) {
    font-size: 20px;
    margin-top: 12px;
  }
`

const L = styled(Link)`
  color: ${color.primary.normal};
  text-align: center;
  padding: 12px;
  text-decoration: underline;
  font-weight: 700;
  font-size: 14px;
  @media (min-width: ${breakpoints.md}) {
    font-size: 16px;
  }
`

const Item: FC<ItemProps> = ({ image, title, slug }) => {
  return (
    <C>
      <div className="img">
        <Image
          fill
          quality={100}
          alt=""
          src={image}
          sizes={`(min-width: ${breakpoints.xxl}) 404px, (min-width: ${breakpoints.xl}) 344px, (min-width: ${breakpoints.lg}) 446px, (min-width: ${breakpoints.md}) 326px, (min-width: ${breakpoints.sm}) 244px, 400px`}
        />
      </div>
      <Title>{title}</Title>
      <L href={`/sector/${slug}`}>See All</L>
    </C>
  )
}

export default Item
