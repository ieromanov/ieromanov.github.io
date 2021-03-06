const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const path = require("path");
const isDev = process.env.NODE_ENV !== "production";

let envPlugins = [];
if (isDev) {
  envPlugins = [new webpack.HotModuleReplacementPlugin()];
} else {
  envPlugins = [
    new MiniCssExtractPlugin({
      filename: isDev ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDev ? "[id].css" : "[id].[hash].css",
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["docs"],
    }),
    new webpack.HashedModuleIdsPlugin(),
  ];
}

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  devServer: {
    contentBase: "./docs",
    hot: true,
  },
  devtool: "source-map",
  mode: isDev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(html)$/,
        include: path.join(__dirname, "src/partials"),
        use: {
          loader: "html-loader",
          options: {
            minimize: !isDev,
            interpolate: true,
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "src/favicon.ico",
      template: "src/index.html",
      title: "Savvy",
      inject: "body",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      favicon: "src/favicon.ico",
      template: "src/privacy_policy.html",
      title: "Privacy policy",
      inject: "body",
      filename: "privacy_policy.html",
    }),
    new HtmlWebpackPlugin({
      favicon: "src/favicon.ico",
      template: "src/terms_of_service.html",
      title: "Terms of service",
      inject: "body",
      filename: "terms_of_service.html",
    }),
    ...envPlugins,
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "docs"),
    publicPath: "",
  },
};
