import Banner from '@components/Banner'
import { FC } from 'react'
import banner from './banner.png'
import { OurTeam } from './styled'
import TitleDescription from '@components/TitleDescription'
import Team from './Team'
import team1 from './team-1.png'
import team2 from './team-2.png'
import team3 from './team-3.png'
import cdit from './cd-it.png'

export const Index: FC = () => {
  return (
    <>
      <Banner backgroundSrc={banner} />
      <OurTeam>
        <div className="root">
          <TitleDescription title="Our Team">
            At EY, we empower our people with the right mindsets and skills to
            navigate what&apos;s next, become the transformative leaders the
            world needs, pursue careers as unique as they are, and build their
            own exceptional EY experiences.
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
    </>
  )
}

export default Index
