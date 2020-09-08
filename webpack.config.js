const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'js'),
    publicPath: "/js/",
  },
  mode: 'production',
  devtool: 'cheap-module-source-map ',
  devServer: {
    port: 9005,
    compress: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/,
        use: {
          loader: 'babel-loader', options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  "targets": {
                    "browsers": ["IE 11"],
                    "ie": "11",
                  },
                  useBuiltIns: 'entry',
                },
              ],
            ],
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../css' }
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '../css/css-img',
            }
          }
        ]
      }
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: '[name][hash:3].css' })],
};
