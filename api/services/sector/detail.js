const regex = /^[0-9]/

/** @type {import('express').RequestHandler} */
const handler = async (req, res, next) => {
  /** @type {import('../../middleware/context').Context} */
  const { sequelize } = req.ctx
  const { Sector } = sequelize.models
  const { slug } = req.params
  try {
    const id = regex.test(slug) ? parseInt(slug, 10) : false
    const data = await Sector.findOne({
      where: id ? { id } : { slug },
      include: [
        {
          association: 'projects',
          include: [
            { association: 'sector', attributes: ['id', 'title'] },
            { association: 'category', attributes: ['id', 'title'] },
          ],
        },
      ],
    })
    if (data) {
      res.json(data)
    } else {
      res.status(404).end()
    }
  } catch (e) {
    next(e)
  }
}
