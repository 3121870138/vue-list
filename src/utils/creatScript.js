export function creatScript (src) {
  return new Promise(function (resolve, reject) {
    const oScript = document.createElement('script')
    oScript.type = 'text/javascript'
    oScript.src = src
    document.body.appendChild(oScript)
    oScript.onload = function () {
      resolve()
    }
    oScript.onerror = function () {
      reject(new Error('加载失败'))
    }
  })
}
