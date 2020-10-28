/*
 * @Author: hai.zhang
 * @LastEditors: wangxiaojie
 * @Date: 2019-07-05 17:55:58
 * @LastEditTime: 2020-09-10 18:36:11
 */
/* global Vue */
// import { Message, Loading } from 'element-ui'
import { getUrl } from './url.js'
const Loading = Vue.prototype.$loading
const Message = Vue.prototype.$message
export default function getData (promise, option) {
  let optionDefault = {
    authError: true, // 权限错误
    tokeInvalidError: true, // token 无效错误
    showError: true, // 是否处理错误信息
    code: null,      // 错误code 对应提示
    loadingOptions: null // loading 配置
  }
  option = typeof option === 'object' ? Object.assign(optionDefault, option) : optionDefault
  let { showError, code, loadingOptions, authError, tokeInvalidError } = option
  const loading = loadingFn(loadingOptions)
  return promise.then(res => {
    const data = res.data
    const currentPageRequest = data.currentPageRequest
    // 如果不是同一个页面请求 不处理
    if (!currentPageRequest) {
      authError = false
      showError = false
    }
    if (data.code === 'success') {
      data.isOk = true
    } else {
      let handleAuthError = false // 是否处理过权限错误
      // let jumpState = window.jumpState // 跳转状态（防止多个请求一起跳转登录）
      let vueInstantiation = window.vueInstantiation // vue 实例
      let isJump = vueInstantiation._route.path !== '/member/login' // 如果已经在登录页面就不需要跳转了
      if (authError) {
        // 如果没有登录
        if (data.code === 'NO_LOGIN' && isJump) {
          if (data.loginSource === 'outer') {
            // window.location.href = data.content
            window.location.href = getUrl('/purchaser/tripartiteExternalLogin?syReturnUrl=' + encodeURIComponent(window.location.href))
          } else {
            console.log(getUrl(`/purchaser/#/member/login?url=${encodeURIComponent(window.location.href)}`))
            window.location.href = getUrl(`/purchaser/#/member/login?url=${encodeURIComponent(window.location.href)}`)
          }
          handleAuthError = true
          vueInstantiation.$store.commit('setUserInfo', { loginStatus: false })
        } else if (data.code === 'NO_PERMISSION') {
          handleAuthError = true
          vueInstantiation.$router.push({ path: '/no-auth' })
        }
      }
      if (tokeInvalidError) {
        if (data.code === 'INVALID_TOKEN') {
          // handleAuthError = true
          // vueInstantiation.$router.push({ path: '/no-auth' })
          window.location.reload()
        }
      }
      if (data.code === 'NO_LOGIN' || data.code === 'NO_PERMISSION' || data.code === 'INVALID_TOKEN') {
        showError = false
      }
      if (showError && !handleAuthError) {
        const msg = (code && code[data.code] && code[data.code].message) ||
          data.errorMessage || '网络异常请稍后重试'
        Message.error(msg)
      }
      data.isOk = false
    }
    // 请求状态 请求发送成功 后端返回异常
    data.requestState = true
    loading.hide()
    return data
  }).catch(function (err) {
    if (err && err.response) {
      const status = {
        400: { message: '请求错误' },
        401: { message: '未授权，请登录' },
        403: { message: '拒绝访问' },
        404: { message: '请求地址出错:' },
        408: { message: '请求超时' },
        500: { message: '服务器内部错误' },
        501: { message: '服务未实现' },
        502: { message: '网关错误' },
        503: { message: '服务不可用' },
        504: { message: '网关超时' },
        505: { message: 'HTTP版本不受支持' },
        default: { message: '未知错误' }
      }
      const statusCode = status[err.response.status] || status.default
      console.log(statusCode.message)
    }
    if (showError) {
      Message.error((code && code['DEFAULT'] && code['DEFAULT'].message) || '网络异常请稍后重试')
    }
    err.isOk = false
    // 请求状态 请求未发送成功
    err.requestFail = false
    // 隐藏loading
    loading.hide()
    return err
  })
}

function loadingFn (loadingOptions) {
  // load 默认配置
  const loadingOptionsDefault = {
    text: '拼命加载中',
    background: 'rgba(255, 255, 255, 0.8)',
    spinner: 'el-icon-loading'
  }
  // 通过判断参数类型来区分是否合并参数 字符串：使用默认参数 对象：合并参数
  const isLoadingOptions = typeof loadingOptions === 'object'
  const loading = {
    state: !!loadingOptions,
    instance: null,
    option: isLoadingOptions ? Object.assign(loadingOptionsDefault, loadingOptions) : loadingOptionsDefault,
    hide: function () {
      if (this.state) {
        this.instance.close()
      }
    }
  }
  if (loading.state) {
    loading.instance = Loading(loading.option)
  }
  return loading
}
export function isResponseOk (res) {
  if (!res) {
    Message({
      message: '网络异常请稍后重试',
      type: 'error'
    })
    return
  }
  if (!res.success) {
    Message({
      message: res.errorMessage,
      type: 'error'
    })
    return
  }
  return true
}
