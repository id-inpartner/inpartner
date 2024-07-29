import axios, { AxiosError } from 'axios'
import { GetServerSideProps } from 'next'

const Page = () => {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const response = await axios.get(
      'https://blog.inpartner.id/post-sitemap.xml',
      {
        headers: { Accept: 'text/xml' },
        transformResponse: (res) => res,
      }
    )
    const raw = response.data as string
    const sitemap = raw
      .replaceAll(
        '<loc>https://blog.inpartner.id',
        '<loc>https://inpartner.id/blog'
      )
      .replace(
        '<?xml-stylesheet type="text/xsl" href="//blog.inpartner.id/wp-content/plugins/wordpress-seo/css/main-sitemap.xsl"?>',
        ''
      )
      .replaceAll(/<!--.*-->/gs, '')
    res.setHeader('Content-Type', 'text/xml')
    res.write(sitemap)
    res.end()
  } catch (e) {
    res.setHeader('Content-Type', 'text/xml')
    res.write(
      `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
                      http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd"
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>
`.trim()
    )
    res.end()
  }

  return { props: {} }
}

export default Page
