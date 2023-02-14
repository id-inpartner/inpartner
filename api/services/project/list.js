/** @type {import('express').RequestHandler} */
const handler = async (req, res, next) => {
  /** @type {import('../../middleware/context').Context} */
  const { sequelize, Op } = req.ctx
  const { Sector } = sequelize.models

  const { page = 1, perPage = 20, sectorId, categoryId, date } = req.query

  try {
    const { rows, count } = await Sector.findAndCountAll({
      limit: perPage,
      offset: ((page || 1) - 1) * perPage,
      order: [['id', 'ASC']],
      where: date
        ? {
            startAt: { [Op.lte]: date },
            endAt: { [Op.gte]: date },
          }
        : undefined,
      include: [
        {
          association: 'category',
          where: categoryId ? { id: categoryId } : undefined,
          attributes: ['id', 'title', 'name'],
          required: !!categoryId,
        },
        {
          association: 'sector',
          where: sectorId ? { id: sectorId } : undefined,
          attributes: ['id', 'title'],
          required: !!sectorId,
        },
      ],
    })
    res.json({ rows, count, page, perPage })
  } catch (e) {
    next(e)
  }
}
