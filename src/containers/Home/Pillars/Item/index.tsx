import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import { Img, Label, Root } from './styled'

export interface ItemProps {
  readonly icon: StaticImageData
  readonly label: string
}

export const Item: FC<ItemProps> = ({ icon, label }) => {
  return (
    <Root>
      <Img>
        <Image width={57} height={57} src={icon} alt="" />
      </Img>
      <Label>{label}</Label>
    </Root>
  )
}

export default Item
