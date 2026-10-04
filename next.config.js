/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  modularizeImports: {
    'react-bootstrap': {
      transform: 'react-bootstrap/{{member}}',
    },
    'date-fns': {
      transform: 'date-fns/{{member}}',
    },
    '@fortawesome/free-solid-svg-icons': {
      transform: '@fortawesome/free-solid-svg-icons/{{member}}',
      skipDefaultConversion: true,
    },
  },
  images: {
    domains: [
      'dev.inpartner.id',
      'www.dev.inpartner.id',
      'inpartner.id',
      'www.inpartner.id',
      'blog.inpartner.id',
    ],
  },
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: '/services/business-and-management',
        destination: '/services/business-management-consulting',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/project',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
