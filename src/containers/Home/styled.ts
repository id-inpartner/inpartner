import { breakpoints } from '@components/GlobalStyle'
import styled from '@emotion/styled'
import Link from 'next/link'

export const ViewMore = styled(Link)`
  margin-top: 10px;
  margin-bottom: 16px;
  align-self: center;
  min-width: 140px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 24px;
    margin-bottom: 30px;
  }
  & > button {
    width: 100%;
  }
`
