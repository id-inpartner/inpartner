import { breakpoints, color } from '@components/GlobalStyle'
import styled from '@emotion/styled'
import Link from 'next/link'
import Slider from 'react-slick'

export const ItemsWrapper = styled.div`
  margin-left: -16px;
  margin-right: -16px;
  margin-top: 48px;
`

export const Header = styled.div`
  min-width: 100%;
  display: flex;
  position: relative;
  margin-top: 40px;
  align-items: stretch;
  &.index-0 {
    margin-top: 80px;
  }
  & > .underline {
    height: 4px;
    position: absolute;
    left: 6px;
    right: 0;
    bottom: 0;
    background-color: ${color.primary.normal};
    z-index: 0;
  }
  & > .btn {
    border-radius: 50%;
    min-width: 40px;
    max-height: 40px;
    min-height: 40px;
    align-self: center;
    margin: 8px 0 8px 8px;
  }
`

export const Title = styled(Link)`
  position: relative;
  z-index: 1;
  flex: 1;
  @media (min-width: ${breakpoints.sm}) {
    flex: none;
  }
  & > .btn {
    border-bottom-right-radius: 0;
    max-width: 400px;
    @media (min-width: ${breakpoints.md}) {
      min-width: 400px;
    }
    height: 100%;
    width: 100%;
    font-weight: 700;
    font-size: 28px;
  }
`

export const Items = styled(Slider)`
  max-width: 100%;
  /* align-self: center; */
  @media (min-width: 1024px) {
    max-width: 100%;
  }
  & .slick-track {
    margin-left: 0;
  }
`
