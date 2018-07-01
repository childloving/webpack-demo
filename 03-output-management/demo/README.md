预先准备

    entry:{
        app:'./src/index.js',
        print:'./src/print.js'
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    }
这里webpack解析到js，就生成对应的文件名称。
index.html里面还是手动修改


### 使用HtmlWebpackPlugin
自动修改index.html里面的title名称

    npm install --save-dev html-webpack-plugin

### 清理/dist文件夹
每次构建前清理/dist文件夹

    npm install clean-webpack-plugin --save-dev

