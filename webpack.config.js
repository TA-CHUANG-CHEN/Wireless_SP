const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, 'js'),
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'js')
  },
  mode: 'production',
  devtool: 'cheap-module-source-map ',
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/, use: {
          loader: 'babel-loader', options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  "targets": {
                    "ie": "11"
                  },
                  useBuiltIns: 'usage',
                },
              ],
            ],
          }
        }
      },
      {
        test: /\.scss$/, exclude: /node_modules/, use: {
          loader: 'css-loader', options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  "targets": {
                    "ie": "11"
                  },
                  useBuiltIns: 'usage',
                },
              ],
            ],
          }
        }
      }
    ]
  }
}
