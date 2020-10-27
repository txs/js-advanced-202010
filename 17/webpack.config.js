const path = require('path')

module.exports = {
    mode: "development",
    devtool: "none",
    entry:"./src/index.js", //進入點
    output:{
        filename: "bundle.js",
        path: path.resolve(__dirname,"dist")
    }
}