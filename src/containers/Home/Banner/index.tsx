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
import useTranslation from '../../../locales/useTranslation'

export const Banner: FC = () => {
  const { t } = useTranslation()
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
              <BI
                fill
                quality={100}
                alt="Inpartner Advisory Banner 1"
                src={a}
                priority
                sizes="100vw"
              />
            </ItemInner>
          </Item>
        </Carousel.Item>
        <Carousel.Item>
          <Item>
            <ItemInner>
              <BI
                fill
                quality={100}
                alt="Inpartner Advisory Banner 2"
                src={b}
                sizes="100vw"
              />
            </ItemInner>
          </Item>
        </Carousel.Item>
        <Carousel.Item>
          <Item>
            <ItemInner>
              <BI
                fill
                quality={100}
                alt="Inpartner Advisory Banner 3"
                src={c}
                sizes="100vw"
              />
            </ItemInner>
          </Item>
        </Carousel.Item>
      </C>
      <RootInner>
        <ContentContainer>
          <Content>
            <Title>{t.home.banner.title}</Title>
            <Subtitle>{t.home.banner.subtitle}</Subtitle>
            <Description>{t.home.banner.description}</Description>
            <LearnMore href="/about" variant="secondary">
              {t.home.banner.learnMore}
            </LearnMore>
          </Content>
        </ContentContainer>
      </RootInner>
    </Root>
  )
}

export default Banner
