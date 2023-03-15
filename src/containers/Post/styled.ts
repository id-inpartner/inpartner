import { breakpoints, color } from '@components/GlobalStyle'
import styled from '@emotion/styled'
import { sans } from '@fonts/index'
import Link from 'next/link'
import { Container as C } from 'react-bootstrap'

export const Container = styled(C)`
  padding-bottom: 68px;
  @media (min-width: ${breakpoints.md}) {
    padding-bottom: 120px;
  }
  display: flex;
  flex-wrap: wrap;
`

export const Article = styled.div`
  flex: 1;
  max-width: 100%;
`

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  @media (min-width: ${breakpoints.lg}) {
    max-width: 384px;
    min-width: 384px;
  }
  @media (min-width: ${breakpoints.md}) {
    min-width: 384px;
  }
  & > .title {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    width: 100%;
    @media (min-width: ${breakpoints.md}) {
      font-size: 26px;
    }
    margin-top: 50px;
    @media (min-width: ${breakpoints.md}) {
      margin-top: 90px;
    }
  }
`

export const Title = styled.h1`
  font-weight: bold;
  font-family: ${sans.style.fontFamily};
  font-size: 22px;
  @media (min-width: ${breakpoints.md}) {
    font-size: 32px;
  }
  margin-top: 50px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 90px;
  }
`

export const Content = styled.div`
  font-size: 20px;
  & table {
    border: 1px solid black;
    margin-bottom: 2rem;
    & > thead {
      & > tr {
        & > th {
          color: white;
          background-color: #80304c;
          border-bottom: 1px solid black;
          border-left: 1px solid white;
          border-right: 1px solid white;
          padding: 0.5em;
          &:first-child {
            border-left-color: black;
          }
          &:last-child {
            border-right-color: black;
          }
        }
      }
    }
    & > tbody {
      & > tr {
        & > td {
          border-left: 1px solid black;
          border-right: 1px solid black;
          padding: 0.5em;
        }
      }
    }
  }
  & .has-text-align-center {
    text-align: center;
  }
  & p {
    margin-bottom: 2rem;
  }
  & h2 {
    margin-bottom: 2rem;
    margin-top: 3rem;
    font-weight: 700;
    font-size: 20px;
    @media (min-width: ${breakpoints.md}) {
      font-size: 28px;
    }
  }
`

export const Meta = styled.div`
  color: black;
  margin-bottom: 12px;
  margin-top: 12px;
  font-size: 18px;
  @media (min-width: ${breakpoints.md}) {
    font-size: 20px;
    margin-top: 24px;
  }
`

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -4px;
  margin-right: -4px;
  & > div {
    margin-left: 4px;
    margin-right: 4px;
    margin-bottom: 8px;
    background-color: #80304c;
    color: #664d03;
    color: #fff3cd;
    border-radius: 4px;
    padding: 4px 16px;
  }
  font-size: 12px;
  @media (min-width: ${breakpoints.md}) {
    font-size: 14px;
  }
`

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -4px;
  & > a {
    margin: 4px;
    & > button {
      background-color: white;
      color: black;
      border: none;
      font-weight: 400;
      text-align: center;
    }
  }
`

export const Item = styled(Link)`
  display: flex;
  margin-top: 32px;
  &:hover {
    & > .content {
      & > .title {
        text-decoration: underline;
      }
    }
  }
  & img {
    object-fit: cover;
    border-radius: 12px;
  }
  & > .content {
    flex: 1;
    margin-left: 16px;
    & > .category {
      font-size: 14px;
    }
    & > .title {
      font-weight: 700;
      font-size: 16px;
    }
  }
`
