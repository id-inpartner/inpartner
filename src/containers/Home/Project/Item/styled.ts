import Card from '@components/Card'
import { breakpoints } from '@components/GlobalStyle'
import Text from '@components/Text'
import styled from '@emotion/styled'

export const Root = styled(Card)`
  flex: 1;
  margin-left: 14px;
  margin-right: 14px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 300px;
  margin-top: 28px;
  @media (min-width: 380px) {
    min-width: 354px;
  }
`

export const Title = styled(Text)`
  font-weight: 600;
  margin-top: 14px;
  margin-left: 18px;
  margin-right: 18px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 16px;
    margin-left: 24px;
    margin-right: 24px;
  }
`

export const Subtitle = styled.div`
  font-size: 14px;
  margin-left: 18px;
  margin-right: 18px;
  @media (min-width: ${breakpoints.md}) {
    font-size: 16px;
    margin-left: 24px;
    margin-right: 24px;
  }
`

export const Property = styled.div`
  display: flex;
  margin-left: 18px;
  margin-right: 18px;
  @media (min-width: ${breakpoints.md}) {
    margin-left: 24px;
    margin-right: 24px;
  }
  &.first {
    margin-top: 14px;
    @media (min-width: ${breakpoints.md}) {
      margin-top: 16px;
    }
  }
  &.last {
    margin-bottom: 14px;
    @media (min-width: ${breakpoints.md}) {
      margin-bottom: 16px;
    }
  }
  & > .l {
    min-width: 150px;
  }
  & > .c {
    margin-right: 8px;
  }
  & > .v {
    flex: 1;
  }
`
