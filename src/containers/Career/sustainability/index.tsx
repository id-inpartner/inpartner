import Card from '@components/CardTitleDescription'
import Image from '@components/Image'
import { FC } from 'react'
import sustainability1 from './1.png'
import sustainability2 from './2.png'
import sustainability3 from './3.png'
import Target from '@components/Target'
import { Images } from './styled'

export const Sustainability: FC = () => {
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
      <Card title="Sustainability" className="content">
        In Inpartners, it is important to pay attention to sustainability. This
        is because sustainable business can basically be the continuity of a
        company. That way, the company will have a sustainable system and be
        able to have a positive impact in the short and long term.
        <br />
        The goal is to ensure the continuity of the company&apos;s operations.
        So that there are several ways that can be taken to have a big impact.
        Such as being able to reduce unnecessary expenses, and on the one hand,
        the negative impact on the environment will also be reduced.
      </Card>
    </>
  )
}

export default Sustainability
