import ColumnContainer from '@components/ColumnContainer'
import Image from '@components/Image'
import { FC } from 'react'
import Ratio from 'react-bootstrap/Ratio'
import { Col, Item, Items, Label, Title } from './styled'
import business from './business.png'
import capacity from './capacity.png'
import investment from './investment.png'

export const Services: FC = () => {
  return (
    <ColumnContainer>
      <Title>Our Service & Scope</Title>
      <Items>
        <Col>
          <Item>
            <Ratio aspectRatio={274 / 559}>
              <Image
                fill
                src={business}
                alt="Business and Management Consulting"
                quality={100}
                sizes="(min-width: 1200px) 580px, (min-width: 992px) 470px, (min-width: 768px) 360px, 100vw"
              />
            </Ratio>
            <Label>Business and Management Consulting</Label>
          </Item>
        </Col>
        <Col>
          <Item>
            <Ratio aspectRatio={127 / 543}>
              <Image
                fill
                src={capacity}
                alt="Capacity Building (Inpartner Academy)"
                quality={100}
                sizes="(min-width: 1200px) 580px, (min-width: 992px) 470px, (min-width: 768px) 360px, 100vw"
              />
            </Ratio>
            <Label>Capacity Building (Inpartner Academy)</Label>
          </Item>
          <Item>
            <Ratio aspectRatio={127 / 543}>
              <Image
                fill
                src={investment}
                alt="Investment"
                quality={100}
                sizes="(min-width: 1200px) 580px, (min-width: 992px) 470px, (min-width: 768px) 360px, 100vw"
              />
            </Ratio>
            <Label>Investment</Label>
          </Item>
        </Col>
      </Items>
    </ColumnContainer>
  )
}

export default Services
