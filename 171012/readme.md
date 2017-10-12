### http://task.grdoc.com/index.php?m=my&f=index  禅道的网址
### webpack 打包以及结合Avalon的项目的配置
###  webpack 中_dirname  是根目录

###  webpack 的基础配置  
```
    1. js  公共模块的打包  CommonsChunkPlugin
    2. css 单独打包 extract-text-webpack-plugin
    3. html 的打包  html-webpack-plugin
    4. 图片和字体的loader url-loader file-loader
    5. 如何引入jQuery 等一些第三方的插件和库 如何avalon，angularjs 等   ProvidePlugin
    6. 调用 浏览器自动打开并且进行自动刷新   open-browser-webpack-plugin
```