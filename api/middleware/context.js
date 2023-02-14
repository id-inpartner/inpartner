const { Op } = require('sequelize')

/**
 * @typedef {object} Context
 * @property {import('sequelize').Sequelize} sequelize
 * @property {typeof Op} Op
 */

const createContentMiddleware = (sequelize) => (req, res, next) => {
  req.ctx = { sequelize, Op }
  next()
}

module.exports = { createContentMiddleware }
