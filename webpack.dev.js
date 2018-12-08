const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackCommon = require('./webpack.common.js')

module.exports = webpackMerge(webpackCommon, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    hot: true,
    port: 3000,
    publicPath: 'http://localhost:3000'
  }
})