### 通过Node.js API

> 本指南继续沿用开发指南中的代码示例。

模块热替换(Hot Module Replacement 或 HMR)是 webpack 提供的最有用的功能之一。它允许在运行时更新各种模块，而无需进行完全刷新。本页面重点介绍实现，而概念页面提供了更多关于它的工作原理以及为什么它有用的细节。

> HMR 不适用于生产环境，这意味着它应当只在开发环境使用。更多详细信息，请查看生产环境构建指南。

### 启用 HMR
启用此功能实际上相当简单。而我们要做的，就是更新 webpack-dev-server 的配置，和使用 webpack 内置的 HMR 插件。我们还要删除掉 print.js 的入口起点，因为它现在正被 index.js 模式使用。

> 如果你使用了 webpack-dev-middleware 而没有使用 webpack-dev-server，请使用 webpack-hot-middleware package 包，以在你的自定义服务或应用程序上启用 HMR。