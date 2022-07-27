const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname,'src','index.js'),
        analytics: path.resolve(__dirname,'src','analytics.js')
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}