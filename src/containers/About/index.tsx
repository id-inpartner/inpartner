import Banner from '@components/Banner'
import Card from '@components/CardTitleDescription'
import Image from '@components/Image'
import { FC } from 'react'
import { Ratio } from 'react-bootstrap'
import banner from './banner.png'
import { Container, Section, Values, VisionMissions } from './styled'
import ColumnContainer from '@components/ColumnContainer'
import TitleDescription from '@components/TitleDescription'
import values from './values.png'
import Target from '@components/Target'
import History from './history'
import Diversity from './diversity'
import Sustainability from './sustainability'
import Team from './Team'
import GrayBackground from '@components/Graybackground'
import useTranslation from '../../locales/useTranslation'

export const Index: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Banner
        title={t.aboutPage.bannerTitle}
        description={t.aboutPage.bannerDesc}
        backgroundSrc={banner}
      />
      <Container className="vm">
        <VisionMissions>
          <Card title={t.aboutPage.visionTitle} className="item" id="vision">
            {t.aboutPage.visionText}
          </Card>
          <Card
            title={t.aboutPage.missionsTitle}
            className="item"
            id="missions"
          >
            {t.aboutPage.missionsText}
          </Card>
        </VisionMissions>
      </Container>
      <Container className="pb">
        <Section className="reverse">
          <History />
        </Section>
      </Container>
      <Values>
        <Target id="values" className="low" />
        <ColumnContainer>
          <TitleDescription title={t.aboutPage.valuesTitle}>
            {t.aboutPage.valuesDesc}
          </TitleDescription>
          <Ratio className="image" aspectRatio={521 / 1120}>
            <Image
              src={values}
              alt="Inpartner Core Values"
              fill
              quality={100}
              sizes="(min-width: 1200px) 1120px, (min-width: 768px) 90vw, 100vw"
            />
          </Ratio>
        </ColumnContainer>
      </Values>
      <Container>
        <Section>
          <Diversity />
        </Section>
      </Container>
      <GrayBackground>
        <Container>
          <Section className="reverse">
            <Sustainability />
          </Section>
        </Container>
      </GrayBackground>
      <Team />
    </>
  )
}

export default Index
