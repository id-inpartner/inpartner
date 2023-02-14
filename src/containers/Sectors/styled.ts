import { breakpoints } from '@components/GlobalStyle'
import styled from '@emotion/styled'

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
  @media (min-width: ${breakpoints.md}) {
    margin-left: -20px;
    margin-right: -20px;
  }
  margin-bottom: 12px;
  @media (min-width: ${breakpoints.sm}) {
    margin-bottom: 24px;
  }
  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 40px;
  }
`
