declare module 'http' {
  import { Sequelize, Op } from 'sequelize'
  import { Transporter } from 'nodemailer'
  import SMTPTransport from 'nodemailer/lib/smtp-transport'

  interface Ctx {
    readonly sequelize: Sequelize
    readonly Op: typeof Op
    readonly mail: Transporter<SMTPTransport.SentMessageInfo>
    readonly renderMail: (name: string, data: unknown) => Promise<string>
    readonly sendMail: (
      options: SMTPTransport.MailOptions
    ) => Promise<SMTPTransport.SentMessageInfo>
  }
  interface IncomingMessage {
    readonly ctx: Ctx
  }
}
