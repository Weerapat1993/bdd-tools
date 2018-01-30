// import { mapObjectKeys } from './utils'
import chalk from 'chalk'
import automationID from './constants/automationID'

/**
 * Map Object With Keys
 * @param {Object.<any>} data 
 * @return {void}
 */
const mapObjectKeys = (data) => {
  Object.keys(data).forEach((key, i) => {
    if (typeof data[key] === 'object') {
      mapObjectKeys(data[key])
    } else {
      console.log(chalk.green(data[key]))
    }
  })
}

const runFunction = async () => {
  await console.time('functions')
  await console.log('===================================')
  await mapObjectKeys(automationID)
  await console.log('===================================')
  await console.timeEnd('functions')
}

runFunction()




