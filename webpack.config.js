const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        // module:'./app/module.js',
        // indexpage:'./app/index.js',
        // scroll: './app/scroll.js',
        // universal: './app/universal.js',
        header: './app/header.js'
    },
    output: {
        path:path.resolve(__dirname,'./dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                    '@babel/preset-env'
                ]
              }
            }
          }
        ]
      }
}