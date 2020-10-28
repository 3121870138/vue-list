/*
 * @Author: hai.zhang
 * @LastEditors: hai.zhang
 * @Date: 2019-09-19 15:08:24
 * @LastEditTime: 2019-09-19 15:35:06
 */
export * from './transformDate'
export * from './url'
export * from './regexp'
import vm from '@/main'

/**
 * 日期区间选择可开区间时，辅助函数
 * 使用可参考：product/list/search-table.vue
 * @param refer, 参考的时间
 * @param action, 对比的操作，${date}相比${refer}满足此对比操作，则会disable
 * @param type, 参考时间的类型: timestamp/date
 * @param date, 传入的要比对的Date对象
 * @returns {boolean}
 */
export function disabledDate (refer, action, type = 'timestamp', date) {
  if (!refer) {
    return false
  }
  if (type === 'date') {
    refer = new Date(`${refer} 00:00:00`).getTime()
  }
  if (action === '>') {
    return date > refer
  } else if (action === '<') {
    return date < refer
  } else if (action === '>=') {
    return date >= refer
  } else if (action === '<=') {
    return date <= refer
  }
  return false
}

export function __merge (origin = {}, target = {}) {
  for (let p in origin) {
    if (target.hasOwnProperty(p)) {
      origin[p] = target[p]
    }
  }
  return origin
}

// 修改query
export function __changeQuery (target) {
  let v = vm
  let currentQuery = v.$route.query
  // if (currentQuery.c) {
  let newQuery = JSON.parse(JSON.stringify(currentQuery))
  newQuery.c = JSON.stringify(target)
  v.$router.replace({
    path: v.$route.path,
    query: newQuery
  })
  // }
}
