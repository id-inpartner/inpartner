import { breakpoints } from '@components/GlobalStyle'
import styled from '@emotion/styled'

export const Root = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 959px;
  margin-left: -16px;
  margin-right: -16px;
  min-width: calc(100% + 16px + 16px);
  @media (min-width: 1015px) {
    min-width: 959px;
  }
  padding-bottom: 68px;
  margin-top: 34px;
  @media (min-width: ${breakpoints.md}) {
    padding-bottom: 120px;
    margin-top: 74px;
  }
  & > .team,
  & > .image {
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 16px;
  }
  & > .team {
    flex: 1;
    min-width: 300px;
  }
  & > .image {
    flex: 1;
    max-width: 100%;
    min-width: 300px;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    overflow: hidden;
    & img {
      object-fit: cover;
    }
    @media (min-width: ${breakpoints.md}) {
      max-width: 448px;
    }
  }
`
