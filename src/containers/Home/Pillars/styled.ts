import { breakpoints } from '@components/GlobalStyle'
import styled from '@emotion/styled'

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 16px;
  @media (min-width: ${breakpoints.sm}) {
    min-width: 392px;
    max-width: 392px;
    margin: 0 auto 30px auto;
  }
  @media (min-width: ${breakpoints.lg}) {
    min-width: 816px;
    max-width: 816px;
    margin: 0 auto 30px auto;
  }
`
