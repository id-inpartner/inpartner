import { FC, useRef } from 'react'
import { Header, Items, ItemsWrapper, Title } from './styled'
import Item from './Item'
import Button from '@components/Button'
import type { Category, Post } from '../types'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export interface CategoriesProps {
  readonly data: ReadonlyArray<{
    readonly category: Category
    readonly posts: ReadonlyArray<Post>
  }>
}

const Cat: FC<{
  readonly category: Category
  readonly posts: ReadonlyArray<Post>
  readonly index: number
}> = ({ category, posts, index }) => {
  const slider = useRef<Slider>()
  return (
    <>
      <Header className={`index-${index}`}>
        <div className="underline" />
        <Title href={`/blog/category/${category.slug}`} passHref>
          <Button>{category.name}</Button>
        </Title>
        <Button onClick={() => slider.current.slickPrev()}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </Button>
        <Button onClick={() => slider.current.slickNext()}>
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
      </Header>
      <ItemsWrapper>
        <Items
          ref={slider}
          infinite={false}
          slidesToShow={3}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 384 * 3 + 48 * 3,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 384 * 2 + 48 * 2,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 384 * 1 + 48,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {posts.map((post, index) => (
            <Item key={index} data={post} />
          ))}
        </Items>
      </ItemsWrapper>
    </>
  )
}

export const Categories: FC<CategoriesProps> = ({ data }) => {
  return (
    <>
      {data.map(({ category, posts }, index) => {
        return (
          <Cat
            key={category.id}
            category={category}
            posts={posts}
            index={index}
          />
        )
      })}
    </>
  )
}

export default Categories
