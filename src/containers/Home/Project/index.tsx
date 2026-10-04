import ColumnContainer from '@components/ColumnContainer'
import { FC } from 'react'
import { Items, Title } from './styled'
import { ViewMore } from '../styled'
import ProjectComponent, { Project as Data } from '@components/Project'
import Button from '@components/Button'
import useTranslation from '../../../locales/useTranslation'

export type { Data }

export interface ProjectProps {
  readonly data: ReadonlyArray<Data>
}

export const Project: FC<ProjectProps> = ({ data }) => {
  const { t } = useTranslation()

  return (
    <ColumnContainer>
      <Title>{t.home.projects.title}</Title>
      <Items>
        {data.map((r) => (
          <ProjectComponent key={r.id} data={r} />
        ))}
      </Items>
      <ViewMore href="/project">
        <Button as="span">{t.home.projects.viewAll}</Button>
      </ViewMore>
    </ColumnContainer>
  )
}

export default Project
