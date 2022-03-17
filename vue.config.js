// const {
//   EnvMode,
//   currentMode,
//   devServerPortNumber,
//   f2eCdn,
//   f2eCdnPath,
//   previewDomain,
//   isPreview,
//   isE2E,
//   previewProject
// } = require('./webpack/env')

const proxy = require('./webpack/proxy.js')

/**
   * vue.config.js
   * @author ocean
   * @module
   * @description Vue CLI 給予 webpack 的設定檔.
   */

// const useSourceMap = currentMode === EnvMode.Development || currentMode === EnvMode.Lab

/**
   * 注意：此設定只能在 development 時關閉 (安全性議題)
   * @description 防止Invalid Host header，在 google map local  開發時，
   *              會使用到 hosts，此時若不把 disableHostCheck 關閉，會發生錯誤。
   */
// const disableHostCheck = currentMode === EnvMode.Development

/**
   * 注意： 端對端 shell script 執行時，因為會在 Travis server中，
   *       在開啟前端輕量化 static server用以運行前端代碼，對cypress來說，
   *       此 static server 是在 local 環境，
   *       因此遇到 isE2E時 publicPath需使用 '/'。
   * @description
//    */
// const publicPath = (currentMode === EnvMode.Development || isE2E)
//   ? '/' // env is development or process is e2e test.
//   : (currentMode === EnvMode.Production || currentMode === EnvMode.Staging || (currentMode === EnvMode.Lab && !isPreview))
//     ? `${f2eCdn}/${f2eCdnPath}` // env is production or staging or env is lab and status not preview.
//     : `${previewDomain}/b/${previewProject}/` // env is lab and status is preview.

// console.log('publicPath', publicPath)
const currentMode = process.env.NODE_ENV
const devServerPortNumber = process.env.VUE_APP_DEV_SERVER_PORT
const disableHostCheck = currentMode === 'development'

module.exports = {
//   publicPath: publicPath,
//   productionSourceMap: useSourceMap,
  filenameHashing: true,
  css: {
    // false: 不把 css 打包出來
    extract: true
  },
  transpileDependencies: [
    /node_modules[/\\\\]uuidv4[/\\\\]/,
    /node_modules[/\\\\]vuex-composition-helpers[/\\\\]/
  ],
  configureWebpack: config => {
    // if ([mode.lab, mode.staging, mode.production].indexOf(mode.current) >= 0) {
    //   config.plugins = [
    //     ...config.plugins,
    //     new Manifest(VERSION, WORKSPACE)
    //   ]
    // }

    config.optimization = {
      splitChunks: {
        // 原始設定複寫, 關閉產出chunk-common , chunk-vendor
        cacheGroups: {
          // vendors: {
          //   name: 'chunk-vendors',
          //   filename: 'common/js/[name].js',
          //   test: /[\\/]node_modules[\\/]/,
          //   priority: -10,
          //   chunks: 'initial'
          // }
          // common: {
          //   name: 'chunk-common',
          //   minChunks: 2,
          //   priority: -20,
          //   chunks: 'initial',
          //   reuseExistingChunk: true
          // }
        }
      }
    }
  },
  // webpack chain
  chainWebpack: config => {
    // ------------------------------------------
    // 別名設定
    // 讓 import 路徑可使用別名替代
    // ------------------------------------------
    // config.resolve.alias
    // ------------------------------------------
    // jsonpFunction
    // 為了避免 不同 webpack chunk 衝撞，
    // 需設定一個唯一名稱
    // ------------------------------------------
    // config.output
    //   .jsonpFunction('chatbotJsonpFunction')

    // 除開發環境外 , 特定動作
    // if (currentMode !== EnvMode.Development) {
    //   // build 時不產出 html 檔案
    //   config.plugins.store.delete('html-chatbot')
    //   // build 時不注入 preload
    //   config.plugins.store.delete('preload-chatbot')
    //   // build 時不注入 chatbot
    //   config.plugins.store.delete('prefetch-chatbot')

    //   // 打包略過 Vue
    //   config.externals({ vue: 'Vue' })
    // }

    if (currentMode !== 'development') {
      config.externals({ vue: 'Vue' })
    }
  },
  // ------------------------------------------
  // 設定入口程序
  // 此處不配置，在vue cli中，預設會是 main.js
  // ------------------------------------------
  pages: {
    chatbot: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'chatbot']
    }
  },
  assetsDir: '',
  // ------------------------------------------
  // 設定本機開發應用服務器，
  // 此server只在 development才會被啟動
  // ------------------------------------------
  devServer: {
    overlay: {
      warnings: false
    },
    proxy: proxy,
    port: devServerPortNumber,
    historyApiFallback: {
      rewrites: [
        // { from: /^\/vip\/job\/jobmaster/, to: '/vip/job/index.html' },
        // { from: /^\/vip\/custFile\/(.*)$/, to: '/vip/customer/index.html' }
      ]
    },
    disableHostCheck: disableHostCheck
  }
}
