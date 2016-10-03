const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AssetsPlugin      = require('assets-webpack-plugin');
module.exports = {
    entry: "./src/app",
    plugins: [
        new ExtractTextPlugin("[name].[hash].css"),
        new AssetsPlugin({path: path.join(__dirname, 'dist')})
    ],
    output: {
        path: path.join(__dirname, "./dist"),
        publicPath: "/",
        filename: "[name].[hash].js"
    },
    module: {
        loaders: [
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
            {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'},
            {
                test: /(\.css)$/,
                //loader: "style-loader!css-loader"
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    }
};