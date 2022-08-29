const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  entry: {
    index: './src/index.js', //main - [name]
    //index:'./src/css/style.css',
    //owfont:'./src/css/owfont-regular.css'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false },
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource'
      },

      // {
      //     test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
      //     type: 'asset/resource',
      //     generator: {
      //       filename: "assets/img/[name][ext]",
      //     },
      // },
      // {
      //     test: /\.(woff(2)|eot|ttf|otf)$/i,
      //     type: 'asset/resource'
      // },
    ]
  },


  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: './[name].[contenthash].css'
    }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: './src/assets/sounds', to: './assets/sounds' } //папка не должна быть пустой
    //   ]
    // }),
  ],
  // optimization: {
  //   minimize: true
  // },
  devServer: {
    //compress: true,
    port: 3000,
  },
}