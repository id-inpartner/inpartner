import Card from '@components/CardTitleDescription'
import Image from '@components/Image'
import { FC } from 'react'
import history1 from './1.png'
import history2 from './2.png'
import history3 from './3.png'
import Target from '@components/Target'
import { Images } from './styled'
import useTranslation from '../../../locales/useTranslation'

export const History: FC = () => {
  const { t } = useTranslation()

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
      <Card title={t.aboutPage.historyTitle} className="content">
        <p>{t.aboutPage.historyText1}</p>
        <p>{t.aboutPage.historyText2}</p>
      </Card>
    </>
  )
}

export default History
