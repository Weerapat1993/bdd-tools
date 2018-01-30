const fs = require('fs-extra')
const shell = require('shelljs')
const { CreateBDD } = require('./utils/scenario')

/**
 * @typedef {Object} Config
 * @property {Array.<Object>} BDD
 * 
 * @return {Config}
 */
const getBBDConfig = () => {
  const pwd = shell.pwd()
  const config = fs.readJSONSync(`${pwd}/bdd.config.json`, 'utf8')
  return config
}

getBBDConfig().BDD.forEach(item => {
  CreateBDD(item)
})





