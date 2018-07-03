
* 开发
    * 使用source map
    * 选择一个开发工具
        1. webpack's Watch Mode
        2. webpack-dev-server
        3. webpack-dev-middleware

* 模块热替换
    > 在运行时更新各种模块，而无需进行完全刷新
    * 启用HMR
    * 通过Node.js API
    * 实例问题
    * HMR修改样式表

* tree shaking
    * 添加一个通用模块
    * 将文件标记为无副作用
    * 压缩输出
* 生产环境构建
    * 配置
    * NPM Scripts
    * Minification
    * source map
    * 指定环境
    * Split CSS
    * CLI替代选项


（01）

初始化npm: npm -y

本地安装webpack，webpack-cli

lodash

npx webpack，将脚本作为入口起点，输出main.js

npx webpack --config webpack.config.js，输出main.js

使用--config选项表示，可以传递任何名称的配置文件。

如果webpack.config.js存在，webpack命令默认使用该脚本。package的scripts里设置"build":"webpack"。运行：npm run build

（02）

import文件
1. 加载 css文件。在module配置中 安装并添加style-loader和css-loader
2. 加载图片。使用file-loader
3. 加载字体。使用file-loader。file-loader和url-loader可以接收并加载任何文件
4. 加载数据。使用csv-loader和xml-loader

（03）

安装插件HtmlWebpackPlugin，自动修改index.html的设置

安装插件clean-webpack-plugin 清理/dist文件夹

（04）

source map。配置devtool

使用观察模式。"watch": "webpack --watch"  运行npm run watch。

使用webpack-dev-server，安装webpack-dev-server插件，设置devServer。"start":"webpack-dev-server --open"。运行npm start

使用webpack-dev-middleware，安装 express和webpack-dev-middleware。配置output。配置server.js。"server":"node server.js"。运行npm run server

（05）

启用HMR，设置devServer,plugin

（06）

sideEffects

压缩输出 配置mode："production"，也可以在命令行接口中使用--optimize-minimize标记，来使用UglifyJSPlugin，或直接安装插件uglifyjs-webpack-plugin

（07）

每个环境编写彼此独立的webpack配置。

保留一个通用配置，是环境和环境的共有配置。安装webpack-merge插件。将这些配置合并在一起。

配置npm scripts

鼓励在生产环境中启用source map

指定环境

（08）

开发环境和生产环境编写独立的webpack配置，它们存在一个共同的“通用”配置，使用webpack-merge同各自合并。安装webpack-merge插件




