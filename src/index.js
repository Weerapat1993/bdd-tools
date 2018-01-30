const { CreateBDD, getBBDConfig } = require('./utils/scenario')

getBBDConfig().BDD.forEach(item => {
  CreateBDD(item)
})



