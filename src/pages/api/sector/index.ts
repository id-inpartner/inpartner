import type { RequestHandler } from 'express'

const handler: RequestHandler = async (req, res) => {
  if (req.method == 'GET') {
    const { sequelize } = req.ctx
    const { Sector } = sequelize.models
    try {
      const sectors = await Sector.findAll()
      res.json(sectors.map((it) => it.toJSON()))
    } catch (e) {
      res.status(500).end()
    }
  } else {
    res.status(404).end()
  }
}

export default handler
