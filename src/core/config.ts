import dotenv from 'dotenv'
dotenv.config()

export default class Config {
  static OWNER: string = process.env.OWNER ?? 'lifefossil'
  static CONFIG_REPO: string = process.env.CONFIG_REPO ?? 'configuration'
  static HEADER = { Accept: 'application/vnd.github.raw' }
}
