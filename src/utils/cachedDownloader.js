import downloader from './downloader'

class CachedDownloader {
  constructor () {
    this.store = {}
  }

  download (url) {
    this.store[url] = downloader(url)
  }

  get (url) {
    return this.store[url]
  }
}

export default new CachedDownloader()
