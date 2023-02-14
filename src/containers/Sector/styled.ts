import { breakpoints } from '@components/GlobalStyle'
import { ProjectsComponent } from '@components/Project'
import styled from '@emotion/styled'

export const Title = styled.h1`
  text-align: center;
  width: 100%;
  font-weight: 600;
  font-size: 20px;
  margin-top: 40px;
  @media (min-width: ${breakpoints.md}) {
    font-size: 28px;
    margin-top: 64px;
  }
`

export const Projects = styled(ProjectsComponent)`
  margin-top: 28px;
  margin-bottom: 28px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 52px;
    margin-bottom: 52px;
  }
`
