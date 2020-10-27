const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output:{
        filename: "bundle.js",
        path: path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test: /\.m？js$/, // js 檔案的RegExp
                exclude: /(node_modules)/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/, // css 檔案的RegExp
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // 圖片檔案的RegExp
                use:[
                    "file-loader"
                ]
            }
        ]
    }
};