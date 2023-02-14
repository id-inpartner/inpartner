import { breakpoints } from '@components/GlobalStyle'
import SectionTitle from '@components/SectionTitle'
import Text from '@components/Text'
import styled from '@emotion/styled'

export const Title = styled(SectionTitle)`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 32px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 90px;
    margin-bottom: 60px;
  }
`

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin-left: -8px;
  margin-right: -8px;
  margin-bottom: 8px;
  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 22px;
  }
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 8px;
  margin-right: 8px;
`

export const Item = styled.div`
  position: relative;
  flex: 1;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
  overflow: hidden;
  min-width: 300px;
  & > .ratio {
    min-height: 100%;
    & > img {
      transition: transform 1s ease-in-out;
    }
  }
  &:hover {
    & > .ratio > img {
      transform: scale(1.1);
    }
  }
`

export const Label = styled(Text)`
  color: white;
  max-width: 260px;
  font-weight: 500;
  text-align: left;
  position: absolute;
  left: 18px;
  top: 18px;
  right: 18px;
  @media (min-width: ${breakpoints.md}) {
    left: 32px;
    top: 32px;
    right: 32px;
  }
`
