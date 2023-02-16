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
        title="Busines and Management Consulting"
        description={
          <>
            <div>
              We bring a fresh view with the aim of improving the effectiveness
              of business strategy, Organizational performance and operational
              processes. We align business strategy and goals with people,
              processes, technology and data, have the ability to optimize and
              improve the way you operate, and as your strategic partner,
              we&apos;ll be there for you every step of the way.
            </div>
            <div>
              Our business experts research on potential growth areas, study
              segments, sub segment&apos;s demands and expectations and draw
              strategy to reach out to the new clientele, spot on current trends
              and anticipate changes in advance. We also recommends alternative
              strategies to meet the goals
            </div>
          </>
        }
        href="/"
        hrefLabel="View More"
      />
      <Investment />
      <Item
        id="capacity-building"
        smallImage={capacity1}
        largImage={capacity2}
        title="Capacity Building (Inpartner Academy)"
        description="Inpartner capacity building involve various activities such as training, education, mentoring, coaching, and providing resources and tools to support development.  The goal is to increase the efficiency, production, effectiveness to stay ahead in competitive market, Making positive impacts on the clientele we serves, We helps making business plans and effectively implements, swiftly taking new challenges, develop business relations, creating partnerships"
        href="/"
        hrefLabel="View More"
      />
    </>
  )
}

export default Index
