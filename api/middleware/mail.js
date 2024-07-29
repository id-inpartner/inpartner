const { createTransport } = require('nodemailer')
const ejs = require('ejs')
const path = require('path')

// MAIL_HOST=...
// MAIL_PORT=...
// MAIL_USERNAME=...
// MAIL_PASSWORD=...
// MAIL_ENCRYPTION=...
// MAIL_FROM_ADDRESS=...
// MAIL_FROM_NAME=...

const createMailMiddleware = () => {
  const transport = createTransport({
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT || '587', 10),
    secure: process.env.MAIL_ENCRYPTION === 'tls',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
    from: {
      name: process.env.MAIL_FROM_NAME,
      address: process.env.MAIL_FROM_ADDRESS,
    },
  })
  const renderMail = (name, data) => {
    const file = path.resolve(__dirname, './mail', name)
    return ejs.renderFile(file, data, { async: true })
  }
  const sendMail = (options) => {
    return new Promise((resolve, reject) => {
      transport.sendMail(options, (err, info) => {
        if (err) {
          reject(err)
        } else {
          resolve(info)
        }
      })
    })
  }
  return (req, res, next) => {
    if (req.ctx) {
      req.ctx.mail = transport
      req.ctx.sendMail = sendMail
      req.ctx.renderMail = renderMail
    } else {
      req.ctx = { mail, renderMail, sendMail }
    }
    next()
  }
}

module.exports = { createMailMiddleware }
