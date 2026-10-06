import Banner from '@components/Banner'
import { FC } from 'react'
import { Container } from 'react-bootstrap'
import ProjectComponent, { Dummy, Project, Sector } from '@components/Project'
import { Description, Projects, Title } from './styled'
import Infographic from './TrainingEducation/Infographic'
import useTranslation from '../../locales/useTranslation'
import { getSectorContent } from '../../locales/sectors'

export type { Project, Sector }

export interface IndexProps {
  readonly data: Sector
}

const Index: FC<IndexProps> = ({ data }) => {
  const { locale } = useTranslation()
  const content = getSectorContent(data.slug, data, locale)

  return (
    <>
      <Banner backgroundSrc={data.image} size="short" />
      <Container>
        <Title>{content.title}</Title>
        <Description
          dangerouslySetInnerHTML={{ __html: content.description }}
        />
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
