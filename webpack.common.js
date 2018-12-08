const path = require('path')
const packageJson = require('./package.json')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: [`./${packageJson.main}`],
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: ['node_modules'],
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './src/index.html',
      to:   './index.html',
    }])
  ]
}