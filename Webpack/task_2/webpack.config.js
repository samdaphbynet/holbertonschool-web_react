const path = require('path');

module.exports = {
    mode: "production",
    entry: "./js/dashboard_main.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "public")
    },
    mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
}