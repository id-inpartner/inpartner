import Banner from '@components/Banner'
import { Container } from 'react-bootstrap'
import banner from './banner.png'
import { Items } from './styled'
import Item, { Dummy } from './Item'
import { FC } from 'react'
import useTranslation from '../../locales/useTranslation'

export interface Sector {
  readonly id: number
  readonly slug: string
  readonly name: string
  readonly title: string
  readonly description: string
  readonly image: string
}

export interface IndexProps {
  readonly data: ReadonlyArray<Sector>
}

const Index: FC<IndexProps> = ({ data }) => {
  const { t } = useTranslation()

  return (
    <>
      <Banner
        title={t.sectorsPage.bannerTitle}
        description={t.sectorsPage.bannerDesc}
        backgroundSrc={banner}
      />
      <Container>
        <Items>
          {data.map((it) => (
            <Item key={it.id} {...it} />
          ))}
          <Dummy aria-hidden />
        </Items>
      </Container>
    </>
  )
}

export default Index
