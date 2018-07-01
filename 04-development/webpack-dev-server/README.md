### source map
多个js打包到一个bundle中，如果一个源js包含错误，那么就会简单指向bundle.js里。
javascript提供source map功能，将编译后的代码映射回原始源代码。例如一个错误来自b.js，source map就会明确告诉你。

使用后，浏览器控制台报错会提示错误位置的文件和行数

### 选择一个开发工具
使用webpack-dev-server

    npm install --save-dev webpack-dev-server

需要修改配置文件，告诉开发服务器（dev server），在哪里查找文件
还需要添加script脚本，可以直接运行开发服务器(dev server)

npm start 运行后，自动编译localhost:8080为打开地址