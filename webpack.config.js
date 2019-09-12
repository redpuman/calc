const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.less/,
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                        modules: true
                    }
                }, "less-loader"]
            },
            {
                test: /\.ttf/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]",
                    }
                }
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist",
        hotOnly: true
    },
    devtool: "source-map",
    plugins: [new webpack.HotModuleReplacementPlugin()]
};