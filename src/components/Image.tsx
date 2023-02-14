import styled from '@emotion/styled'
import I, { ImageProps, StaticImageData } from 'next/image'
import { FC } from 'react'

export type { ImageProps, StaticImageData }

export const Image: FC<ImageProps> = (props) => {
  return <Img {...props} alt={props.alt} />
}

Image.defaultProps = {
  placeholder: 'blur',
  onLoadingComplete: (img) => {
    img.style.backgroundImage = null
  },
}

const Img = styled(I)`
  transition: all 500ms;
  transition-timing-function: ease-in-out;
  object-fit: cover;
`

export default Image
