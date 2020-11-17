// webpack.config.dev.js
const path = require("path")
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        "./src/index"
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.m？js$/, // js 檔案的RegExp
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/, // css 檔案的RegExp
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.html$/, // html 檔案的RegExp
                use: [
                    "raw-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // 圖片檔案的RegExp
                use: [
                    "file-loader"
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true
    }
};