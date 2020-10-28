/*
 * @Author: hai.zhang
 * @LastEditors: hai.zhang
 * @Date: 2019-09-25 11:30:22
 * @LastEditTime: 2019-09-25 11:45:31
 */

const imgUrls = [
  {
    url: '/156619450448218451.svg',
    businessType: 1
  },
  {
    url: '/156878926633287779.svg',
    businessType: 2
  }
]

export function getImgUrl (businessType) {
  for (let item of imgUrls) {
    if (item.businessType === businessType) {
      return window.vueInstantiation.syImgUrl + item.url
    }
  }
}
