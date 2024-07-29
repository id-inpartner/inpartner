import { breakpoints } from '@components/GlobalStyle'
import Ratio from '@components/Ratio'
import Target from '@components/Target'
import Image, { ImageProps } from 'next/image'
import type { LinkProps } from 'next/link'
import { FC, ReactNode } from 'react'
import { Container, Content, Images } from './styled'

export interface ItemProps {
  readonly id: string
  readonly largImage?: ImageProps['src']
  readonly smallImage?: ImageProps['src']
  readonly title?: string
  readonly description?: ReactNode
  readonly href: LinkProps['href']
  readonly hrefLabel: string
}

export const Item: FC<ItemProps> = ({
  id,
  largImage,
  smallImage,
  title,
  description,
  href,
  hrefLabel,
}) => {
  return (
    <Container>
      <Target id={id} />
      <Content title={title} href={href} hrefLabel={hrefLabel}>
        {description}
      </Content>
      <Images>
        <Ratio aspect={316 / 268} wrap>
          <Image
            fill
            src={smallImage}
            alt=""
            quality={100}
            sizes={`(min-width: ${breakpoints.xxl}) 294px, (min-width: ${breakpoints.xl}) 247px, (min-width: ${breakpoints.lg}) 202px, (min-width: ${breakpoints.md}) 143px, (min-width: ${breakpoints.sm}) 247px, 50vw`}
          />
        </Ratio>
        <Ratio aspect={454 / 267} wrap>
          <Image
            fill
            src={largImage}
            alt=""
            quality={100}
            sizes={`(min-width: ${breakpoints.xxl}) 294px, (min-width: ${breakpoints.xl}) 247px, (min-width: ${breakpoints.lg}) 202px, (min-width: ${breakpoints.md}) 143px, (min-width: ${breakpoints.sm}) 247px, 50vw`}
          />
        </Ratio>
      </Images>
    </Container>
  )
}

export default Item
