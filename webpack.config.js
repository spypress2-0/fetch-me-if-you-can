const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, './build'),
        filename: "bundle.js",
    },
    devServer: {
        port: 8080,
        publicPath: '/public/',
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: 'node_modules',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/core", "@babel/preset-react", "@babel/preset-env"],
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: 'node_modules',
                use: ["style-loader", "css-loader"],
            }
        ]
    }
}