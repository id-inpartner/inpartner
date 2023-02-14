import styled from '@emotion/styled'

export const Images = styled.div`
  max-width: 413px;
  min-width: 100%;
  @media (min-width: 1151px) {
    min-width: 413px;
  }
  & > div {
    padding-top: ${484 / 4.13}%;
    & > .history-1,
    & > .history-3 {
      right: 0;
      width: ${198 / 4.13}%;
      height: ${233 / 4.84}%;
    }
    & > .history-1 {
      top: 0;
      background-color: aqua;
    }
    & > .history-2 {
      width: ${197 / 4.13}%;
      height: ${315 / 4.84}%;
      right: ${(233 + 18) / 4.13};
      top: ${(208 - 125) / 4.84}%;
      background-color: black;
    }
    & > .history-3 {
      top: ${(233 + 18) / 4.84}%;
      bottom: 0;
      background-color: bisque;
    }
  }
`
