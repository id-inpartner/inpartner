import Card from '@components/CardTitleDescription'
import Image from '@components/Image'
import { FC } from 'react'
import { Ratio } from 'react-bootstrap'
import team from './team.png'
import { Container, Root } from './styled'
import Target from '@components/Target'
import Button from '@components/Button'
import Link from 'next/link'
import useTranslation from '../../../locales/useTranslation'

export const Team: FC = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Root>
        <Target id="team" />
        <Ratio className="image" aspectRatio={292 / 448}>
          <Image
            src={team}
            alt=""
            fill
            quality={100}
            sizes="(min-width: 992px) 425px, (min-width: 768px) 320px, 100vw"
          />
        </Ratio>
        <Card title={t.aboutPage.teamTitle} className="team">
          {t.aboutPage.teamDesc}
        </Card>
      </Root>
      <Link href="/team" passHref legacyBehavior>
        <Button>{t.aboutPage.meetTeam}</Button>
      </Link>
    </Container>
  )
}

export default Team
