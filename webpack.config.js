const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const ClosureCompilerPlugin = require("webpack-closure-compiler");
const path = require("path");

const prod = {
  devtool: "",
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: {
            properties: {
              keep_quoted: true,
            },
          },
        },
      }),
    ],
  },
};

const dev = {
  mode: "development",
  optimization: {},
  devtool: "cheap-source-map",
};

const { optimization, mode, devtool } =
  process.env.NODE_ENV === "production" ? prod : dev;

module.exports = {
  entry: "./src/index.js",
  bail: false,
  mode,
  output: {
    path: path.resolve(__dirname, "docs"),
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: {
          loader: "worker-loader",
          options: { inline: true, fallback: false },
        },
      },
    ],
  },
  devtool,
  optimization,
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      template: "./src/index.html",
      inlineSource: ".js$",
    }),
    new HtmlWebpackInlineSourcePlugin(),
    // new ClosureCompilerPlugin({
    //   compiler: {
    //     language_in: "ECMASCRIPT6",
    //     language_out: "ECMASCRIPT5",
    //     compilation_level: "ADVANCED",
    //   },
    //   concurrency: 3,
    //   jsCompiler: true,
    // }),
  ],
};
