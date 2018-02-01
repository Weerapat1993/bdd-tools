import { mapObjectKeys } from '../utils'
import automationID from '../constants/automationID'

const TestID = async () => {
  await console.time('times')
  await console.log('===================================')
  await mapObjectKeys(automationID)
  await console.log('===================================')
  await console.timeEnd('times')
}

export default TestID