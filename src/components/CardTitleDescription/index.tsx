import Button from '@components/Button'
import C from '@components/Card'
import { breakpoints } from '@components/GlobalStyle'
import SectionTitle from '@components/SectionTitle'
import Target from '@components/Target'
import Text from '@components/Text'
import styled from '@emotion/styled'
import Link, { LinkProps } from 'next/link'
import { FC, ReactNode } from 'react'

export const Title = styled(SectionTitle)`
  text-align: center;
`

export const Description = styled(Text)`
  text-align: justify;
  align-self: stretch;
  margin-top: 10px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 20px;
  }
`

const Root = styled(C)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  @media (min-width: ${breakpoints.md}) {
    padding: 32px;
  }
  position: relative;
`

export const Href = styled(Button)`
  margin-top: 10px;
  align-self: center;
  min-width: 140px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 24px;
  }
`

export interface CardProps {
  readonly id?: string
  readonly title: string
  readonly children: ReactNode
  readonly className?: string
  readonly href?: LinkProps['href']
  readonly hrefLabel?: string
}

export const Card: FC<CardProps> = ({
  id,
  title,
  children,
  className,
  href,
  hrefLabel,
}) => {
  return (
    <Root className={className}>
      {!!id && <Target className="target" id={id} />}
      <Title className="card-title">{title}</Title>
      <Description>{children}</Description>
      {!!href && (
        <Link href={href} passHref>
          <Href>{hrefLabel}</Href>
        </Link>
      )}
    </Root>
  )
}

export default Card
