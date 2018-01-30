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
      console.log(data[key])
    }
  })
}

module.exports = mapObjectKeys
