var webpack = require("webpack");
var path = require("path"); 

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    devtool: 'source-map',
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [ 
            {
                test: /\.scss$/,
                use: [
                  { loader: 'style-loader', options: { sourceMap: true } },
                  { loader: 'css-loader', options: { sourceMap: true } },
                  { loader: 'postcss-loader', options: { sourceMap: true } },
                  'resolve-url-loader',
                  'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                include: SRC_DIR,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["react", "env", "stage-2"]
                }
              }
        ]
    }
}

module.exports = config;