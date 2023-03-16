import { breakpoints, color } from '@components/GlobalStyle'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Container as C } from 'react-bootstrap'

export const Container = styled(C)`
  padding-bottom: 68px;
  @media (min-width: ${breakpoints.md}) {
    padding-bottom: 120px;
  }
`

export const Banner = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -8px;
  margin-right: -8px;
  margin-top: 68px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 120px;
  }
  & > .search {
    min-width: calc(100% - 8px - 8px);
    display: flex;
    margin-bottom: 16px;
    margin-left: 8px;
    margin-right: 8px;
    & > .form-control {
      margin-right: 12px;
      max-width: 416px;
    }
  }
  & > .side {
    min-width: calc(100% - 8px - 8px);
    flex: 8;
    display: flex;
    flex-wrap: wrap;
    margin-left: 8px;
    margin-right: 8px;
    @media (min-width: ${breakpoints.md}) {
      margin-left: 0px;
      margin-right: 0px;
    }
    @media (min-width: ${breakpoints.xl}) {
      margin-top: -16px;
      margin-left: 8px;
      margin-right: 8px;
      min-width: 0;
    }
    & > a {
      margin-top: 16px;
      min-width: 100%;
      @media (min-width: ${breakpoints.md}) {
        min-width: 0;
        flex: 1;
        margin-left: 8px;
        margin-right: 8px;
      }
      @media (min-width: ${breakpoints.xl}) {
        min-width: 100%;
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
  & > .main {
    min-width: calc(100% - 8px - 8px);
    margin-left: 8px;
    margin-right: 8px;
  }
  @media (min-width: ${breakpoints.xl}) {
    & > .main {
      flex: 18;
      min-width: 0;
    }
  }
`

export const PostRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -8px;
  margin-right: -8px;
  align-items: stretch;
  & > a {
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 16px;
    min-width: calc(100% - 8px - 8px);
    @media (min-width: ${breakpoints.md}) {
      flex: 1;
      min-width: 0;
    }
    @media (min-width: ${breakpoints.xl}) {
      &:first-child {
        flex: 8;
      }
      &:last-child {
        flex: 18;
        & > .aspect {
          padding-top: 0;
          min-height: 100%;
        }
      }
    }
  }
`

export const Item = styled(Link)`
  position: relative;
  display: block;
  border-radius: 12px;
  overflow: hidden;
  & > .aspect {
    width: 100%;
    padding-top: ${296 / 3.04}%;
    & > img {
      object-fit: cover;
    }
  }
  & > .content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    padding: 16px;
    & > .term {
      font-size: 20px;
      font-weight: bold;
    }
    & > .title {
      font-size: 24px;
      font-weight: bold;
    }
    & > .date {
      font-size: 14px;
    }
  }
  @media (min-width: ${breakpoints.md}) {
    &.main {
      & > .aspect {
        padding-top: ${608 / 9.28}%;
      }
      & > .content {
        padding: 32px;
        & > .term {
          font-size: 24px;
        }
        & > .title {
          font-size: 28px;
        }
      }
    }
  }
`
