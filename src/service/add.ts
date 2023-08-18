import { downloadContentFromGithub } from './../utils/download'
import path from 'path'
import fs from 'fs'

interface IConfig {
  owner: string
  repo: string
  path: string
}

export default async function add(configName: string, opts: { url?: string }) {
  // 下载配置地址信息, 获取配置文件下载地址.
  const configStr = await downloadContentFromGithub('download/config.json')
  const config = JSON.parse(configStr)

  if (configName in config) {
    const configItem = config[configName] as IConfig

    const fileName = path.basename(configItem.path)
    const opts = { owner: configItem.owner, repo: configItem.repo }
    const data = await downloadContentFromGithub(configItem.path, opts)

    fs.writeFileSync(fileName, data.toString())
  } else {
    console.log(`没有找到对应 ${configName} 配置文件.`)
  }
}
