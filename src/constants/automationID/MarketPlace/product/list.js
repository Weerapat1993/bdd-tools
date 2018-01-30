import { mapTestID } from '../../utils'
const name = 'MarketPlace'

export const list = {
  recent: mapTestID(`${name}.product.list`, 'recent', 10),
  recommend: mapTestID(`${name}.product.list`, 'recommend', 10),
  bestsellers: mapTestID(`${name}.product.list`, 'bestsellers', 10),
}
