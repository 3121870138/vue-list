/*
 * @Descripttion : 
 * @Autor        : 李晓超
 * @Date         : 2020-04-30 23:59:00
 * @LastEditTime : 2020-06-05 09:51:18
 * @FilePath     : \list1\src\main.js
 */ 
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import App from './App.vue'
import router from './router'
import NProgress from 'nprogress'
import './nprogress.css'

import { Transfer, Tree } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Transfer);
Vue.use(Tree);
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(ElementUI);

// NProgress.configure({
//   template: "<div class='gundongtiao'>...</div>"
// });

// router.beforeEach((to, from, next) => {
//   console.log('开始')
//   NProgress.start()
//   next()
// })

// router.afterEach(() => {
//   console.log('结束')
//   NProgress.done()
// })
let vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
export default vm