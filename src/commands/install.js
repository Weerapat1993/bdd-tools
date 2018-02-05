const chalk = require('chalk')

const Install = (pwd) => {
  console.log(chalk.grey('\n# How to Install BDD\n'))
  console.log(`  npm install -D ${chalk.green('appium appium-doctor cucumber cucumber-html-reporter wd')}`)
  console.log(`  npm install -S ${chalk.green('ramda babel-core')}`)
  console.log('')
}

module.exports = Install

