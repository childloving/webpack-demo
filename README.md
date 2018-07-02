
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


（01）

初始化npm: npm -y

本地安装webpack，webpack-cli

lodash

npx webpack，将脚本作为入口起点，输出main.js

npx webpack webpack.config.js，输出main.js

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


