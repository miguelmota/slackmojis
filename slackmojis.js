const fs = require('fs')
const path = require('path')
const request = require('request-promise')
const cheerio = require('cheerio')
const Promise = require('bluebird')

module.exports.download = function(opts) {
  opts = opts || {}
  const dest = path.resolve(opts.destination || 'emojis')
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest)
  }

  request({
    url: 'https://slackmojis.com/',
    json: false
  }).then(body => {
    const $ = cheerio.load(body)

    const downloadFile = (url, filename) => {
      return request(url).pipe(fs.createWriteStream(`${dest}/${filename}`))
    }

    const list = []
    $('li .emoji').each((index, element) => {
      const name = $(element).attr('title')
      const url = $(element).find('a').attr('href')
      const filename = $(element).find('a').attr('download')
      list.push({ name, url, filename })
    })

    console.time('Download complete')
    return Promise.mapSeries(list, item => {
      console.log(JSON.stringify(item))
      return downloadFile(item.url, item.filename)
    }).finally(() => {
      console.timeEnd('Download complete')
    })
  })
}
