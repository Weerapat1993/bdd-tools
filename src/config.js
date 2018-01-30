const fs = require('fs-extra')
const shell = require('shelljs')
const chalk = require('chalk')
const pwd = shell.pwd()
// const defaultPath = '/Users/scale360/Desktop/Scale360/shopbank-uk-mobile'
const pkgJSON = fs.readJSONSync(`${pwd}/package.json`)
const app = `${pwd}/ios/build/Build/Products/Debug-iphonesimulator/${pkgJSON.name}.app`

if(!fs.existsSync(app)) {
  console.log(chalk.red(`Error: file path ${app} is not exists.`))
} else {
  const config = {
    platformName: "iOS",
    app,
    deviceName: "iPhone Simulator",
    noReset: true,
    platformVersion: "10.3"
  }
  
  console.log('Appium Config:\n')
  console.log(chalk.green(JSON.stringify(config, null, '  ')))
}



