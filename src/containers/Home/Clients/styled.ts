import { breakpoints } from '@components/GlobalStyle'
import SectionTitle from '@components/SectionTitle'
import styled from '@emotion/styled'

export const Title = styled(SectionTitle)`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 0px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 90px;
    margin-bottom: 28px;
  }
`

export const Con = styled.div`
  display: flex;
  overflow-x: hidden;
  margin-top: 32px;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  overflow: visible;
  & > img {
    margin-left: 16px;
    margin-right: 16px;
    object-fit: contain;
    flex: 0 0 auto;
    position: relative;
  }
  will-change: transform;
  animation: marquee-horizontal-alt 100s linear infinite;
  @keyframes marquee-horizontal-alt {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }
  &.last {
    animation: marquee-horizontal 100s linear infinite;
    @keyframes marquee-horizontal {
      from {
        transform: translateX(0%);
      }
      to {
        transform: translateX(-100%);
      }
    }
  }
`

export const Items = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  margin-right: -16px;
  margin-left: -16px;
  &.last {
    margin-bottom: 92px;
    @media (min-width: ${breakpoints.md}) {
      margin-bottom: 120px;
    }
  }
  &:hover {
    & > div {
      animation-play-state: paused;
    }
  }
`
