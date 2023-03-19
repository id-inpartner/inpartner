import styled from '@emotion/styled'
import Image, { ImageProps } from '@components/Image'
import Link from 'next/link'
import { FC } from 'react'

export interface ItemProps {
  readonly image: ImageProps['src']
  readonly label: string
  readonly href: string
}

const Inner = styled(Link)`
  margin-left: 14px;
  margin-right: 14px;
  width: calc(100% - 28px);
  border-radius: 8px;
  overflow: hidden;
  display: block;
  &:hover {
    & > * > img {
      transform: scale(1.1);
    }
  }
`

const Aspect = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${(275 / 202) * 100}%;
  & > img {
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
`

const Label = styled.div`
  font-size: 16px;
  color: white;
  text-align: center;
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  bottom: 12px;
  z-index: 2;
  position: absolute;
  font-weight: 500;
`

export const Item: FC<ItemProps> = ({ href, image, label }) => {
  return (
    <Inner href={href}>
      <Aspect>
        <Image
          fill
          src={image}
          alt={label}
          quality={100}
          sizes="(min-width: 1002px) 210px, (min-width: 992px) 276px, (min-width: 768px) 196px, (min-width: 746px) 25vw, (min-width: 488px) 50vw, 100vw"
          placeholder={typeof image === 'string' ? 'empty' : 'blur'}
        />
        <Label>{label}</Label>
      </Aspect>
    </Inner>
  )
}

export default Item
