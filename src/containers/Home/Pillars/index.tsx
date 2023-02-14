import ColumnContainer from '@components/ColumnContainer'
import { FC } from 'react'
import Item from './Item'
import { Items } from './styled'
import funding from './funding.svg'
import capacity from './capacity-building.svg'
import growth from './funding.svg'
import profitability from './funding.svg'
import TitleDescription from '@components/TitleDescription'

export const Pillars: FC = () => {
  return (
    <ColumnContainer>
      <TitleDescription title="We Have Four Pillars To Work On">
        We Have Years Of Experience Working On These Fields
      </TitleDescription>
      <Items>
        <Item icon={funding} label="Funding" />
        <Item icon={growth} label="Growth" />
        <Item icon={profitability} label="Profitability" />
        <Item icon={capacity} label="Capacity Building" />
      </Items>
    </ColumnContainer>
  )
}

export default Pillars
