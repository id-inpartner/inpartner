import { breakpoints } from '@components/GlobalStyle'
import { ProjectsComponent } from '@components/Project'
import SectionTitle from '@components/SectionTitle'
import styled from '@emotion/styled'

export const Title = styled(SectionTitle)`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 4px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 90px;
    margin-bottom: 32px;
  }
`

export const Items = styled(ProjectsComponent)`
  @media (min-width: ${breakpoints.lg}) {
    max-width: 1134px;
    min-width: 1134px;
    margin-left: auto;
    margin-right: auto;
  }
`
