const { defineConfig } = require("@vue/cli-service");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: (config) => {
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: false,
              drop_debugger: true,
            },
            output: {
              comments: false,
            },
            mangle: true,
          },
        }),
      ],
    };
  },
});
