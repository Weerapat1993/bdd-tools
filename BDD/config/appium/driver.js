import wd from 'wd'
import chalk from 'chalk'
import server from './server'

const driver = wd.promiseChainRemote(server.host, server.port)

/**
 * Async ForEach
 * @param {any[]} array
 * @param {function} callback
 */
const asyncForEach = async (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    await callback(array[i], i, array)
  }
}

/**
 * Combine Driver
 * @param {Array} arrayFunction
 * @return {void}
 */
export const combineDriver = async (arrayFunction) => {
  const timestamp = new Date().getTime()
  if (arrayFunction.length) {
    await asyncForEach(arrayFunction, async (item) => {
      await checkList(item.name, timestamp, item()(driver))
    })
  }
}

export const describe = {
  Given: text => console.log(` ${chalk.cyan('Given')} ${text}`),
  When: text => console.log(` ${chalk.cyan('When')} ${text}`),
  Then: text => console.log(` ${chalk.cyan('Then')} ${text}`),
  Case: text => console.log(`   ${chalk.yellow('Case')}: ${text}`),
}

/**
 * BDD Check Lists Console
 * @param {string} name
 * @param {number} createdAt
 * @param {function} callback
 */
export const checkList = (name, createdAt, callback) => {
  const timestamp = new Date().getTime()
  const timemilisecond = timestamp - createdAt
  try {
    console.log(`${chalk.green('   RUN')} ${chalk.gray(name)} (${timemilisecond} ms)`)
    return callback
  } catch (error) {
    console.log(`${chalk.red('   ERR')} ${chalk.gray(name)} (${timemilisecond} ms)`)
    return callback
  }
}

export default driver
