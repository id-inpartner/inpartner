import styled from '@emotion/styled'
import { breakpoints } from './GlobalStyle'

export const Target = styled.div`
  position: absolute;
  top: -100px;
  @media (min-width: ${breakpoints.lg}) {
    top: -128px;
  }
  &.low {
    top: -50px;
    @media (min-width: ${breakpoints.lg}) {
      top: -80px;
    }
  }
`

export default Target
