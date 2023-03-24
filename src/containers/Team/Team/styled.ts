import ColumnContainer from '@components/ColumnContainer'
import { breakpoints } from '@components/GlobalStyle'
import TitleDescription from '@components/TitleDescription'
import styled from '@emotion/styled'
import { Container as C } from 'react-bootstrap'

export const Container = styled(C)`
  & > .root {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin-top: 16px;
    margin-bottom: 16px;
    @media (min-width: ${breakpoints.lg}) {
      margin-left: -12px;
      margin-right: -12px;
    }
    @media (min-width: ${breakpoints.xl}) {
      margin-left: -20px;
      margin-right: -20px;
      margin-top: 72px;
      margin-bottom: 72px;
    }

    &.reverse {
      flex-direction: row-reverse;
    }
  }
`

export const Aspect = styled.div`
  position: relative;
  flex: 704;
  min-width: 100%;
  & > .aspect {
    width: 100%;
    padding-top: ${480 / 7.04}%;
    & > img {
      object-fit: cover;
    }
  }
  margin-top: 16px;
  margin-bottom: 16px;
  @media (min-width: ${breakpoints.lg}) {
    min-width: 0;
    margin-left: 12px;
    margin-right: 12px;
  }
  @media (min-width: ${breakpoints.xl}) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

export const Text = styled.div`
  flex: 466;
  & > .title {
    margin-top: 16px;
  }
  & > .description {
    text-align: justify;
    margin-bottom: 16px;
  }
  @media (min-width: ${breakpoints.lg}) {
    margin-left: 12px;
    margin-right: 12px;
  }
  @media (min-width: ${breakpoints.xl}) {
    margin-left: 20px;
    margin-right: 20px;
  }
`
