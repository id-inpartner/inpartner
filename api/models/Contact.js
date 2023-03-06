const { Model, DataTypes } = require('sequelize')

class Contact extends Model {
  /** @type {number} */
  id

  /** @type {string} */
  name

  /** @type {string} */
  email

  /** @type {string} */
  subject

  /** @type {string} */
  message

  /**
   * @param {import('sequelize').Sequelize} sequelize
   */
  static associate = (/* sequelize */) => {
    //
  }
}

/**
 * @param {import('sequelize').Sequelize} sequelize
 */
const init = (sequelize) => {
  Contact.init(
    {
      name: {
        type: DataTypes.CHAR,
      },
      email: {
        type: DataTypes.CHAR,
      },
      subject: {
        type: DataTypes.CHAR,
      },
      message: {
        type: DataTypes.STRING,
      },
    },
    { sequelize, modelName: 'Contact' }
  )
}

module.exports = { model: Contact, init }
