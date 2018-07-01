const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// 告诉express使用webpack-dev-middleware和使用webpack.config.js
// 处理文件的基础
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

// 开启服务，端口为3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});