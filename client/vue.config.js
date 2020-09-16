const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../server/dist"),
  devServer: {
    proxy: {
      "router/": {
        target: "http://localhost:3000/",
      },
    },
  },
};
