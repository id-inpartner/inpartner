import type { StaticImageData } from 'next/image'
import banner from './banner.png'

export interface Datum {
  readonly id: number
  readonly slug: string
  readonly title: string
  readonly image: StaticImageData
}

const data: ReadonlyArray<Datum> = [
  {
    id: 1,
    slug: 'waste-solution',
    title: 'Restructuring, Pre-IPO, IPO, and Right Issue',
    image: banner,
  },
  {
    id: 2,
    slug: 'waste-solution',
    title: 'Alternative Investment',
    image: banner,
  },
  { id: 3, slug: 'waste-solution', title: 'Financial Services', image: banner },
  {
    id: 4,
    slug: 'waste-solution',
    title: 'Health and Pharmaceutical',
    image: banner,
  },
  { id: 5, slug: 'waste-solution', title: 'Biotechnology', image: banner },
  { id: 6, slug: 'waste-solution', title: 'Renewable Energy', image: banner },
  { id: 7, slug: 'waste-solution', title: 'Waste Solution', image: banner },
  {
    id: 8,
    slug: 'waste-solution',
    title: 'Property Investment and Development',
    image: banner,
  },
  { id: 9, slug: 'waste-solution', title: 'Electric Vehicle', image: banner },
  { id: 10, slug: 'waste-solution', title: 'Infrastructure', image: banner },
  {
    id: 11,
    slug: 'waste-solution',
    title: 'Information Technology',
    image: banner,
  },
  {
    id: 12,
    slug: 'waste-solution',
    title: 'Environmental, Social, and Governance',
    image: banner,
  },
  {
    id: 13,
    slug: 'waste-solution',
    title: 'Food and Beverange',
    image: banner,
  },
  { id: 14, slug: 'waste-solution', title: 'Industrial Gas', image: banner },
]

export default data
