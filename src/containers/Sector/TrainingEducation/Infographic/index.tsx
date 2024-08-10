import styled from '@emotion/styled'
import Item from './Item'
import trainer from './trainer.png'
import time from './time.png'
import career from './career.png'
import book from './book.png'
import { breakpoints } from '@components/GlobalStyle'

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
  return (
    <>
      <Title>Why Choose Inpartner?</Title>
      <Container>
        <Dots />
        <Item
          icon={trainer}
          titleBackgroundColor="#1976D2"
          title="Expert Instructor"
          description="Learn from industry experts with extensive experience and knowledge."
        />
        <Item
          icon={time}
          titleBackgroundColor="#1562AF"
          title="Flexible Learning"
          description="Access our courses online or in-person, with flexible scheduling to fit your busy lifestyle."
        />
        <Item
          icon={career}
          titleBackgroundColor="#1976D2"
          title="Career Support"
          description="Benefit from our career support services, including resume building, interview preparation, and job placement assistance."
        />
        <Item
          icon={book}
          titleBackgroundColor="#0C3B69"
          title="Cutting-Edge Curriculum"
          description="Stay ahead with our up-to-date curriculum, incorporating the latest trends and technologies."
        />
      </Container>
    </>
  )
}

export default Infographic
