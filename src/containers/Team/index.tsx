import Banner from '@components/Banner'
import { FC } from 'react'
import banner from './banner.png'
import { OurTeam } from './styled'
import TitleDescription, { Title } from '@components/TitleDescription'
import Team from './Team'
import team1 from './team-1.png'
import team2 from './team-2.png'
import team3 from './team-3.png'
import cdit from './cd-it.png'
import { Employee } from './Employee'
import ColumnContainer from '@components/ColumnContainer'

export const Index: FC = () => {
  return (
    <>
      <Banner backgroundSrc={banner} />
      <OurTeam>
        <div className="root">
          <TitleDescription title="Our Team">
            Meet our powerhouse team - dedicated, collaborative, and driven to
            deliver excellence every step of the way.
            <br />
            Our team is a diverse mix of talent, expertise, and personality, all
            coming together to create magic for our clients.
            <br />
            Behind every great company is a great team. Meet ours, who are
            committed to achieving nothing but the best for our clients.
            <br />
            At the heart of our success is our team, who work tirelessly to
            exceed expectations and push boundaries.
            <br />
            Our team is more than just a group of individuals - we&apos;re a
            family united by our passion for innovation and success.
          </TitleDescription>
        </div>
      </OurTeam>
      <Team
        title="Team 1"
        description="INPARTNER (PT Inpartrner Optima Integra) is a transformation of management consulting services established in 2009. We started as a consultant to help increase accessibility to market, financing, technology, and productivity and provide capacity building for the MSME sector in East Java. Our purpose is also to give a change for a better through continuous improvement. And now, we come up as consultant services in business and management to the middle and large corporations."
        image={team1}
      />
      <Team
        title="Team 2"
        description="INPARTNER (PT Inpartrner Optima Integra) is a transformation of management consulting services established in 2009. We started as a consultant to help increase accessibility to market, financing, technology, and productivity and provide capacity building for the MSME sector in East Java. Our purpose is also to give a change for a better through continuous improvement. And now, we come up as consultant services in business and management to the middle and large corporations."
        image={team2}
        reverse
      />
      <Team
        title="Team 3"
        description="INPARTNER (PT Inpartrner Optima Integra) is a transformation of management consulting services established in 2009. We started as a consultant to help increase accessibility to market, financing, technology, and productivity and provide capacity building for the MSME sector in East Java. Our purpose is also to give a change for a better through continuous improvement. And now, we come up as consultant services in business and management to the middle and large corporations."
        image={team3}
        reverse
      />
      <Team
        title="Creative Digital & IT"
        description="INPARTNER (PT Inpartrner Optima Integra) is a transformation of management consulting services established in 2009. We started as a consultant to help increase accessibility to market, financing, technology, and productivity and provide capacity building for the MSME sector in East Java. Our purpose is also to give a change for a better through continuous improvement. And now, we come up as consultant services in business and management to the middle and large corporations."
        image={cdit}
      />
      <ColumnContainer>
        <Title>Our People</Title>
        <Employee />
      </ColumnContainer>
    </>
  )
}

export default Index
