import { FC } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import a from './1.png'
import b from './2.png'
import c from './3.png'
import { useState } from 'react'
import {
  BI,
  C,
  Content,
  ContentContainer,
  Description,
  Item,
  ItemInner,
  Root,
  RootInner,
  Subtitle,
  Title,
  LearnMore,
} from './styled'
import { useEffect } from 'react'

export const Banner: FC = () => {
  const [index, setIndex] = useState(0)
  const [interval, setInterval] = useState<number | null>(null)
  useEffect(() => {
    const d = setTimeout(() => {
      setInterval(5000)
    }, 15000)
    return () => {
      clearTimeout(d)
    }
  }, [])
  return (
    <Root>
      <C
        touch
        activeIndex={index}
        onSelect={(i) => setIndex(i)}
        controls={false}
        interval={interval}
      >
        <Carousel.Item>
          <Item>
            <ItemInner>
              <BI fill quality={100} alt="" src={a} priority />
            </ItemInner>
          </Item>
        </Carousel.Item>
        <Carousel.Item>
          <Item>
            <ItemInner>
              <BI fill quality={100} alt="" src={b} />
            </ItemInner>
          </Item>
        </Carousel.Item>
        <Carousel.Item>
          <Item>
            <ItemInner>
              <BI fill quality={100} alt="" src={c} />
            </ItemInner>
          </Item>
        </Carousel.Item>
      </C>
      <RootInner>
        <ContentContainer>
          <Content>
            <Title>UNLEASH THE POWER OF YOUR BUSINESS</Title>
            <Subtitle>Go Beyond Than Just Consultancy</Subtitle>
            <Description>
              Through our Consultation Services, we take a holistic approach to
              identify the problem and give you a home run. We have clear guides
              to unleash the power of your business for brighter future.
            </Description>
            <LearnMore href="/about" variant="secondary">
              Learn More
            </LearnMore>
          </Content>
        </ContentContainer>
      </RootInner>
    </Root>
  )
}

export default Banner
