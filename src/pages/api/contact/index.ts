import type { RequestHandler } from 'express'

interface Body {
  readonly name: string
  readonly email: string
  readonly subject: string
  readonly message: string
}

const handler: RequestHandler = async (req, res) => {
  if (req.method == 'POST') {
    const body = req.body
    const { sequelize } = req.ctx
    const { Contact } = sequelize.models
    try {
      const contact = await Contact.create(body)
      res.json(contact.toJSON())
    } catch (e) {
      res.status(500).end()
    }
  } else {
    res.status(404).end()
  }
}

export default handler
