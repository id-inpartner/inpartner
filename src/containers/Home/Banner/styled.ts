import Image from '@components/Image'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import styled from '@emotion/styled'
import { breakpoints } from '@components/GlobalStyle'
import Button from '@components/Button'
import { sans } from '@fonts/index'

export const C = styled(Carousel)`
  & .carousel-indicators {
    & > button {
      background-color: transparent;
      width: 24px;
      height: 24px;
      position: relative;
      opacity: 1;
      transition: all 0.2s ease-in-out;
      &:before {
        width: 8px;
        height: 8px;
        content: '';
        border-radius: 50%;
        background-color: #d9d9d9;
        position: absolute;
        left: 8px;
        top: 8px;
      }
      &:hover {
        transform: scale(1.2);
        &:before {
          background-color: var(--bs-primary);
          border: 2px solid white;
        }
      }
    }
    & > .active {
      &:before {
        background-color: var(--bs-primary);
      }
    }
    @media (min-width: ${breakpoints.md}) {
      & > button {
        width: 40px;
        height: 40px;
        &:before {
          width: 16px;
          height: 16px;
          left: 12px;
          top: 12px;
        }
      }
    }
    margin-bottom: 0;
    @media (min-width: ${breakpoints.md}) {
      margin-bottom: 1rem;
    }
    @media (min-width: ${breakpoints.lg}) {
      margin-bottom: 2rem;
    }
    @media (min-width: ${breakpoints.xl}) {
      margin-bottom: 3rem;
    }
  }
`

export const Item = styled.div`
  padding-top: ${702 / 13.66}%;
  position: relative;
  @media (min-width: 1440px) {
    padding-top: 740.017px;
  }
`

export const ItemInner = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

export const BI = styled(Image)`
  object-fit: cover;
`

export const Root = styled.div`
  position: relative;
`

export const RootInner = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`

export const ContentContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

export const Content = styled.div`
  margin-right: auto;
  max-width: 900px;
  color: white;
  font-family: ${sans.style.fontFamily};
`

export const Title = styled.h1`
  font-family: ${sans.style.fontFamily};
  font-weight: 600;
  font-size: 16px;
  @media (min-width: ${breakpoints.md}) {
    font-size: 38px;
  }
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
  margin-bottom: 0;
`

export const Subtitle = styled.div`
  font-weight: 500;
  font-size: 12px;
  @media (min-width: ${breakpoints.md}) {
    font-size: 28px;
  }
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
`

export const Description = styled.div`
  font-size: 10px;
  margin-top: 10px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 24px;
    font-size: 20px;
  }
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
`

export const LearnMore = styled(Button)`
  margin-top: 10px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 24px;
    min-width: 140px;
  }
`
