const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
    entry: {
        main: [
            "babel-runtime/regenerator",
            "react-hot-loader/patch",
            "webpack-hot-middleware/client?reload=true",
            "./src/main.js"]
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devServer: {
        contentBase: "dist",
        overlay: true,
        hot: true,
        stats: {
            colors: true
        }
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: "babel-loader"
            }],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }
            ]
        }, {
            test: /\.html$/,
            use: [{
                loader: "html-loader",
            }]
        }, {
            test: /\.(jpg|gif|png)$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: "images/[name].[ext]"
                }
            }]
        }, {
            test: /\.md$/,
            use: [{
                    loader: "html-loader"
                }, {
                    loader: "markdown-loader"
                }]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};