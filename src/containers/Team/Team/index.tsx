import Image, { ImageProps } from '@components/Image'
import { FC } from 'react'
import { Container, Aspect, Text } from './styled'
import TitleDescription, { Description } from '@components/TitleDescription'

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
          {/* <TitleDescription title={title}>{description}</TitleDescription> */}
          <Description className="description">{description}</Description>
        </Text>
      </div>
    </Container>
  )
}

export default Team
