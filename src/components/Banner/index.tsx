import Image, { ImageProps } from 'next/image'
import styled from '@emotion/styled'
import { FC } from 'react'
import { Container } from 'react-bootstrap'
import { sans } from '@fonts/index'
import { breakpoints } from '@components/GlobalStyle'

const Root = styled.div`
  position: relative;
  width: 100%;
  color: white;
`

const Aspect = styled.div`
  position: relative;
  padding-top: ${702 / 13.66}%;
  @media (min-width: 1440px) {
    padding-top: 740.017px;
  }
  &.short {
    padding-top: ${465 / 14.4}%;
    @media (min-width: 1440px) {
      padding-top: 465px;
    }
  }
  z-index: 1;
`

const Content = styled(Container)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  justify-content: center;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
`

export const Title = styled.h1`
  font-family: ${sans.style.fontFamily};
  font-weight: 600;
  font-size: 16px;
  @media (min-width: ${breakpoints.md}) {
    font-size: 38px;
  }
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
`

export const Description = styled.div`
  font-size: 10px;
  margin-top: 0;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 24px;
    font-size: 20px;
  }
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
`

const Img = styled(Image)`
  object-fit: cover;
`

export interface BannerProps {
  readonly backgroundSrc: ImageProps['src']
  readonly title?: string
  readonly description?: string
  readonly size?: 'short' | 'height'
}

export const Banner: FC<BannerProps> = ({
  backgroundSrc,
  title,
  description,
  size,
}) => {
  return (
    <Root>
      <Aspect className={size === 'short' ? 'short' : 'height'}>
        <Img fill src={backgroundSrc} priority alt="" quality={100} />
      </Aspect>
      <Content>
        {!!title && <Title>{title}</Title>}
        {!!description && <Description>{description}</Description>}
      </Content>
    </Root>
  )
}

export default Banner
