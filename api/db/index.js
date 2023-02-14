const fs = require('fs')
const path = require('path')
const { Sequelize } = require('sequelize')
const { Umzug, SequelizeStorage } = require('umzug')

/**
 * @param {import('sequelize').Sequelize} sequelize
 */
const init = (sequelize) => {
  const ext = /\.js$/
  const dirname = path.resolve(__dirname, '../models')
  fs.readdirSync(dirname).forEach((file) => {
    if (file && file.indexOf('.') !== 0 && ext.test(file)) {
      const { init } = require(path.resolve(dirname, file))
      init(sequelize)
    }
  })
  Object.keys(sequelize.models).forEach((name) => {
    const model = sequelize.models[name]
    if (model.associate) {
      model.associate(sequelize)
    }
  })
}

/**
 * @param {import('sequelize').Sequelize} sequelize
 */
const migrate = (sequelize) => {
  const dirname = path.resolve(__dirname, '../migrations')
  const umzug = new Umzug({
    migrations: {
      glob: `${dirname}/*.js`,
      resolve: ({ name, path, context }) => {
        const migration = require(path)
        return {
          // adjust the parameters Umzug will
          // pass to migration methods when called
          name,
          up: async () => migration.up(context, Sequelize),
          down: async () => migration.down(context, Sequelize),
        }
      },
    },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
  })
  return umzug.up()
}

const createDb = async () => {
  const db = new Sequelize({
    dialect: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  })
  init(db)
  await migrate(db)
  return db
}

module.exports = { createDb }
