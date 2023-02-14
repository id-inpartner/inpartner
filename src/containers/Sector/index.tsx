import Banner from '@components/Banner'
import { FC, useMemo } from 'react'
import { Container } from 'react-bootstrap'
import ProjectComponent, { Project, Sector } from '@components/Project'
import { Projects, Title } from './styled'

export type { Project, Sector }

export interface IndexProps {
  readonly data: Sector
}

const Index: FC<IndexProps> = ({ data }) => {
  const descs = useMemo(
    () => data.description.split(/[\r\n]+/),
    [data.description]
  )
  return (
    <>
      <Banner backgroundSrc={data.image} size="short" />
      <Container>
        <Title>{data.title}</Title>
        {descs.map((d, i) => (
          <p key={i}>{d}</p>
        ))}
        <Projects>
          {data.projects.map((p, i) => (
            <ProjectComponent key={i} data={p} />
          ))}
        </Projects>
      </Container>
    </>
  )
}

export default Index
