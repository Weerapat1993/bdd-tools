const fs = require('fs-extra')
const Log = require('./Log')

const srcPath = (pwd, pathName) => `${pwd}${pathName}`

class MakeFile extends Log {
  constructor(pwd) {
    super()
    this.pwd = pwd
  }

  createDirectory(pathName) {
    const dir = srcPath(this.pwd, pathName)
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir)
      this.success(`create directory ${pathName}`)
    }
    return this
  }

  createFile(pathName, text) {
    const dir = srcPath(this.pwd, pathName)
    if (!fs.existsSync(dir)) {
      fs.writeFileSync(dir, text)
      this.success(`create file ${pathName} success.`)
    } else {
      fs.writeFileSync(dir, text)
      this.success(`rewrite file ${pathName} success.`)
    }
    return this
  }
}

module.exports = MakeFile