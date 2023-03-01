import Container from 'react-bootstrap/Container'
import styled from '@emotion/styled'
import { breakpoints, color } from '@components/GlobalStyle'
import { sans } from '@fonts/index'
import Link from 'next/link'

export const Root = styled.div`
  background-color: ${color.primary.normal};
  color: white;
  font-family: ${sans.style.fontFamily};
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.3);
  & a:hover {
    cursor: pointer;
    color: white;
    opacity: 0.6;
  }
`

export const Row = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  padding-top: 25px;
  flex-direction: column;
  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
  }
`

export const Menus = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
  }
  @media (min-width: ${breakpoints.xl}) {
    margin-left: 48px;
  }
  @media (min-width: ${breakpoints.xxl}) {
    margin-left: 80px;
  }
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuTitle = styled(Link)`
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  margin-top: 10px;
  @media (min-width: ${breakpoints.md}) {
    font-size: 16px;
    margin-top: 0;
  }
`

export const Menu = styled(Link)`
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 12px;
  text-decoration: none;
  color: white;
  overflow-wrap: break-word;
  @media (min-width: ${breakpoints.md}) {
    font-size: 16px;
    max-width: 289px;
  }
`

export const Divider = styled(Container)`
  margin-top: 25px;
  height: 1px;
  background-color: white;
  border-radius: 100%;
`

export const Copyright = styled.span`
  margin-bottom: 25px;
  font-family: ${sans.style.fontFamily};
  & a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
`

export const Properties = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  @media (min-width: ${breakpoints.md}) {
    font-size: 16px;
  }
  @media (min-width: ${breakpoints.lg}) {
    max-width: 450px;
  }
  @media (min-width: ${breakpoints.xl}) {
    max-width: 480px;
  }
  & > div {
    display: flex;
    flex-wrap: wrap;
    &.social {
      align-items: center;
    }
    & > .name {
      max-width: 100px;
      min-width: 72px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    & > .c {
      min-width: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    & > .value {
      flex: 1;
      & a {
        display: inline-block;
        padding-top: 5px;
        padding-bottom: 5px;
        color: white;
        &:hover {
          color: white;
          opacity: 0.6;
        }
      }
      &.social {
        display: flex;
        margin-left: -8px;
        & a {
          display: block;
          padding: 8px;
          cursor: pointer;
          & svg {
            min-width: 20px;
            min-height: 22.85px;
          }
          & svg path {
            fill: white;
          }
          &:hover {
            & svg path {
              color: white;
              opacity: 0.6;
            }
          }
        }
      }
    }
  }
`
