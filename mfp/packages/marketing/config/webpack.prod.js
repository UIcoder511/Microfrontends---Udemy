const { ModuleFederationPlugin } = require("webpack").container;
const { dependencies } = require("../package.json");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
