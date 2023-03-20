import { breakpoints } from '@components/GlobalStyle'
import styled from '@emotion/styled'
import type { FC } from 'react'
import Container from 'react-bootstrap/Container'
import About from './About'
import Banner from './Banner'
import Blog, { BlogProps } from './Blog'
import Clients from './Clients'
import Contact from './Contact'
import Pillars from './Pillars'
import Project, { ProjectProps } from './Project'
import Sectors, { SectorsProps } from './Sectors'
import Services from './Services'
import Sitemap from './Sitemap'

const Background = styled.div`
  background-color: #d9d9d9;
  padding-bottom: 40px;
  @media (min-width: ${breakpoints.md}) {
    padding-bottom: 120px;
  }
`

const C = styled(Container)`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
`

export interface IndexProps {
  readonly projects: ProjectProps['data']
  readonly posts: BlogProps['data']
  readonly sectors: SectorsProps['data']
}

const Index: FC<IndexProps> = ({ projects, posts, sectors }) => {
  return (
    <>
      <Banner />
      <About />
      <Pillars />
      <Services />
      <Sectors data={sectors} />
      <Project data={projects} />
      <Blog data={posts} />
      <Clients />
      {/* <Background>
        <C>
          <Sitemap />
          <Contact />
        </C>
      </Background> */}
    </>
  )
}

export default Index
