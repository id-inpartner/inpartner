import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

export interface SEOProps {
  title: string
  description: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  schemaData?: object | null
}

export const SEO: FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = 'https://inpartner.id/og-image.jpg',
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  schemaData = null,
}) => {
  const router = useRouter()
  const locale = router.locale || 'en'
  const baseUrl = 'https://inpartner.id'

  // Clean path without query parameters or locale prefix for alternate links
  const pathWithoutQuery = router.asPath.split('?')[0].split('#')[0]
  const cleanPath = pathWithoutQuery.replace(/^\/ko(\/|$)/, '/')
  const normalizedPath = cleanPath === '/' ? '' : cleanPath

  const enUrl = `${baseUrl}${normalizedPath}`
  const koUrl = `${baseUrl}/ko${normalizedPath}`
  const currentCanonical = canonicalUrl || (locale === 'ko' ? koUrl : enUrl)

  return (
    <Head>
      {/* Primary Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical Tag */}
      <link rel="canonical" href={currentCanonical} />

      {/* Bidirectional Alternate Hreflang Tags */}
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="ko" href={koUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />

      {/* Content-Language for Korean search engines (e.g., Naver) */}
      {locale === 'ko' && <meta httpEquiv="content-language" content="ko-kr" />}

      {/* Open Graph / Social Sharing */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta
        property="og:site_name"
        content={locale === 'ko' ? '인파트너' : 'Inpartner'}
      />
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {ogType === 'article' && section && (
        <meta property="article:section" content={section} />
      )}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}
    </Head>
  )
}

export default SEO
