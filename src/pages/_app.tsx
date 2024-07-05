import { Global } from '@emotion/react'
import '@sass/index.scss'
import { globalStyles } from '@components/GlobalStyle'
import { SSRProvider } from 'react-bootstrap'

const MyApp = ({ Component, pageProps }) => {
  return (
    <SSRProvider>
      <Component {...pageProps} />
      <Global styles={globalStyles} />
    </SSRProvider>
  )
}

export default MyApp
