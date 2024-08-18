import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Global } from '@emotion/react'
import { SSRProvider } from 'react-bootstrap'
import '@sass/index.scss'
import { globalStyles } from '@components/GlobalStyle'
import { CookiesProvider } from 'react-cookie'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Google Analytics (UA) page view tracking
      if (typeof window.gtag === 'function') {
        window.gtag('config', 'UA-248151888-1', {
          page_path: url,
        })
      }
      // Google Tag Manager (GTM) page view tracking
      if (typeof window.gtag === 'function') {
        window.gtag('config', 'G-70DY47TGF7', {
          page_path: url,
        })
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <SSRProvider>
      <CookiesProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>INPARTNER CONSULTANT</title>
        </Head>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </CookiesProvider>
    </SSRProvider>
  )
}

export default MyApp
