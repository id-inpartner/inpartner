const { Model, DataTypes } = require('sequelize')

class Sector extends Model {
  /**
   * @param {import('sequelize').Sequelize} sequelize
   */
  static associate = (sequelize) => {
    const { Project } = sequelize.models
    Sector.hasMany(Project, {
      foreignKey: 'sectorId',
      onDelete: 'cascade',
      onUpdate: 'cascade',
      as: 'projects',
    })
  }
}

/**
 * @param {import('sequelize').Sequelize} sequelize
 */
const init = (sequelize) => {
  Sector.init(
    {
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT('long'),
      },
      image: {
        type: DataTypes.STRING,
      },
      metaTitle: {
        type: DataTypes.STRING,
      },
      metaDescription: {
        type: DataTypes.TEXT,
      },
    },
    { sequelize, modelName: 'Sector' }
  )
}

module.exports = { model: Sector, init }
