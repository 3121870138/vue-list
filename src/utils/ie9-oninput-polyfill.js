// 针对 IE9 删除el-input输入框的字符，数据没有同步的polyfill
export function ie9OninputPolyfill () {
  let d = document
  if (navigator.userAgent.indexOf('MSIE 9') === -1) return
  d.addEventListener('selectionchange', function () {
    let el = d.activeElement
    if (el) {
      if (el.tagName === 'TEXTAREA' || (el.tagName === 'INPUT' && el.type === 'text')) {
        let ev = d.createEvent('CustomEvent')
        ev.initCustomEvent('input', true, true, {})
        el.dispatchEvent(ev)
      }
    }
  })
}
