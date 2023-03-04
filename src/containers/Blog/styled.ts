import { breakpoints, color } from '@components/GlobalStyle'
import styled from '@emotion/styled'
import { Container as C } from 'react-bootstrap'

export const Container = styled(C)`
  padding-bottom: 68px;
  @media (min-width: ${breakpoints.md}) {
    padding-bottom: 120px;
  }
`

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 68px;
  margin-bottom: 32px;
  margin-left: -12px;
  margin-right: -12px;
  & > div {
    margin-left: 12px;
    margin-right: 12px;
  }
  @media (min-width: ${breakpoints.md}) {
    margin-top: 120px;
    margin-bottom: 68px;
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
    background-color: #fff3cd;
    color: #664d03;
    border-radius: 4px;
    padding: 4px 16px;
  }
`
