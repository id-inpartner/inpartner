import ColumnContainer from '@components/ColumnContainer'
import Text from '@components/Text'
import { FC } from 'react'
import { ViewMore } from '../styled'
import { Title } from './styled'

export const About: FC = () => {
  return (
    <ColumnContainer>
      <Title>About Us</Title>
      <Text>
        INPARTNER (PT Inpartner Optima Integra) is a transformation of
        management consulting services which established in 2009. We started as
        consultant to help increase accessibility to market, financing,
        technology, productivity and provide capacity building of the MSME
        sector in East Jave. Then we change for a better through continuous
        improvement. Now, we come up as a consultation service in business and
        management to middle and large corporation.
      </Text>
      <ViewMore href="/about">Learn More</ViewMore>
    </ColumnContainer>
  )
}

export default About
