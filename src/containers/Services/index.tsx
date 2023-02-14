import Banner from '@components/Banner'
import { FC } from 'react'
import banner from './banner.png'
import { Item } from './Item'
import business1 from './business1.png'
import business2 from './business2.png'
import capacity1 from './capacity1.png'
import capacity2 from './capacity2.png'
import Investment from './Investment'

export const Index: FC = () => {
  return (
    <>
      <Banner title="Service & Scope" backgroundSrc={banner} />
      <Item
        id="business-and-management"
        smallImage={business1}
        largImage={business2}
        title="Business and Management Consulting"
        description="With 30 years of experiences, we have in-depth knowledge in project planning, management, construction, maintenance and operation especially in oil & gas Industry. We are experienced in the development of Oil / LPG Terminal, Spherical (LPG) storage tanks, Oil / liquid storage tanks."
        href="/"
        hrefLabel="View More"
      />
      <Investment />
      <Item
        id="capacity-building"
        smallImage={capacity1}
        largImage={capacity2}
        title="Capacity Building (Inpartner Academy)"
        description="With 30 years of experiences, we have in-depth knowledge in project planning, management, construction, maintenance and operation especially in oil & gas Industry. We are experienced in the development of Oil / LPG Terminal, Spherical (LPG) storage tanks, Oil / liquid storage tanks."
        href="/"
        hrefLabel="View More"
      />
    </>
  )
}

export default Index
