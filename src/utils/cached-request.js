/**
 * Maintained by Sandon.
 */
import Vue from '@/app'
import response from '@/utils/response'
import SparkMD5 from 'spark-md5'
import cloneDeep from 'lodash/cloneDeep'
const cached = {
  // 'type__url__paramStrHash': Promise
}
const vm = new Vue()

/**
 * @param api: API {type: '', url: ''}
 * @param param: 请求参数
 * @param force: 是否强制请求
 * @param loadingOptions: 请求时的Loading弹层配置
 * @returns Promise
 */
export default function cachedRequest (api, param, force = false, loadingOptions = false) {
  const key = `${api.type}__${api.url}__${SparkMD5.hash(JSON.stringify(param))}`
  if (force || !cached[key]) {
    cached[key] = new Promise(async (resolve, reject) => {
      const res = await response(vm.$http(api.type, api.url, param), {
        loadingOptions
      })
      if (res.isOk) {
        resolve(cloneDeep(res))
      }
      reject(new Error('cachedRequest 请求失败'))
    })
  }
  return cached[key]
}
