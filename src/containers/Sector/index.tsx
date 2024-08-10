import Banner from '@components/Banner'
import { FC } from 'react'
import { Container } from 'react-bootstrap'
import ProjectComponent, { Dummy, Project, Sector } from '@components/Project'
import { Description, Projects, Title } from './styled'
import Infographic from './TrainingEducation/Infographic'

export type { Project, Sector }

export interface IndexProps {
  readonly data: Sector
}

const Index: FC<IndexProps> = ({ data }) => {
  return (
    <>
      <Banner backgroundSrc={data.image} size="short" />
      <Container>
        <Title>{data.title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: data.description }} />
        {/* {descs.map((d, i) => (
          <p key={i}>{d}</p>
        ))} */}
        {data.slug == 'education-training' && <Infographic />}
        <Projects>
          {data.projects.map((p, i) => (
            <ProjectComponent key={i} data={p} />
          ))}
          <Dummy aria-hidden />
          <Dummy aria-hidden />
        </Projects>
      </Container>
    </>
  )
}

export default Index
