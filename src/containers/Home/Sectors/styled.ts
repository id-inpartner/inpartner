import { color } from '@components/GlobalStyle'
import styled from '@emotion/styled'
import Slider from 'react-slick'

export const Items = styled(Slider)`
  max-width: calc(100% - 24px);
  align-self: center;
  @media (min-width: 1024px) {
    max-width: 920px;
  }
`

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  & svg path {
    fill: ${color.primary.normal};
  }
  border-radius: 50%;
  width: 36px;
  height: 36px;
  &:before {
    display: none;
  }
  &.slick-prev {
    transform: translate(8px, -50%);
    z-index: 2;
    @media (min-width: 1100px) {
      transform: translate(-36px, -50%);
    }
  }
  &.slick-next {
    transform: translate(-8px, -50%);
    @media (min-width: 1100px) {
      transform: translate(36px, -50%);
    }
  }
`
