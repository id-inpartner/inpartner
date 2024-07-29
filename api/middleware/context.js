const { Op } = require('sequelize')

/**
 * @typedef {object} Context
 * @property {import('sequelize').Sequelize} sequelize
 * @property {typeof Op} Op
 */

const createContentMiddleware = (sequelize) => (req, res, next) => {
  if (req.ctx) {
    req.ctx.Op = Op
    req.ctx.sequelize = sequelize
  } else {
    req.ctx = { sequelize, Op }
  }
  next()
}

module.exports = { createContentMiddleware }
