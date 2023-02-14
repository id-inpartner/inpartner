import Ratio from '@components/Ratio'
import Image from 'next/image'
import { FC } from 'react'
import { Background, Container, Content, Images } from './styled'
import investment from './investment.png'
import { breakpoints } from '@components/GlobalStyle'
import Target from '@components/Target'

export const Investment: FC = () => {
  return (
    <Background>
      <Container>
        <Target id="investment" className="low" />
        <Images>
          <Ratio aspect={370 / 328}>
            <Image
              fill
              src={investment}
              alt=""
              quality={100}
              sizes={`(min-width: ${breakpoints.xl}) 333px, (min-width: ${breakpoints.lg}) 425px, (min-width: ${breakpoints.md}) 305px, (min-width: ${breakpoints.sm}) 510px, 100vw`}
            />
          </Ratio>
        </Images>
        <Content title="Investment" href="/" hrefLabel="View More">
          With 30 years of experiences, we have in-depth knowledge in project
          planning, management, construction, maintenance and operation
          especially in oil & gas Industry. We are experienced in the
          development of Oil / LPG Terminal, Spherical (LPG) storage tanks, Oil
          / liquid storage tanks.
        </Content>
      </Container>
    </Background>
  )
}

export default Investment
