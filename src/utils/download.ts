import { Octokit } from '@octokit/rest'
import { RequestHeaders } from '@octokit/types'
import Config from '../core/config'

// 定义类型
type OptsType = { owner: string; repo: string; headers?: RequestHeaders }

// 初始化操作 github api 的 octokit 对象.
const github = new Octokit()

// 设置仓库默认参数
const defaultOpts = {
  owner: Config.OWNER,
  repo: Config.CONFIG_REPO,
  headers: Config.HEADER
}

export async function downloadContentFromGithub(contentPath: string, opts: OptsType = defaultOpts) {
  const response = await github.rest.repos.getContent({
    owner: defaultOpts.owner,
    repo: defaultOpts.repo,
    path: contentPath,
    headers: defaultOpts.headers
  })
  return response.data.toString()
}
