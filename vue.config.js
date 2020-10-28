/*
 * @Descripttion : 关闭eslint
 * @Autor        : 李晓超
 * @Date         : 2020-06-15 09:43:40
 * @LastEditTime : 2020-06-22 09:14:06
 * @FilePath     : \vue.config.js
 */

const path = require('path')
module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                // 配置路径
                '@': path.join(__dirname, 'src/'),
                '@@': path.join(__dirname, 'src/components/'),
            },
        },
    },
}