import Image, { StaticImageData } from '@components/Image'
import { FC } from 'react'
import Ratio from 'react-bootstrap/Ratio'
import { Property, Root, Subtitle, Title } from './styled'

export interface ItemProps {
  readonly image: StaticImageData
  readonly title: string
  readonly category: string
  readonly sector: string
  readonly start: string
  readonly end: string
}

export const Item: FC<ItemProps> = ({
  image,
  title,
  category,
  sector,
  start,
  end,
}) => {
  return (
    <Root>
      <Ratio aspectRatio={261 / 354}>
        <Image fill alt="" src={image} quality={100} />
      </Ratio>
      <Title>{title}</Title>
      <Subtitle>
        {category} | {sector}
      </Subtitle>
      <Property className="first">
        <div className="l">Project Started</div>
        <div className="c">:</div>
        <div className="v">{start}</div>
      </Property>
      <Property className="last">
        <div className="l">Project Completed</div>
        <div className="c">:</div>
        <div className="v">{end}</div>
      </Property>
    </Root>
  )
}

export default Item
