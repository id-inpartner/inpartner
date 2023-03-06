const { Model, DataTypes } = require('sequelize')

class Category extends Model {
  /**
   * @param {import('sequelize').Sequelize} sequelize
   */
  static associate = (sequelize) => {
    const { Project } = sequelize.models
    Category.hasMany(Project, {
      foreignKey: 'categoryId',
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
  Category.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize, modelName: 'Category' }
  )
}

module.exports = { model: Category, init }
