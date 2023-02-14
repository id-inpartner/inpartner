import { breakpoints } from '@components/GlobalStyle'
import { ProjectsComponent } from '@components/Project'
import SectionTitle from '@components/SectionTitle'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Container as C } from 'react-bootstrap'

export const Container = styled(C)`
  display: flex;
  flex-wrap: wrap;
`

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 90%;
  flex: 1;
  @media (min-width: ${breakpoints.lg}) {
    min-width: 330px;
    max-width: 330px;
    border-right: 1px solid #d9d9d9;
    margin-right: 32px;
  }
`

export const MenuTitle = styled(SectionTitle)`
  padding-top: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 0;
  @media (min-width: ${breakpoints.lg}) {
    padding-top: 64px;
    padding-bottom: 32px;
  }
`

export const MenuItem = styled(Link)`
  padding: 8px;
  display: flex;
  align-items: center;
  min-height: 48px;
  font-weight: 600;
  font-size: 16px;
  border-bottom: 1px solid #d9d9d9;
  &.selected {
    background: #f2f2f2;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.12);
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: 20px;
    min-height: 96px;
  }
`

export const Projects = styled(ProjectsComponent)`
  flex: 1;
  padding-bottom: 15px;
  @media (min-width: ${breakpoints.lg}) {
    padding-bottom: 42px;
  }
  & > .pagination {
    min-width: 100%;
    margin-left: 12px;
    margin-right: 12px;
    margin-top: 20px;
  }
`

export const Queries = styled.div`
  min-width: 100%;
  display: flex;
  padding-top: 32px;
  padding-bottom: 16px;
  @media (min-width: ${breakpoints.lg}) {
    padding-top: 64px;
    padding-bottom: 32px;
  }
  & > .form-control,
  & > .form-select {
    width: unset;
    min-width: 134px;
    margin-left: 12px;
    margin-right: 12px;
  }
`
