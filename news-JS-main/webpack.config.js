// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const EslingPlugin = require('eslint-webpack-plugin');

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";

const config = {
  entry: {
    index: path.resolve(__dirname, './src/index.ts'), // одна входная точка, единый js файл для всех (в твоем случае для двух) страниц!!!!
  },
  // "./src/index.ts",

  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'), // шаблон
      filename: 'index.html', // название выходного файла
      chunks: ['index'], // здесь от названия страницы, ты добавляешь именно тот js файл, который должен быть к ней привязан можно привязать через js
      inject: 'body',
    }),
    new EslingPlugin({ extensions: ['ts', 'js'] })

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.ts$/i,
        use: 'ts-loader'
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: 'img/[name][ext]'
        },
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    // config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};
