import method from '@/apis/common'
import response from './response.js'
let _this = window.vueInstantiation
export default async function (opt) {
  const api = method.getPageBoxValueCode
  const param = { code: opt }
  const res = await response(_this.$http(api.type, api.url, param))
  if (res.isOk) {
    return res.content
  }
}
// import getS from '@/utils/getSelect.js'
// getS('prepaymentMethod').then(res => console.log(res, '获取'))
