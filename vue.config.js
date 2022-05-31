const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  // publicPath: process.env.NODE_ENV == "production" ? "/hgxlserp/" : './',
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",
  filenameHashing: false,
  lintOnSave: process.env.NODE_ENV !== "production",
  runtimeCompiler: false,
  productionSourceMap: false,
  devServer: {
    open: true, //是否自动弹出浏览器页面
    host:"localhost",
    port: 8088,
    //跨越代理
    proxy: {
      // '/hgxlserp': {
      //   target: 'http://43.138.21.133', //API服务器的地址
      //   ws: true,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/hgxlserp': ''
      //   }
      // },
      '/pyamazon': {
        target: 'http://43.138.21.133', //API服务器的地址
        // target: 'http://127.0.0.1:8000', //API服务器的地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/pyamazon': ''
        }
      }
    }
  }
})
