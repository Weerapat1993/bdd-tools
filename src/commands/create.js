const { CreateBDD, getBBDConfig } = require('../utils/scenario')

const Create = () => {
  const { BDD } = getBBDConfig()
  CreateBDD(BDD)
}

module.exports = Create





