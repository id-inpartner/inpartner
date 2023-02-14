import Card from '@components/CardTitleDescription'
import Image from '@components/Image'
import { FC } from 'react'
import history1 from './1.png'
import history2 from './2.png'
import history3 from './3.png'
import Target from '@components/Target'
import { Images } from './styled'

export const History: FC = () => {
  return (
    <>
      <Target id="history" />
      <div className="images">
        <Images>
          <div>
            <div className="history-1">
              <Image
                src={history1}
                alt=""
                fill
                quality={100}
                sizes="(min-width: 1152px) 220px, (min-width: 1150px) 250px, (min-width: 768px) 150px, 50vw"
              />
            </div>
            <div className="history-2">
              <Image
                src={history2}
                alt=""
                fill
                quality={100}
                sizes="(min-width: 1152px) 220px, (min-width: 1150px) 250px, (min-width: 768px) 150px, 50vw"
              />
            </div>
            <div className="history-3">
              <Image
                src={history3}
                alt=""
                fill
                quality={100}
                sizes="(min-width: 1152px) 220px, (min-width: 1150px) 250px, (min-width: 768px) 150px, 50vw"
              />
            </div>
          </div>
        </Images>
      </div>
      <Card title="History" className="content">
        INPARTNER (PT Inpartrner Optima Integra) is a transformation of
        management consulting services established in 2009. We started as a
        consultant to help increase accessibility to market, financing,
        technology, and productivity and provide capacity building for the MSME
        sector in East Java. Our purpose is also to give a change for a better
        through continuous improvement. And now, we come up as consultant
        services in business and management to the middle and large
        corporations.
      </Card>
    </>
  )
}

export default History
