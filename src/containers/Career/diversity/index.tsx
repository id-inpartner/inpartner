import Card from '@components/CardTitleDescription'
import Image from '@components/Image'
import { FC } from 'react'
import diversity1 from './1.png'
import diversity2 from './2.png'
import diversity3 from './3.png'
import Target from '@components/Target'
import { Images } from './styled'

export const Diversity: FC = () => {
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
      <Card title="Diversity" className="content">
        We will always be committed to advancing diversity in the company. At
        INPARTNER, of course, we have different backgrounds. Starting from
        ethnicity, culture, education level, and way of thinking. However, this
        diversity can unite and raise a sense of cooperation to help our clients
        improve performance in various sectors.
        <br />
        With this diversity, we aim to be able to develop and retain people with
        extraordinary backgrounds. Diversity is not a barrier to continuing to
        develop our insights, especially in partnering and serving clients to
        make a real change.
      </Card>
    </>
  )
}

export default Diversity
