import type { RequestHandler } from 'express'

interface Body {
  readonly name: string
  readonly email: string
  readonly company: string
  readonly subject: string
  readonly message: string
}

const handler: RequestHandler = async (req, res) => {
  const { renderMail, sendMail } = req.ctx
  if (req.method == 'POST') {
    const body = req.body
    const { sequelize } = req.ctx
    const { Contact } = sequelize.models
    const transaction = await sequelize.transaction()
    try {
      const contact = await Contact.create(body, { transaction })
      const [html, text] = await Promise.all([
        renderMail('./get-in-touch.html.ejs', { contact }),
        renderMail('./get-in-touch.txt.ejs', { contact }),
      ])
      await sendMail({
        to: 'corporatesecretary@inpartner.id',
        subject: 'Get in Touch',
        html,
        text,
      })
      await transaction.commit()
      res.json(contact.toJSON())
    } catch (e) {
      await transaction.rollback()
      res.status(500).end()
    }
  } else {
    res.status(404).end()
  }
}

export default handler
