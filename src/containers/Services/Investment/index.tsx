import Ratio from '@components/Ratio'
import Image from 'next/image'
import { FC } from 'react'
import { Background, Container, Content, Images } from './styled'
import investment from './investment.png'
import { breakpoints } from '@components/GlobalStyle'
import Target from '@components/Target'
import useTranslation from '../../../locales/useTranslation'

export const Investment: FC = () => {
  const { t, isKo } = useTranslation()

  return (
    <Background>
      <Container>
        <Target id="investment" className="low" />
        <Images>
          <Ratio aspect={370 / 328}>
            <Image
              fill
              src={investment}
              alt={isKo ? '투자 자문 서비스' : 'Investment Advisory Services'}
              quality={100}
              sizes={`(min-width: ${breakpoints.xl}) 333px, (min-width: ${breakpoints.lg}) 425px, (min-width: ${breakpoints.md}) 305px, (min-width: ${breakpoints.sm}) 510px, 100vw`}
            />
          </Ratio>
        </Images>
        <Content
          title={t.servicesPage.investmentTitle}
          href="/services/investment"
          hrefLabel={t.servicesPage.viewMore}
        >
          {t.servicesPage.investmentDesc}
        </Content>
      </Container>
    </Background>
  )
}

export default Investment
