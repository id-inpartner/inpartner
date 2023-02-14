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

export const Index: FC = () => {
  return (
    <>
      <Banner
        title="About Us"
        description="INPARTNER is one of Indonesia Consultant services, located in Jakarta Selatan. Founded by professionals since 2019, we take a holistic approach to identifying the problem and give you a home run. INPARTNER also has clear guides to unleash the power of your business for a brighter future."
        backgroundSrc={banner}
      />
      <Container className="vm">
        <VisionMissions>
          <Card title="Vision" className="item" id="vision">
            The Most Trusted Consulting Partner To help create positive and
            endure changes in Local and Global Coverage.
          </Card>
          <Card title="Missions" className="item" id="missions">
            Our mission is to combine knowledge, technology, information, and
            network to unlock solution and reach client&apos;s goals.
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
          <TitleDescription title="Values">
            With our value, Go Beyond than Just Consultancy, we are committed to
            opening up to all access that our clients need it. Such as
            financing, business development, and also people development through
          </TitleDescription>
          <Ratio className="image" aspectRatio={521 / 1120}>
            <Image src={values} alt="" fill quality={100} />
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
