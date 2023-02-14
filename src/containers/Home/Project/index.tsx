import ColumnContainer from '@components/ColumnContainer'
import { FC } from 'react'
import { Items, Title } from './styled'
import { ViewMore } from '../styled'
import dummy from './dummy.png'
import Item from './Item'
import ProjectComponent, {
  ProjectsComponent,
  Project as Data,
} from '@components/Project'

export type { Data }

export interface ProjectProps {
  readonly data: ReadonlyArray<Data>
}

export const Project: FC<ProjectProps> = ({ data }) => {
  return (
    <ColumnContainer>
      <Title>Project & Tender</Title>
      <Items>
        {data.map((r) => (
          <ProjectComponent key={r.id} data={r} />
        ))}
      </Items>
      <ViewMore>View All</ViewMore>
    </ColumnContainer>
  )
}

export default Project
