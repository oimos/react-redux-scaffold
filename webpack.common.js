const path = require('path')
const packageJson = require('./package.json')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: [`./${packageJson.main}`],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          configFile: './.eslintrc.js',
          failOnError: true,
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
            }
          },
          'postcss-loader',
        ]
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        include: [path.resolve(__dirname, 'node_modules')],
        loader: 'file-loader',
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