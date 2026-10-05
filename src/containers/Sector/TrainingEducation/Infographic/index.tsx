import styled from '@emotion/styled'
import Item from './Item'
import trainer from './trainer.png'
import time from './time.png'
import career from './career.png'
import book from './book.png'
import { breakpoints } from '@components/GlobalStyle'
import useTranslation from '../../../../locales/useTranslation'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-left: -12px;
  margin-right: -12px;
  margin-bottom: 28px;
  align-items: stretch;
  position: relative;
`

const Title = styled.h2`
  text-align: center;
  width: 100%;
  font-weight: 600;
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
  @media (min-width: ${breakpoints.md}) {
    font-size: 28px;
    margin-top: 64px;
    margin-bottom: 32px;
  }
`

const Dots = styled.div`
  display: none;
  @media (min-width: ${breakpoints.lg}) {
    position: absolute;
    display: block;
    border-top: 2px dotted black;
    left: 160px;
    right: 160px;
    top: 86px;
    z-index: 0;
  }
`

const Infographic = () => {
  const { t } = useTranslation()

  return (
    <>
      <Title>{t.sectorTraining.whyChooseTitle}</Title>
      <Container>
        <Dots />
        <Item
          icon={trainer}
          titleBackgroundColor="#1976D2"
          title={t.sectorTraining.expertInstructor}
          description={t.sectorTraining.expertDesc}
        />
        <Item
          icon={time}
          titleBackgroundColor="#1562AF"
          title={t.sectorTraining.flexibleLearning}
          description={t.sectorTraining.flexibleDesc}
        />
        <Item
          icon={career}
          titleBackgroundColor="#1976D2"
          title={t.sectorTraining.careerSupport}
          description={t.sectorTraining.careerDesc}
        />
        <Item
          icon={book}
          titleBackgroundColor="#0C3B69"
          title={t.sectorTraining.cuttingEdge}
          description={t.sectorTraining.cuttingEdgeDesc}
        />
      </Container>
    </>
  )
}

export default Infographic
