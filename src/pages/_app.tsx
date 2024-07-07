import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Global } from '@emotion/react'
import { SSRProvider } from 'react-bootstrap'
import '@sass/index.scss'
import { globalStyles } from '@components/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag?.('config', 'UA-248151888-1', {
        page_path: url,
      })
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <SSRProvider>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </SSRProvider>
  )
}

export default MyApp
