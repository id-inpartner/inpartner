import Card from '@components/Card'
import styled from '@emotion/styled'
import Image, { ImageProps } from 'next/image'
import { FC } from 'react'

export interface ItemProps {
  readonly icon: ImageProps['src']
  readonly title: string
  readonly description: string
  readonly titleBackgroundColor: string
}

const IconCircle = styled.div`
  padding: 16px;
  border-radius: 50%;
  border-width: 8px;
  border-style: solid;
  border-color: ${({
    titleBackgroundColor,
  }: Pick<ItemProps, 'titleBackgroundColor'>) => titleBackgroundColor};
  align-self: center;
  background-color: white;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: white;
  background-color: ${({
    titleBackgroundColor,
  }: Pick<ItemProps, 'titleBackgroundColor'>) => titleBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 88px;
  border-radius: 8px;
  text-align: center;
`

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-top: 24px solid
    ${({ titleBackgroundColor }: Pick<ItemProps, 'titleBackgroundColor'>) =>
      titleBackgroundColor};
  align-self: center;
`

const C = styled(Card)`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  flex: 1;
`

const ItemContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 24px;
  min-width: 250px;
  z-index: 1;
`

const Vertical = styled.div`
  background-color: black;
  width: 2px;
  min-height: 32px;
  align-self: center;
`

const Description = styled.div`
  font-size: 20px;
  text-align: center;
  margin: 16px;
`

const Item: FC<ItemProps> = ({
  icon,
  title,
  description,
  titleBackgroundColor,
}) => {
  return (
    <ItemContainer>
      <IconCircle titleBackgroundColor={titleBackgroundColor}>
        <Image src={icon} width={74} height={74} quality={100} alt={title} />
      </IconCircle>
      <Vertical />
      <C>
        <Title titleBackgroundColor={titleBackgroundColor}>{title}</Title>
        <Triangle titleBackgroundColor={titleBackgroundColor} />
        <Description>{description}</Description>
      </C>
    </ItemContainer>
  )
}

export default Item
