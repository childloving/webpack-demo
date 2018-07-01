### source map
多个js打包到一个bundle中，如果一个源js包含错误，那么就会简单指向bundle.js里。
javascript提供source map功能，将编译后的代码映射回原始源代码。例如一个错误来自b.js，source map就会明确告诉你。

使用后，浏览器控制台报错会提示错误位置的文件和行数

### 选择一个开发工具
使用webpack-dev-middleware

    npm install --save-dev express webpack-dev-middleware

该示例是一个 webpack-dev-middleware配合express server的示例

需要在输出 publicPath
用node开启server.js

该示例设置 也必须手动刷新。
