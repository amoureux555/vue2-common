const path = require("path");
// 引入等比适配插件
const px2rem = require('postcss-px2rem')
// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16
})
module.exports = {
  // 项目适配
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  // 网页标题
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "网站标题";
      return args;
    });
  },
  // 全局路径
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "~mock": path.resolve(__dirname, "mock"),
      },
    },
  },
  // 跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://xxx.xxx.xxx.xxx",
        changeOrigin: true, // 是否允许跨域
        secure: false, // 关闭SSL证书验证https协议接口需要改成true
        pathRewrite: {
          // 重写路径请求
          "^/api": "", //路径重写
        },
      },
      // ....
    },
  },
};
