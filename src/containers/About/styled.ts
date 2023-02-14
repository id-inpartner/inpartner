import { breakpoints, color } from '@components/GlobalStyle'
import styled from '@emotion/styled'
import { Container as C } from 'react-bootstrap'

export const Container = styled(C)`
  display: flex;
  flex-direction: column;
  align-items: center;
  &.vm {
    z-index: 2;
    overflow: visible;
    position: relative;
  }
  &.pb {
    padding-bottom: 68px;
    @media (min-width: ${breakpoints.md}) {
      padding-bottom: 120px;
    }
  }
`

export const VisionMissions = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  margin-left: -12px;
  margin-right: -12px;
  @media (min-width: ${breakpoints.md}) {
    margin-left: -16px;
    margin-right: -16px;
    min-width: calc(100% + 16px + 16px);
  }
  max-width: 1024px;
  min-width: calc(100% + 12px + 12px);
  @media (min-width: 1156px) {
    min-width: 1024px;
  }
  & > .item {
    flex: 1;
    min-width: 300px;
    margin-left: 12px;
    margin-right: 12px;
    margin-top: 32px;
    @media (min-width: ${breakpoints.lg}) {
      margin-top: -100px;
    }
    @media (min-width: ${breakpoints.md}) {
      margin-left: 16px;
      margin-right: 16px;
    }
  }
`

export const Section = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: -16px;
  margin-right: -16px;
  margin-top: 34px;
  margin-bottom: 34px;
  min-width: 100%;
  @media (min-width: ${breakpoints.lg}) {
    margin-left: auto;
    margin-right: auto;
    margin-left: -24px;
    margin-right: -24px;
  }
  @media (min-width: ${breakpoints.md}) {
    margin-top: 74px;
    margin-bottom: 74px;
  }
  &.reverse {
    @media (min-width: ${breakpoints.md}) {
      flex-direction: row-reverse;
    }
  }
  & > .content,
  & > .images {
    position: relative;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 16px;
    /* flex: 1; */
  }
  & > .content {
    max-width: 544px;
    min-width: 300px;
    @media (min-width: ${breakpoints.lg}) {
      margin-left: 24px;
      margin-right: 24px;
    }
  }
  & > .images {
    min-width: 300px;
    @media (min-width: ${breakpoints.lg}) {
      margin-right: 24px;
      margin-left: 24px;
    }
  }
  & > .images > div {
    position: relative;
  }
  & > .images {
    & > div {
      & > div {
        position: relative;
      }
      & > div > div {
        position: absolute;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.12);
      }
    }
  }
`

export const Values = styled.div`
  background-color: ${color.background.gray};
  position: relative;
  & .image {
    max-width: 992px;
    margin-left: auto;
    margin-right: auto;
    & > img {
      object-fit: contain;
    }
  }
  padding-bottom: 48px;
  @media (min-width: ${breakpoints.md}) {
    padding-bottom: 100px;
  }
`
