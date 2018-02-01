const path = require('path')

/**
 * Path Directory Name
 * @param {string} pathName 
 */
const dirPath = (pathName) => path.join(__dirname, `../../${pathName}`)

exports.path = dirPath