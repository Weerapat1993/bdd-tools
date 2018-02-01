#!/usr/bin/env node

require('babel-core/register')
const program = require('commander')
const shell = require('shelljs')
const packageJson = require('./package.json')
const { TestID, Config, Create, Install } = require('./src/commands')

let cmdValue
let envValue
const CMD_NAME = 'bdd'
const pwd = shell.pwd().stdout

program
  .version(packageJson.version)
  .arguments('<command> [name]')
  .action((command, name) => {
    cmdValue = command
    envValue = name
  })

// must be before .parse() since
// node's emit() is immediate

program.on('--help', function(){
  console.log('')
  console.log('  Commands:')
  console.log('')
  console.log(`    ${CMD_NAME} install`)
  console.log(`    ${CMD_NAME} config`)
  console.log(`    ${CMD_NAME} create`)
  console.log(`    ${CMD_NAME} testID`)
  console.log('')
})

program.parse(process.argv)

switch(cmdValue) {
  case 'install':
    Install(pwd, cmdValue, envValue)
    break
  case 'testID':
    TestID(pwd, cmdValue, envValue)
    break
  case 'config':
    Config(pwd, cmdValue, envValue)
    break
  case 'create':
    Create(pwd, cmdValue, envValue)
    break
  default:
    console.log('')
    console.log('  command:', cmdValue, 'is not found.')
    program.help()
}
