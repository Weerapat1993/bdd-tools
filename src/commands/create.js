const { CreateBDD, getBBDConfig } = require('../utils/scenario')

const Create = () => {
  CreateBDD(getBBDConfig().BDD)
}

module.exports = Create





