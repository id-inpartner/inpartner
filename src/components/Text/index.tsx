import { breakpoints } from '@components/GlobalStyle'
import styled from '@emotion/styled'

export const Text = styled.div`
  font-size: 16px;
  text-align: justify;
  @media (min-width: ${breakpoints.md}) {
    font-size: 20px;
  }
`

export default Text
