import config from '@/config'
import store from '@/store'

async function request (method, url, data) {
  store.commit('requestStarted')
  let response = null
  try {
    response = await fetch(url, { method, data })
  } finally {
    setTimeout(() => store.commit('requestCompleted'), 0)
  }
  return response.json()
}

export default class Service {
  constructor (prefix) {
    this.url = config.api + '/' + prefix
  }

  findOne (id) {
    return request('GET', this.url + '/' + id)
  }

  findMany (ids) {
    return request('POST', this.url, ids)
  }

  findAll () {
    return request('GET', this.url)
  }

  create (item) {
    return request('POST', this.url, item)
  }

  update (item) {
    return request('PUT', this.url, item)
  }

  delete (item) {
    return request('DELETE', this.url + '/' + item.id)
  }
}
