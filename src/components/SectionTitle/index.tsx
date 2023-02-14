import { breakpoints } from '@components/GlobalStyle'
import styled from '@emotion/styled'
import { sans } from '@fonts/index'

export const SectionTitle = styled.h5`
  font-weight: 600;
  font-family: ${sans.style.fontFamily};
  font-size: 20px;
  @media (min-width: ${breakpoints.md}) {
    font-size: 28px;
  }
`

export default SectionTitle
