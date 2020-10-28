/*
 * @Descripttion : 
 * @Autor        : 李晓超
 * @Date         : 2020-06-12 14:45:43
 * @LastEditTime : 2020-06-21 15:46:12
 * @FilePath     : \src\index.js
 */
import MoorSwitch from './pageages/switch/index'

const components = [
    MoorSwitch
]

const install = function (Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component)
    })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    MoorSwitch
    // ...如果还有的话继续添加
}