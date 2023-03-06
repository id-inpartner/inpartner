import { GetServerSideProps } from 'next'
import { format } from 'date-fns'

const Page = () => {
  // getServerSideProps will do the heavy lifting
}

interface SectorEntity {
  readonly id: number
  readonly slug: string
  readonly updatedAt: Date
  readonly image: string
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { sequelize } = req.ctx
  const { Sector } = sequelize.models
  try {
    const data =
      (await Sector.findAll()) as unknown as ReadonlyArray<SectorEntity>
    console.log(
      data
        .map((it) => {
          const t = `
  <url>
    <loc>https://inpartner.id/sector/${it.slug}/</loc>
    <lastmod>${it.updatedAt.toISOString()}</lastmod>
    <image:image>
      <image:loc>https://inpartner.id/${it.image}</image:loc>
    </image:image>
  </url>
  `
          console.log(t)
          return t
        })
        .join('\n')
    )
    res.setHeader('Content-Type', 'text/xml')
    res.write(
      `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
                      http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd"
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${data
    .map((it) =>
      `
<url>
  <loc>https://inpartner.id/sector/${it.slug}/</loc>
  <lastmod>${it.updatedAt.toISOString()}</lastmod>
  <image:image>
    <image:loc>https://inpartner.id/${it.image}</image:loc>
  </image:image>
</url>
`.trim()
    )
    .join('\n')}
</urlset>
`.trim()
    )
    res.end()
  } catch (e) {
    console.log(e)
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
