import styled from '@emotion/styled'

export const Images = styled.div`
  max-width: 480px;
  min-width: 100%;
  @media (min-width: 1151px) {
    min-width: 480px;
  }
  & > div {
    padding-top: ${529 / 4.8}%;
    & > .diversity-1 {
      width: ${249 / 4.8}%;
      height: ${255 / 5.29}%;
      left: 0;
      top: 0;
    }
    & > .diversity-2 {
      width: ${213 / 4.8}%;
      height: ${194 / 5.29}%;
      left: ${267 / 4.8}%;
      top: ${61 / 5.29}%;
    }
    & > .diversity-3 {
      width: ${371 / 4.8}%;
      height: ${256 / 5.29}%;
      left: ${63 / 4.8}%;
      top: ${273 / 5.29}%;
    }
  }
`
