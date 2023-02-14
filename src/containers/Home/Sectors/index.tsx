import ColumnContainer from '@components/ColumnContainer'
import { FC } from 'react'
import { Arrow, Items } from './styled'
import TitleDescription from '@components/TitleDescription'
import { ViewMore } from '../styled'
import restructuring from './restructuring.png'
import investment from './investment.png'
import financial from './financial.png'
import health from './health.png'
import environmental from './environmental.png'
import information from './information.png'
import infrastructure from './infrastructure.png'
import ev from './ev.png'
import property from './property.png'
import waste from './waste.png'
import renewable_energy from './renewable_energy.png'
import biotechnology from './biotechnology.png'
import Item from './Item'

export const Sectors: FC = () => {
  return (
    <ColumnContainer>
      <TitleDescription title="Sectors & Themes Coverage">
        Here are access that we can provide
      </TitleDescription>
      <Items
        arrows
        nextArrow={
          <Arrow>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
            </svg>
          </Arrow>
        }
        prevArrow={
          <Arrow>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
            </svg>
          </Arrow>
        }
        slidesToShow={4}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 230 * 5 + 27 * 4,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 230 * 4 + 27 * 3,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 230 * 3 + 27 * 2,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 230 * 2 + 27,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        <Item
          image={restructuring}
          label="Restructuring, Pre-IPO, IPO, and Right Issue"
        />
        <Item image={investment} label="Alternative Investment" />
        <Item image={financial} label="Financial Services" />
        <Item image={health} label="Health and Pharmaceutical" />
        <Item
          image={environmental}
          label="Environmental, Social, and Governance"
        />
        <Item image={information} label="Information Technology" />
        <Item image={infrastructure} label="Infrastructure" />
        <Item image={ev} label="Electric Vehicle" />
        <Item image={property} label="Property Investment and Development" />
        <Item image={waste} label="Wate Solution" />
        <Item image={renewable_energy} label="Renewable Energy" />
        <Item image={biotechnology} label="Biotechnology" />
      </Items>
      <ViewMore>View All</ViewMore>
    </ColumnContainer>
  )
}

export default Sectors
