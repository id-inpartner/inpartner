import Card from '@components/CardTitleDescription'
import Image from '@components/Image'
import { FC } from 'react'
import diversity1 from './1.png'
import diversity2 from './2.png'
import diversity3 from './3.png'
import Target from '@components/Target'
import { Images } from './styled'
import useTranslation from '../../../locales/useTranslation'

export const Diversity: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Target id="diversity" />
      <div className="images">
        <Images>
          <div>
            <div className="diversity-1">
              <Image
                src={diversity1}
                alt=""
                fill
                quality={100}
                sizes="(min-width: 1152px) 260px, (min-width: 1150px) 260px, (min-width: 768px) 160px, 51vw"
              />
            </div>
            <div className="diversity-2">
              <Image
                src={diversity2}
                alt=""
                fill
                quality={100}
                sizes="(min-width: 1152px) 220px, (min-width: 1150px) 222px, (min-width: 768px) 138px, 45vw"
              />
            </div>
            <div className="diversity-3">
              <Image
                src={diversity3}
                alt=""
                fill
                quality={100}
                sizes="(min-width: 1152px) 380px, (min-width: 1150px) 388px, (min-width: 768px) 235px, 75vw"
              />
            </div>
          </div>
        </Images>
      </div>
      <Card title={t.aboutPage.diversityTitle} className="content">
        <p>{t.aboutPage.diversityText1}</p>
        <p>{t.aboutPage.diversityText2}</p>
      </Card>
    </>
  )
}

export default Diversity
