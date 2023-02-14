declare module 'http' {
  import { Sequelize, Op } from 'sequelize'
  interface Ctx {
    readonly sequelize: Sequelize
    readonly Op: typeof Op
  }
  interface IncomingMessage {
    readonly ctx: Ctx
  }
}
