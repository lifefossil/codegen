import path from 'path'
import * as fs from 'fs/promises'

interface ICreateOptions {
  template: string
}

async function create(projectName: string, options: ICreateOptions) {
  // 获取当前工作目录
  const cwd = process.cwd()

  // 拼接得到项目目录
  const targetDir = path.join(cwd, projectName)

  try {
    await fs.access(targetDir)
    console.log('1')
  } catch (err) {
    console.log(`Directory exists: ${err}`)
  }
  console.log('2')
}

export default create
