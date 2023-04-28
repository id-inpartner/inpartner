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
          </TitleDescription>
        </div>
      </OurTeam>
      <Team
        title="Team 1"
        description="Our team is a diverse mix of talent, expertise, and personality, all coming together to create magic for our clients."
        image={team1}
      />
      <Team
        title="Team 2"
        description="Behind every great company is a great team. Meet ours, who are committed to achieving nothing but the best for our clients."
        image={team2}
        reverse
      />
      <Team
        title="Team 3"
        description="At the heart of our success is our team, who work tirelessly to exceed expectations and push boundaries."
        image={team3}
        reverse
      />
      <Team
        title="Creative Digital & IT"
        description="Our team is more than just a group of individuals - we're a family united by our passion for innovation and success."
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
