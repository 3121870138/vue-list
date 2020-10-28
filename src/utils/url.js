export function getRequest () {
  var url = location.search
  var theRequest = {}
  if (url.indexOf('?') !== -1) {
    var str = url.substr(1)
    var strs = str.split('&')
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1])
    }
  }
  return theRequest
}

export function getUrl (url) {
  let _url = url
  let baseUrl = (window.fe && window.fe.baseUrl) || ''
  // 判断是否是超链
  const isLinkRe = /^((http:\/\/)|(https:\/\/)|(\/\/))/
  // 获取字符串前面 ./ ../ /
  const re = /^((\.\/)|(\.\.\/)|(\/))+/g
  // 最后一位是否是/
  const isSlashRe = /\/$/
  // 如果没有baseurl直接返回
  if (baseUrl === '') {
    return url
  }
  // 如果是绝对连接直接返回
  if (isLinkRe.test(url)) {
    return url
  }
  // 在base路径后添加/
  if (!isSlashRe.test(baseUrl)) {
    baseUrl = baseUrl + '/'
  }
  // 去掉不需要的路径
  _url = url.replace(re, '')
  return baseUrl + _url
}
