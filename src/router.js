/*
 * @Descripttion : 
 * @Autor        : 李晓超
 * @Date         : 2020-05-05 09:48:57
 * @LastEditTime : 2020-06-28 14:59:19
 * @FilePath     : \src\router.js
 */ 
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home', // 
            name: '主页',
            component: () => import('./components/HelloWorld.vue'),
        },
        {
            path: '/map', // 地图
            name: '地图',
            component: () => import('./components/Map.vue'),
        },
        {
            path: '/tree', // 树状
            name: '树状',
            type: 'plugin',
            component: () => import('./components/TreeSelect.vue'),
        },
        {
            path: '/page', // 分页
            name: '分页',
            component: () => import('./components/Pagination.vue'),
        },
        {
            path: '/table', // tableInput
            name: 'tableInput',
            component: () => import('./components/TableInput.vue'),
        },
        {
            path: '/table2', // tableInput2
            name: 'tableInput2',
            component: () => import('./components/TableInput2.vue'),
        },
        {
            path: '/table3', // 合并
            name: 'el-table 合并',
            component: () => import('./components/Table3.vue'),
        },{
            path: '/cas', // cascader 选择器
            name: 'cascader 选择器',
            component: () => import('./components/Cascader.vue'),
        },
        {
            path: '/layout', // layout 布局
            name: 'layout 布局',
            type: 'el',
            component: () => import('./components/Layout.vue'),
        },
        {
            path: '/Father', // father
            name: 'Father',
            component: () => import('./components/Father.vue'),
        },
        {
            path: '/echarts', // echarts
            name: 'Echarts',
            component: () => import('./components/Echarts.vue'),
        },
        {
            path: '/Form', // Form
            name: 'Form验证',
            type: 'el',
            component: () => import('./components/Form.vue'),
        },
        {
            path: '/El-input', // el-input 的输入
            name: 'el-input',
            type: 'el',
            component: () => import('./components/El-input.vue'),
        },
        {
            path: '/El-Table', // el-table 滚动
            name: 'el-table',
            type: 'el',
            component: () => import('./components/El-Table.vue'),
        },
        {
            path: '/FileUpload', // 文件上传
            name: 'file-upload',
            component: () => import('./components/FileUpload.vue'),
        },
        {
            path: '/El-Popover', // Popover弹出框
            name: 'Popover弹出框',
            type: 'el',
            component: () => import('./components/El-Popover.vue'),
        },
        {
            path: '/El-BreadBox', // 面包屑
            name: 'el-breadBox',
            type: 'el',
            component: () => import('./components/El-BreadBox.vue'),
            children: [
                {
                  path: '/', //水保普查
                  component: () => import('./components/HelloWorld.vue'),
                },
                {
                  path: '/El-BreadBox/tree', //野外调查协同
                  component: () => import('./components/TreeSelect.vue'),
                },
                {
                  path: '/El-BreadBox/map', //添加单元
                  component: () => import('./components/Map.vue'),
                },
              ]
        },
        {
            path: '/nprogress', // Popover弹出框
            name: 'nprogress浏览器顶部滚动条',
            type: 'plugin',
            component: () => import('./components/nprogress.vue'),
        },
        {
            path: '/pageRoute', // 测试utils方法
            name: '测试utils方法路由跳转',
            type: 'utils',
            component: () => import('./utilsIndex/pageRoute.vue'),
        }
    ]
})

