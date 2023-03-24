import Card from '@components/CardTitleDescription'
import Image, { ImageProps } from '@components/Image'
import { FC } from 'react'
import { Ratio } from 'react-bootstrap'
import team from './team.png'
import { Container, Aspect, Text } from './styled'
import Target from '@components/Target'
import Button from '@components/Button'
import TitleDescription from '@components/TitleDescription'

export interface TeamProps {
  readonly title: string
  readonly description: string
  readonly image: ImageProps['src']
  readonly reverse?: boolean
}

export const Team: FC<TeamProps> = ({ title, image, description, reverse }) => {
  return (
    <Container>
      <div className={`root${reverse ? ' reverse' : ''}`}>
        <Aspect>
          <div className="aspect">
            <Image fill quality={100} alt={title} src={image} />
          </div>
        </Aspect>
        <Text>
          <TitleDescription title={title}>{description}</TitleDescription>
        </Text>
      </div>
    </Container>
  )
}

export default Team
