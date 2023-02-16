const { Model, DataTypes } = require('sequelize')

/**
 * @class
 */
class Project extends Model {
  /** @type {number} */
  id

  /** @type {string} */
  title

  /** @type {string} */
  image

  /** @type {Date} */
  startAt

  /** @type {Date} */
  endAt

  /** @type {import('./Category').Category[]} */
  category

  /** @type {import('./Sector').Sector[]} */
  sector

  /**
   * @param {import('sequelize').Sequelize} sequelize
   */
  static associate = (sequelize) => {
    const { Category, Sector } = sequelize.models
    Project.belongsTo(Category, {
      foreignKey: 'categoryId',
      onDelete: 'cascade',
      onUpdate: 'cascade',
      as: 'category',
    })
    Project.belongsTo(Sector, {
      foreignKey: 'sectorId',
      onDelete: 'cascade',
      onUpdate: 'cascade',
      as: 'sector',
    })
  }
}

/**
 * @param {import('sequelize').Sequelize} sequelize
 */
const init = (sequelize) => {
  Project.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      startAt: {
        type: DataTypes.DATE,
      },
      endAt: {
        type: DataTypes.DATE,
      },
    },
    { sequelize, modelName: 'Project' }
  )
}

module.exports = { model: Project, init }
