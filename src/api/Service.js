import config from '@/config'

async function request (method, url, data) {
  let response = await fetch(url, { method, data })
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
