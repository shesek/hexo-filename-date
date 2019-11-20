const path   = require('path')
    , moment = require('moment')

const RE_FILENAME = /^(\d{4}-\d{2}-\d{2})-(.*)$/

hexo.extend.filter.register('before_post_render', data => {
  if (data.layout === 'post') {
    const filename = path.basename(data.source, path.extname(data.source))
        , matches  = filename.match(RE_FILENAME)

    if (matches) {
      data.date || (data.date = moment(matches[1]))
      data.title || (data.title = matches[2])
    }
  }
  return data
})
