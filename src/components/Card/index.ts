import styled from '@emotion/styled'
import Link from 'next/link'

export const Card = styled.div`
  background-color: white;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.05);
`

export const CardLink = styled(Link)`
  background-color: white;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.05);
`

export default Card
