import { breakpoints } from '@components/GlobalStyle'
import SectionTitle from '@components/SectionTitle'
import Text from '@components/Text'
import styled from '@emotion/styled'
import { FC, ReactNode } from 'react'

export const Title = styled(SectionTitle)`
  text-align: center;
  margin-top: 50px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 90px;
  }
`

export const Description = styled(Text)`
  text-align: center;
  align-self: stretch;
  margin-bottom: 12px;
  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 40px;
  }
`

export interface TitleDescriptionProps {
  readonly title: string
  readonly children: ReactNode
}

export const TitleDescription: FC<TitleDescriptionProps> = ({
  title,
  children,
}) => {
  return (
    <>
      <Title className="title">{title}</Title>
      <Description className="description">{children}</Description>
    </>
  )
}

export default TitleDescription
