import { breakpoints } from '@components/GlobalStyle'
import styled from '@emotion/styled'
import C from '@components/Card'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -8px;
  margin-right: -8px;
  margin-top: 20px;
  margin-bottom: 66px;
  @media (min-width: ${breakpoints.md}) {
    margin-left: -14px;
    margin-right: -14px;
    margin-top: 40px;
    margin-bottom: 130px;
  }
`

export const Dummy = styled.div`
  flex: 1;
  height: 0;
  margin-left: 8px;
  margin-right: 8px;
  min-width: calc(100% - 8px - 8px);
  @media (min-width: ${breakpoints.sm}) {
    min-width: calc(50% - 8px - 8px);
  }
  @media (min-width: ${breakpoints.md}) {
    margin-left: 14px;
    margin-right: 14px;
    min-width: calc(50% - 14px - 14px);
  }
  @media (min-width: ${breakpoints.lg}) {
    min-width: calc(33.33% - 14px - 14px);
  }
  @media (min-width: ${breakpoints.xl}) {
    min-width: calc(25% - 14px - 14px);
  }
`

export const Card = styled(C)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;
  min-width: calc(100% - 8px - 8px);
  margin-top: 16px;
  overflow: hidden;
  @media (min-width: ${breakpoints.sm}) {
    min-width: calc(50% - 8px - 8px);
  }
  @media (min-width: ${breakpoints.md}) {
    margin-left: 14px;
    margin-right: 14px;
    min-width: calc(50% - 14px - 14px);
    margin-top: 28px;
  }
  @media (min-width: ${breakpoints.lg}) {
    min-width: calc(33.33% - 14px - 14px);
  }
  @media (min-width: ${breakpoints.xl}) {
    min-width: calc(25% - 14px - 14px);
  }
`

export const Aspect = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  & > img {
    object-fit: cover;
  }
`

export const Name = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  margin: 12px 0 0 0;
`

export const Pos = styled.div`
  text-align: center;
  font-size: 14px;
  margin: 0 0 12px 0;
`
