/** @type {import('express').RequestHandler} */
const handler = async (req, res, next) => {
  /** @type {import('../../middleware/context').Context} */
  const { sequelize } = req.ctx
  const { Sector } = sequelize.models

  const { page = 1, perPage = 20 } = req.query

  try {
    const { rows, count } = await Sector.findAndCountAll({
      limit: perPage,
      offset: ((page || 1) - 1) * perPage,
      order: [['id', 'ASC']],
    })
    res.json({ rows, count, page, perPage })
  } catch (e) {
    next(e)
  }
}
