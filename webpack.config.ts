import html from "html-webpack-plugin"
import dotenv from "dotenv-webpack"
import minify from "terser-webpack-plugin"
import "dotenv/config"

export default ({ WEBPACK_BUILD }: { WEBPACK_BUILD: boolean }) => ({
  plugins: [
    new html({ template: "public/index.html", favicon: "public/favicon.png" }),
    new dotenv()
  ],
  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
  entry: { main: "./src/_app.tsx" },
  module: {
    rules: [
      { test: /\.(js|ts)x?$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.(png|jpg|jpeg|webp|gif)$/, type: "asset/resource" },
      { test: /\.(woff|eot|ttf|oft|svg|ico)$/, type: "asset/inline" }
    ]
  },
  ...(WEBPACK_BUILD
    ? {
        mode: "production",
        output: {
          assetModuleFilename: "assets/[name].[contenthash][ext][query]",
          filename: "[name].[contenthash].js",
          clean: true,
          publicPath: "/"
        },
        optimization: {
          splitChunks: {
            cacheGroups: {
              libs: {
                chunks: "all",
                name: "libs",
                test: /[\\/]node_modules[\\/]/
              }
            }
          },
          minimize: true,
          minimizer: [new minify()]
        }
      }
    : {
        mode: "development",
        devtool: "inline-source-map",
        output: {
          publicPath: "/"
        },
        devServer: {
          port: process.env.PORT,
          open: false,
          hot: true,
          historyApiFallback: true
        }
      })
})
