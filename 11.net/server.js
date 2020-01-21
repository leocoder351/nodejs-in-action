const net = require("net");

const server = net.createServer(socket => {
  socket.on("data", buffer => {
    const lessonid = buffer.readInt16BE();
  });
});

server.listen(4000);

const data = {
  136797: "01 | 课程介绍",
  136798: "02 | 内容描述",
  136799: "03 | Node.js 是什么？",
  136800: "04 | Node.js 可以用来做什么？",
  136801: "05 | 课程实战目录介绍",
  136802: "06 | 什么是技术预研？",
  136803: "07 | Node.js 开发环境安装",
  136804: "08 | 第一个 Node.js 程序：石头剪刀布游戏",
  136805: "09 | 模块：CommonJS 规范",
  136806: "10 | 模块：使用模块规范改造石头剪刀布游戏",
  136807: "11 | 模块：npm",
  136808: "12 | 模块：Node.js 内置模块",
  136809: "13 | 异步：非阻塞 I/O",
  136900: "14 | 异步：异步编程之 Callback",
  136901: "15 | 异步：事件循环",
  136902: "16 | 异步：异步编程之 Promise",
  136903: "17 | 异步：异步编程之 async/await",
  136904: "18 | HTTP：什么是 HTTP 服务器？",
  136905: "19 | HTTP：简单实现一个 HTTP 服务器"
};
