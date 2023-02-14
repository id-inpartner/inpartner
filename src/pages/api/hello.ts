import type { RequestHandler } from 'express'

const handler: RequestHandler = (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}

export default handler
