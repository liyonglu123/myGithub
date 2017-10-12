var webpack = require('webpack');
var path = require('path');
// 浏览器的自动打开
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// css 单独打包的插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// html 单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin')
// 处理多个HTML的方法
var getHTMLTepl = function (name) {
    return {
        template: './src/views/'+ name +'.html',
        filename: 'view/'+ name +'.html',
        inject: true,
        hash: true,
        chunks: ['common', name] // 加载指定的js文件 否则回自动加载全部的js文件
    }
}

var config = {
    entry: {
       'common':  [ './src/pages/common/index.js'],
       'index': [ './src/pages/index/index.js'],
       'about': [ './src/pages/about/about.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            // { test: /\.css$/, loader: "style-loader!css-loader"},
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader") },
            { test: /\.(gif|png|jpg|jpeg|woff|svg|eot|ttf)\??.*$/, loader: "url-loader?limit=100&name=resource/[name].[ext]" },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename: 'js/base.js'
        }),
        new ExtractTextPlugin("css/[name].css"),
        new HtmlWebpackPlugin(getHTMLTepl('index')),
        new HtmlWebpackPlugin(getHTMLTepl('about')),
        //  引入一些第三方库和插件
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            avalon: 'avalon2'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080/dist/view/index.html'
        })
    ]
}
module.exports = config;
