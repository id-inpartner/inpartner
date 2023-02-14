import Card from '@components/CardTitleDescription'
import Image from '@components/Image'
import { FC } from 'react'
import { Ratio } from 'react-bootstrap'
import team from './team.png'
import { Container, Root } from './styled'
import Target from '@components/Target'
import Button from '@components/Button'

export const Team: FC = () => {
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
        <Card title="Team" className="team">
          In Inpartners, it is important to pay attention to sustainability.
          This is because sustainable business can basically be the continuity
          of a company. That way, the company will have a sustainable system and
          be able to have a positive impact in the short and long term.
        </Card>
      </Root>
      <Button>Meet our Team</Button>
    </Container>
  )
}

export default Team
