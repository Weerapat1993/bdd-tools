const fs = require('fs')
const Log = require('./Log')
const createTable = require('./createTable')

const srcPath = (pwd, pathName) => `${pwd}${pathName}`

class MakeFile extends Log {
  constructor(pwd) {
    super()
    this.pwd = pwd
    this.table = createTable([
      '',
      'PATH',
    ])
    this.data = []
  }

  createDirectory(pathName) {
    const dir = srcPath(this.pwd, pathName)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
      // this.success(`create directory ${pathName}`)
      this.data.push([
        'D',
        pathName,
      ])
    }
    return this
  }

  createFile(pathName, text) {
    const dir = srcPath(this.pwd, pathName)
    if (!fs.existsSync(dir)) {
      fs.writeFileSync(dir, text)
      // this.success(`create file ${pathName} success.`)
      this.data.push([
        this.git.add('A'),
        this.git.add(pathName),
      ])
    } else {
      fs.writeFileSync(dir, text)
      // this.warning(`rewrite file ${pathName} success.`)
      this.data.push([
        this.git.merge('M'),
        this.git.merge(pathName),
      ])
    }
    return this
  }

  status() {
    this.table.push(...this.data)
    console.log('\nBDD Status:\n')
    console.log(this.table.toString())
  }
}

module.exports = MakeFile
