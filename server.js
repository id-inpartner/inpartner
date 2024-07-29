const express = require('express')
const next = require('next')
const { createDb } = require('./api/db')
const { createContentMiddleware } = require('./api/middleware/context')
const { createMailMiddleware } = require('./api/middleware/mail')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

;(async () => {
  await app.prepare()
  const db = await createDb()
  const server = express()
  server.use(createContentMiddleware(db))
  server.use(createMailMiddleware())
  server.get('/Team.html', (_, res) => {
    return res.redirect(301, '/about#team')
  })
  server.get('/About.html', (_, res) => {
    return res.redirect(301, '/about')
  })
  server.get('/Services.html', (_, res) => {
    return res.redirect(301, '/services')
  })
  server.all('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(port, (err) => {
    if (err) throw err
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`)
  })
})()
