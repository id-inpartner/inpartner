import { breakpoints, color } from '@components/GlobalStyle'
import styled from '@emotion/styled'
import { Container as C } from 'react-bootstrap'

export const OurTeam = styled(C)`
  & > .root {
    margin-top: 16px;
    margin-bottom: 16px;
    @media (min-width: ${breakpoints.xl}) {
      margin-top: 72px;
      margin-bottom: 72px;
    }
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    & > .title {
      margin-top: 0;
      min-width: 100%;
      @media (min-width: ${breakpoints.md}) {
        min-width: 272px;
      }
    }
    & > .description {
      margin-bottom: 0;
      flex: 1;
      text-align: justify;
      min-width: 100%;
      @media (min-width: ${breakpoints.md}) {
        min-width: 0;
      }
    }
  }
`
