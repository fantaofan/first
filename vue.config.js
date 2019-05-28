module.exports = {
  // devServer wepack下的服务器插件
  devServer: {
    // proxy 代理
    proxy: {
      // '/' 是我要代理的路径
      // target目标地址 访问 /的时候等于访问http://localhost:3000
      // changeOrigin 是否改变域名
      // pathRewrite 路径重写
      // ws 是否代理WebSocket
      "/": {
        target: "http://localhost:3000",
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          "^/": ""
        }
      }
    }
    // proxy: 'http://localhost:3000'
  }
};
