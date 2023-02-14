/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: [
      'dev.inpartner.id',
      'www.dev.inpartner.id',
      'inpartner.id',
      'www.inpartner.id',
    ],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  experimental: {
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
  },
}

module.exports = nextConfig
