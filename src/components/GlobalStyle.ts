import { css } from '@emotion/react'
import { sans } from '@fonts/index'

export const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${sans.style.fontFamily};
    scroll-behavior: smooth;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  /* @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  } */
`

interface Breakpoints {
  readonly sm: '576px'
  readonly md: '768px'
  readonly lg: '992px'
  readonly xl: '1200px'
  readonly xxl: '1400px'
}

export const breakpoints: Breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
}

export const color = {
  primary: {
    normal: 'var(--bs-primary)',
    dark: 'var(--primary-dark)',
  },
  background: {
    gray: 'var(--background-gray)',
  },
}
