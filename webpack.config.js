const path = require("path");
const miniCss = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [miniCss.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new miniCss({
      filename: "style.css",
    }),
  ],
};
