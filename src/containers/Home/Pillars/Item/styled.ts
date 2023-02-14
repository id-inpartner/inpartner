import Card from '@components/Card'
import { color } from '@components/GlobalStyle'
import styled from '@emotion/styled'

export const Root = styled(Card)`
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 20px;
`

export const Img = styled.div`
  background-color: ${color.primary.dark};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
`

export const Label = styled.div`
  font-size: 16px;
  font-weight: 600;
  align-self: stretch;
  text-align: center;
  margin-bottom: 25px;
  margin-top: 20px;
`
