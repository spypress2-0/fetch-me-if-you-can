const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./client/index.js",
  devServer: {
    contentBase: path.join(__dirname, "/public"),
    port: 8080,
    publicPath: "/build/",
    proxy: { "/api": "http://localhost:8080/" }
  },
  output: {
    path: path.join(__dirname, "./build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
