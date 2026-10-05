import Banner from '@components/Banner'
import { FC } from 'react'
import banner from './banner.png'
import { Item } from './Item'
import business1 from './business1.png'
import business2 from './business2.png'
import capacity1 from './capacity1.png'
import capacity2 from './capacity2.png'
import Investment from './Investment'
import useTranslation from '../../locales/useTranslation'

export const Index: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Banner title={t.servicesPage.bannerTitle} backgroundSrc={banner} />
      <Item
        id="business-and-management"
        smallImage={business1}
        largImage={business2}
        title={t.servicesPage.businessTitle}
        description={
          <>
            <div>{t.servicesPage.businessDesc1}</div>
            <div>{t.servicesPage.businessDesc2}</div>
          </>
        }
        href="/services/business-management-consulting"
        hrefLabel={t.servicesPage.viewMore}
      />
      <Investment />
      <Item
        id="capacity-building"
        smallImage={capacity1}
        largImage={capacity2}
        title={t.servicesPage.capacityTitle}
        description={t.servicesPage.capacityDesc}
        href="/services/capacity-building"
        hrefLabel={t.servicesPage.viewMore}
      />
    </>
  )
}

export default Index
