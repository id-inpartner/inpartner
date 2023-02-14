import Card from '@components/CardTitleDescription'
import { breakpoints, color } from '@components/GlobalStyle'
import styled from '@emotion/styled'
import { Container as C } from 'react-bootstrap'

export const Background = styled.div`
  background-color: ${color.background.gray};
`

export const Container = styled(C)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: flex-start;
  padding-bottom: 50px;
  padding-top: 18px;
  @media (min-width: ${breakpoints.md}) {
    padding-bottom: 100px;
    padding-top: 58px;
  }
  @media (min-width: ${breakpoints.xl}) {
    max-width: 927px;
  }
`

export const Content = styled(Card)`
  flex: 1;
  min-width: 300px;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 32px;
  & > .card-title {
    text-align: left;
  }
`

export const Images = styled.div`
  flex: 1;
  display: flex;
  min-width: 300px;
  position: relative;
  margin-top: 32px;
  @media (min-width: ${breakpoints.xl}) {
    max-width: 328px;
  }
  margin-left: 8px;
  margin-right: 8px;
  & > div {
    flex: 1;
    position: relative;
    border-radius: 8px;
    & > img {
      object-fit: cover;
      border-radius: 8px;
    }
  }
`
