import Service from './Service'
import _ from 'lodash'

let apis = ['map', 'cityItem', 'domain.json']
let pairs = apis.map(api => [api, new Service(api)])
let apiObject = _.fromPairs(pairs)

export default apiObject
