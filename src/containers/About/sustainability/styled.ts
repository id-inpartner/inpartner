import styled from '@emotion/styled'

export const Images = styled.div`
  max-width: 506px;
  min-width: 100%;
  @media (min-width: 1151px) {
    min-width: 506px;
  }
  & > div {
    padding-top: ${489 / 5.06}%;
    & > .sustainability-1 {
      width: ${262 / 5.06}%;
      height: ${235 / 4.89}%;
      right: ${(226 + 18) / 5.06}%;
      top: 0;
      background-color: aqua;
    }
    & > .sustainability-2 {
      width: ${226 / 5.06}%;
      height: ${180 / 4.89}%;
      right: 0;
      top: ${(199 - 144) / 4.89}%;
      background-color: black;
    }
    & > .sustainability-3 {
      width: ${393 / 5.06}%;
      height: ${236 / 4.89}%;
      right: ${(209 - 161) / 5.06}%;
      top: ${(235 + 18) / 4.89}%;
      background-color: bisque;
    }
  }
`
