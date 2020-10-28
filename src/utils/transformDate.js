/** 方法说明
 * @method TransformDate 适用于时间日期范围选择组件
 * @param {arr|date} args 参数是一个数组，数组项必须是date日期格式
 * @return {arr} 返回的值也是arr，是经过格式化的date日期，格式为：["2019-00-08 00:00:00"]
 */
const TransformDateArr = function (args, options) {
  if (!args || !Array.isArray(args)) {
    return ''
  }
  let optionDefault = {
    isNeedHours: true // 是否需要时间
  }
  options = typeof options === 'object' ? Object.assign(optionDefault, options) : optionDefault
  const isNeedHours = options.isNeedHours
  let newArr = []
  let item = null
  for (let i = 0; i < args.length; i++) {
    let enumItem = null
    if (args[i].constructor === Date) {
      enumItem = args[i]
    } else {
      enumItem = args[i].replace(/-/g, '/')
    }
    let date = new Date(enumItem)
    const year = date.getFullYear() < 10 ? '0' + date.getFullYear() : date.getFullYear()
    const monthNum = date.getMonth() + 1
    const month = monthNum < 10 ? '0' + monthNum : monthNum
    const dates = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    if (isNeedHours) {
      const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      item = year + '-' + month + '-' + dates + ' ' + hours + ':' + minutes + ':' + seconds
    } else {
      item = year + '-' + month + '-' + dates
    }
    newArr.push(item)
  }
  return newArr
}
/** 方法说明
 * @method TransformDate 适用于时间日期单框选择组件
 * @param {str|date} str 参数是一个字符串，必须是date日期格式
 * @return {str} 返回的值也是字符串，是经过格式化的date日期，格式为："2019-00-08 00:00:00"
 */
const TransformDateStr = function (args, options) {
  if (!args) {
    return ''
  }
  let optionDefault = {
    isNeedHours: true // 是否需要时间
  }
  options = typeof options === 'object' ? Object.assign(optionDefault, options) : optionDefault
  const isNeedHours = options.isNeedHours
  let time = null
  if (args.constructor === Date) {
    time = args
  } else {
    time = args.replace(/-/g, '/')
  }
  let date = new Date(time)
  let str = ''
  const year = date.getFullYear() < 10 ? '0' + date.getFullYear() : date.getFullYear()
  const monthNum = date.getMonth() + 1
  const month = monthNum < 10 ? '0' + monthNum : monthNum
  const dates = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  if (isNeedHours) {
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    str = year + '-' + month + '-' + dates + ' ' + hours + ':' + minutes + ':' + seconds
  } else {
    str = year + '-' + month + '-' + dates
  }
  return str
}
export {
  TransformDateArr,
  TransformDateStr
}
