import ColumnContainer from '@components/ColumnContainer'
import Image from '@components/Image'
import { FC } from 'react'
import Ratio from 'react-bootstrap/Ratio'
import { Col, Item, Items, Label, Title } from './styled'
import business from './business.png'
import capacity from './capacity.png'
import investment from './investment.png'
import useTranslation from '../../../locales/useTranslation'

export const Services: FC = () => {
  const { t } = useTranslation()

  return (
    <ColumnContainer>
      <Title>{t.home.services.title}</Title>
      <Items>
        <Col>
          <Item
            href={{ pathname: '/services', hash: 'business-and-management' }}
          >
            <Ratio aspectRatio={274 / 559}>
              <Image
                fill
                src={business}
                alt={t.home.services.business}
                quality={100}
                sizes="(min-width: 1200px) 580px, (min-width: 992px) 470px, (min-width: 768px) 360px, 100vw"
              />
            </Ratio>
            <Label>{t.home.services.business}</Label>
          </Item>
        </Col>
        <Col>
          <Item href={{ pathname: '/services', hash: 'capacity-building' }}>
            <Ratio aspectRatio={127 / 543}>
              <Image
                fill
                src={capacity}
                alt={t.home.services.capacity}
                quality={100}
                sizes="(min-width: 1200px) 580px, (min-width: 992px) 470px, (min-width: 768px) 360px, 100vw"
              />
            </Ratio>
            <Label>{t.home.services.capacity}</Label>
          </Item>
          <Item href={{ pathname: '/services', hash: 'investment' }}>
            <Ratio aspectRatio={127 / 543}>
              <Image
                fill
                src={investment}
                alt={t.home.services.investment}
                quality={100}
                sizes="(min-width: 1200px) 580px, (min-width: 992px) 470px, (min-width: 768px) 360px, 100vw"
              />
            </Ratio>
            <Label>{t.home.services.investment}</Label>
          </Item>
        </Col>
      </Items>
    </ColumnContainer>
  )
}

export default Services
