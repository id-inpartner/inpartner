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
import useTranslation from '../../locales/useTranslation'

export const Index: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Banner title={t.teamPage.bannerTitle} backgroundSrc={banner} />
      <OurTeam>
        <div className="root">
          <TitleDescription title={t.teamPage.teamTitle}>
            {t.teamPage.teamSubtitle}
          </TitleDescription>
        </div>
      </OurTeam>
      <Team
        title={t.teamPage.team1Title}
        description={t.teamPage.team1Desc}
        image={team1}
      />
      <Team
        title={t.teamPage.team2Title}
        description={t.teamPage.team2Desc}
        image={team2}
        reverse
      />
      <Team
        title={t.teamPage.team3Title}
        description={t.teamPage.team3Desc}
        image={team3}
        reverse
      />
      <Team
        title={t.teamPage.cditTitle}
        description={t.teamPage.cditDesc}
        image={cdit}
      />
      <ColumnContainer>
        <Title>{t.teamPage.ourPeople}</Title>
        <Employee />
      </ColumnContainer>
    </>
  )
}

export default Index
