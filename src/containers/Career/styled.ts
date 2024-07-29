import Card from '@components/Card'
import { breakpoints, color } from '@components/GlobalStyle'
import styled from '@emotion/styled'
import { Container as C, Table as T, Form as F } from 'react-bootstrap'

export const Container = styled(C)`
  z-index: 2;
  overflow: visible;
  position: relative;
  padding-bottom: 68px;
  @media (min-width: ${breakpoints.md}) {
    padding-bottom: 120px;
  }
`

export const Inner = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 32px;
  @media (min-width: ${breakpoints.lg}) {
    margin-top: -100px;
  }
  & > h5 {
    text-align: center;
    margin-bottom: 2rem;
    padding-top: 16px;
    @media (min-width: ${breakpoints.md}) {
      padding-top: 32px;
    }
  }
  padding-top: 16px;
  @media (min-width: ${breakpoints.md}) {
    padding-top: 32px;
  }
`

export const SearchForm = styled(F)`
  display: flex;
  flex-direction: column;
  overflow-x: visible;
  & .form-row > td {
    border-block-width: 0;
    & > .form-select {
      margin-top: 12px;
      margin-bottom: 12px;
    }
    & > .btn {
      margin-top: 12px;
      margin-bottom: 12px;
    }
  }
  & tr > td > h5 {
    text-align: center;
  }
`

export const Table = styled(T)`
  margin: 0 2rem;
  width: calc(100% - 4rem);
  font-size: 20px;
  & > tbody {
    & > tr {
      & > td {
        padding: 1rem 0.5rem;
        vertical-align: middle;
        white-space: nowrap;
        &:first-child {
          min-width: 160px;
        }
        &:not(:first-child) {
          white-space: nowrap;
        }
        & > a {
          font-size: 16px;
          font-weight: 700;
          color: ${color.primary.normal};
          text-decoration: underline;
          &:hover {
            color: ${color.primary.dark};
          }
        }
      }
    }
  }
`
