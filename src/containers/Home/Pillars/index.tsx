import ColumnContainer from '@components/ColumnContainer'
import { FC } from 'react'
import Item from './Item'
import { Items } from './styled'
import funding from './funding.svg'
import capacity from './capacity-building.svg'
import growth from './funding.svg'
import profitability from './funding.svg'
import TitleDescription from '@components/TitleDescription'
import useTranslation from '../../../locales/useTranslation'

export const Pillars: FC = () => {
  const { t } = useTranslation()

  return (
    <ColumnContainer>
      <TitleDescription title={t.home.pillars.title}>
        {t.home.pillars.subtitle}
      </TitleDescription>
      <Items>
        <Item icon={funding} label={t.home.pillars.funding} />
        <Item icon={growth} label={t.home.pillars.growth} />
        <Item icon={profitability} label={t.home.pillars.profitability} />
        <Item icon={capacity} label={t.home.pillars.capacity} />
      </Items>
    </ColumnContainer>
  )
}

export default Pillars
