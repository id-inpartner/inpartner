import { breakpoints } from '@components/GlobalStyle'
import SectionTitle from '@components/SectionTitle'
import styled from '@emotion/styled'

export const Title = styled(SectionTitle)`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 10px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 90px;
    margin-bottom: 24px;
  }
`
