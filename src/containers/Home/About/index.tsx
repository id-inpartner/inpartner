import ColumnContainer from '@components/ColumnContainer'
import Text from '@components/Text'
import { FC } from 'react'
import { ViewMore } from '../styled'
import { Title } from './styled'
import Button from '@components/Button'
import useTranslation from '../../../locales/useTranslation'

export const About: FC = () => {
  const { t } = useTranslation()

  return (
    <ColumnContainer>
      <Title>{t.home.about.title}</Title>
      <Text>{t.home.about.text}</Text>
      <ViewMore href="/about">
        <Button as="span">{t.home.about.learnMore}</Button>
      </ViewMore>
    </ColumnContainer>
  )
}

export default About
