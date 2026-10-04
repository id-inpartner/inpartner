import Card from '@components/CardTitleDescription'
import Image from '@components/Image'
import { FC } from 'react'
import sustainability1 from './1.png'
import sustainability2 from './2.png'
import sustainability3 from './3.png'
import Target from '@components/Target'
import { Images } from './styled'
import useTranslation from '../../../locales/useTranslation'

export const Sustainability: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Target id="sustainability" />
      <div className="images">
        <Images>
          <div>
            <div className="sustainability-1">
              <Image
                src={sustainability1}
                alt=""
                fill
                quality={100}
                sizes="(min-width: 1152px) 260px, (min-width: 1150px) 260px, (min-width: 768px) 160px, 51vw"
              />
            </div>
            <div className="sustainability-2">
              <Image
                src={sustainability2}
                alt=""
                fill
                quality={100}
                sizes="(min-width: 1152px) 220px, (min-width: 1150px) 222px, (min-width: 768px) 138px, 45vw"
              />
            </div>
            <div className="sustainability-3">
              <Image
                src={sustainability3}
                alt=""
                fill
                quality={100}
                sizes="(min-width: 1152px) 380px, (min-width: 1150px) 388px, (min-width: 768px) 235px, 75vw"
              />
            </div>
          </div>
        </Images>
      </div>
      <Card title={t.aboutPage.sustainabilityTitle} className="content">
        <p>{t.aboutPage.sustainabilityText1}</p>
        <p>{t.aboutPage.sustainabilityText2}</p>
      </Card>
    </>
  )
}

export default Sustainability
