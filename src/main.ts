import { Command } from 'commander'

import { version, description } from '../package.json'
import create from './service/create'
import add from './service/add'

const command = new Command()

command.name('codegen').description(description).version(version).usage('<command> [option]')

command
  .command('create <project_name>')
  .description('create a new project')
  .option('-t, --template [template]', 'create a new project with a template')
  .action(create)

command
  .command('add <config_name>')
  .description('add configuration file')
  .option('-u, --url [url]', '配置文件地址')
  .action(add)

command.parse()
