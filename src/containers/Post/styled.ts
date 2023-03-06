import { breakpoints, color } from '@components/GlobalStyle'
import SectionTitle from '@components/SectionTitle'
import styled from '@emotion/styled'
import { Container as C } from 'react-bootstrap'

export const Container = styled(C)`
  padding-bottom: 68px;
  @media (min-width: ${breakpoints.md}) {
    padding-bottom: 120px;
  }
`

export const Title = styled(SectionTitle)`
  text-align: center;
  margin-top: 50px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 90px;
  }
`

export const Content = styled.div``

export const Meta = styled.div`
  color: gray;
  margin-bottom: 12px;
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
