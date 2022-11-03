const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
new CopyWebpackPlugin({
  patterns: [
    {
      from: "node_modules/html5-qrcode/minified/html5-qrcode.min.js",
      to: `static/js/html5-qrcode.min.js`,
    },
  ],
});
new HtmlWebpackTagsPlugin({
  tags: ["/static/js/html5-qrcode.min.js"],
  append: true,
  publicPath: false,
});
