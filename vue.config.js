/* eslint-disable @typescript-eslint/no-var-requires */
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
    // ...
    configureWebpack: (config) => {
        // if (process.env.NODE_ENV === 'production') {
        //   // 为生产环境修改配置...
        // } else {
        //   // 为开发环境修改配置...
        // }
        config.plugins.push(
            ...[
                AutoImport({
                    resolvers: [ElementPlusResolver()],
                }),
                Components({
                    resolvers: [ElementPlusResolver()],
                }),
            ],
        );
    },
    devServer: {
        open: process.platform === 'darwin',
        // host: '',
        port: 9999,
        https: false, // 配置https访问
        hotOnly: false,
        // proxy: null, // 设置axios代理
        proxy: {
            '/api': {
                // 以‘api’开头的代理到下面的target属性的值中
                target: 'http://127.0.0.1:4646/',
                changeOrigin: true, // 是否改变域名：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接受请求的数据，这样客户端？和服务端进行数据的交互就不会有跨域问题
                ws: true, // 是否启动websockets
                pathRewrite: {
                    // 路径重写
                    '^/api': '', // 用‘/api’代替target 里的地址，比如我要调用'http://40.00.100.100:3002/user/add'，直接写'http://127.0.0.1:4646/user/add'
                },
            },
        },
    },
    //   plugins: [
    //     AutoImport({
    //       resolvers: [ElementPlusResolver()],
    //     }),
    //     Components({
    //       resolvers: [ElementPlusResolver()],
    //     }),
    //   ],
};
// Invalid options in vue.config.js: "plugins" is not allowed
//  -----solutions:https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
