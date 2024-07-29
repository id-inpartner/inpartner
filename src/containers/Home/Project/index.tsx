import ColumnContainer from '@components/ColumnContainer'
import { FC } from 'react'
import { Items, Title } from './styled'
import { ViewMore } from '../styled'
import ProjectComponent, { Project as Data } from '@components/Project'
import Button from '@components/Button'

export type { Data }

export interface ProjectProps {
  readonly data: ReadonlyArray<Data>
}

export const Project: FC<ProjectProps> = ({ data }) => {
  return (
    <ColumnContainer>
      <Title>Projects</Title>
      <Items>
        {data.map((r) => (
          <ProjectComponent key={r.id} data={r} />
        ))}
      </Items>
      <ViewMore href="/project">
        <Button>View All</Button>
      </ViewMore>
    </ColumnContainer>
  )
}

export default Project
