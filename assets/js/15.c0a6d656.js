(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{494:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"vue2-0配置webpack-dev-server的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2-0配置webpack-dev-server的配置"}},[s._v("#")]),s._v(" Vue2.0配置webpack-dev-server的配置")]),s._v(" "),a("p",[s._v("proxy:设置代理")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("因为浏览器的同源策略，调用不同域的资源就会产生跨域的问题，所以需要设置代理配置跨域，才能正常请求到其他域下的资源\n设置代理, 首先得有一个标识, 确认哪一个连接要用代理. 不然的话, html, css, js这些静态资源都使用代理的网址调用. 所以只有需要调用的接口用代理, 静态文件用本地.")])]),s._v(" "),a("ul",[a("li",[s._v("'/api':{}：接口只要是'api'开头的才用代理.这个'api'即标识")]),s._v(" "),a("li",[s._v("target:源地址，即请求接口的url前缀，如果我的接口都在http://xxx.xx.com下，那么源地址就是http://xxx.xx.com")]),s._v(" "),a("li",[s._v("changeOrigin:是否允许跨域")]),s._v(" "),a("li",[s._v("ws:是否代理websockets")]),s._v(" "),a("li",[s._v("pathRewrite:{'^/api':''}:顾名思义，这是 ' 路径重写 ’ 的意思")]),s._v(" "),a("li",[s._v("当设置了标识符后，接口调用就要这么写 :/api/delete?id=123，最后请求的路径就是 http://xxx.xx.com/api/delete?id=123.但是如果正确的接口路径里面没有/api. 所以就需要 pathRewrite,用'^/api':'', 把'/api'用空字符代替,最后请求的路径就是http://xxx.xx.com/delete?id=123了.这样既能有正确标识, 又能在请求接口的时候去掉api.")])]),s._v(" "),a("h3",{attrs:{id:"vue3-0配置vue-config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3-0配置vue-config-js"}},[s._v("#")]),s._v(" Vue3.0配置vue.config.js")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("module.exports = {\n    // 基本路径\n    baseUrl: '/',\n    // 输出文件目录\n    outputDir: 'dist',\n    // eslint-loader 是否在保存的时候检查\n    lintOnSave: true,\n    // webpack配置\n    chainWebpack: () => { },\n    configureWebpack: () => { },\n    // 生产环境是否生成 sourceMap 文件\n    productionSourceMap: true,\n    // css相关配置\n    css: {\n        // 是否使用css分离插件 ExtractTextPlugin\n        extract: true,\n        // 开启 CSS source maps?\n        sourceMap: false,\n        // css预设器配置项\n        loaderOptions: {},\n        // 启用 CSS modules for all css / pre-processor files.\n        modules: false\n    },\n    parallel: require('os').cpus().length > 1,\n    pwa: {},\n    // webpack-dev-server 相关配置\n    devServer: {\n        open: true,                                 //配置自动启动浏览器\n        host: 'localhost',\n        port: 8080,                                 // 端口号\n        https: false,\n        hotOnly: false,                             // https:{type:Boolean}\n        proxy: {                                        // 配置跨域\n            '/api':{\n                target:'http://xxx.xx.xxx.xxx:8080', //源地址\n                changeOrigin:true,                  //改变源\n                ws:true,                            //是否代理websockets\n                pathRewrite:{\n                    '^/api':''\n                }\n            }\n        },                                           // 配置跨域处理,只有一个代理\n        before: app => { }\n    },\n    // 第三方插件配置\n    pluginOptions: {}\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);