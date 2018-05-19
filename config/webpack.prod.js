const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");



module.exports = env => {
    return {
        entry: {
            main: "./src/main.js"
        },
        mode: "production",
        output: {
            filename: "[name]-bundle.js",
            path: path.resolve(__dirname, "../dist"),
            publicPath: "/"
        },
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
                        loader: MiniCSSExtractPlugin.loader
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
                test: /\.(jpg|gif|png|svg)$/,
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
            new OptimizeCssAssetsPlugin(),
            new MiniCSSExtractPlugin({
                filename: "[name]-[contenthash].css"
            }),
            new HTMLWebpackPlugin({
                template: "./src/index.html"
            }),
            new webpack.DefinePlugin({
                "process.env": {
                    "NODE_ENV": JSON.stringify(env.NODE_ENV)
                }
            }),
            new MinifyPlugin(),  
            new CompressionPlugin({
                algorithm: "gzip"
            }),
            new BrotliPlugin()         
        ]
    }   
};