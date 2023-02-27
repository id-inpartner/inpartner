import Card from '@components/Card'
import styled from '@emotion/styled'
import Image from 'next/image'
import { FC } from 'react'
import format from 'date-fns/format'
import { breakpoints } from '@components/GlobalStyle'

export const ProjectsComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
`

export interface Project {
  readonly id: number
  readonly title: string
  readonly image: string
  readonly startAt: string
  readonly endAt: string
  readonly sector: {
    readonly title: string
  }
  readonly category: {
    readonly title: string
  }
}

export interface Sector {
  readonly id: number
  readonly slug: string
  readonly metaTitle: string
  readonly metaDescription: string
  readonly name: string
  readonly title: string
  readonly description: string
  readonly image: string
  readonly projects: ReadonlyArray<Project>
}

export interface ProjectComponentProps {
  readonly data: Project
}

export const ProjectComponent: FC<ProjectComponentProps> = ({ data }) => {
  return (
    <C>
      <Aspect>
        <Image
          fill
          quality={100}
          src={data.image}
          alt=""
          sizes={`(min-width: ${breakpoints.xxl}) 414px, (min-width: ${breakpoints.xl}) 354px, (min-width: ${breakpoints.lg}) 454px, (min-width: ${breakpoints.md}) 334px, (min-width: ${breakpoints.sm}) 514px, 400px`}
        />
      </Aspect>
      <Title>{data.title}</Title>
      <Subtitle>
        {data.category.title} | {data.sector.title}
      </Subtitle>
      {/* <Dates>
        <tr>
          <td>Project Started</td>
          <td>:</td>
          <td>{format(new Date(data.startAt), 'MMM yyyy')}</td>
        </tr>
        <tr>
          <td>Project Completed</td>
          <td>:</td>
          <td>{format(new Date(data.endAt), 'MMM yyyy')}</td>
        </tr>
      </Dates> */}
    </C>
  )
}

export const Dummy = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  flex: 1;
  min-width: 300px;
`

const C = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 12px;
  flex: 1;
  min-width: 300px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.015);
  }
`

const Aspect = styled.div`
  padding-top: ${235 / 3.57}%;
  position: relative;
  & img {
    object-fit: contain;
  }
`

const Title = styled.h2`
  font-size: 20px;
  margin: 24px 24px 4px 24px;
`

const Subtitle = styled.div`
  margin: 12px 24px 24px 24px;
`

const Dates = styled.table`
  margin: 12px 24px 24px 24px;
`

export default ProjectComponent
