---
icon: edit
date: 2022-10-29
category:
  - Nodejs
tag:
  - 介绍
  - Node
---
# Nodejs

## 简介
2009 年初 Node.js 出现，它是由 Ryan Dahl 基于 Chrome V8 引擎开发的 JavaScript 运行时环境（Runtime），所以 Node.js 也是 JavaScript 的一种宿主环境。它的底层就是我们所熟悉的 Chrome 浏览器的 JavaScript 引擎。

### 与浏览器JS环境的区别点
- 因为 Node.js 不是浏览器，所以它不具有浏览器提供的 DOM API，比如 Window 对象、Location 对象、Document 对象、HTMLElement 对象、Cookie 对象等。
- Node.js 提供了自己特有的 API，比如全局的 global 对象，也提供了当前进程信息的 Process 对象，操作文件的 fs 模块，以及创建 Web 服务的 http 模块等等

### 与浏览器JS环境的相同点
如 JavaScript 引擎的内置对象，它们由 V8 引擎提供。常见的还有：
- 基本的常量 undefined、null、NaN、Infinity；
- 内置对象 Boolean、Number、String、Object、Symbol、Function、Array、Regexp、Set、Map、Promise、Proxy；
- 全局函数 eval、encodeURIComponent、decodeURIComponent等等。
此外，还有一些方法不属于引擎内置 API，但是两者都能实现，比如 setTimeout、setInterval 方法，Console 对象等等。

## 基础架构

<img :src="$withBase('/notes/nodejs介绍.PNG')" alt="Nodejs基础架构图">

### 底层
Node.js 是运行在操作系统之上的，它底层由 V8 JavaScript 引擎，以及一些 C/C++ 写的库构成，包括 libUV 库、c-ares、llhttp/http-parser、open-ssl、zlib 等等。
- libUV 负责处理事件循环
- c-ares 提供 DNS 解析
- llhttp/http-parser 包含 HTTP 协议
- open-ssl 提供 HTTPS 
- zlib 提供文件压缩功能

### 中间层
在底层的上一层是中间层，中间层包括Node.js Bindings、Node.js Standard Library以及C/C++ AddOns。
- Node.js Bindings层的作用是将底层那些用 C/C++ 写的库接口暴露给 JS 环境
- Node.js Standard Library是 Node.js 本身的核心模块
- C/C++ AddOns可以让用户自己的 C/C++ 模块通过桥接的方式提供给Node.js。

### API 层
中间层之上就是 Node.js 的 API 层了，我们使用 Node.js 开发应用，主要是使用 Node.js 的 API 层，所以 Node.js 的应用最终就运行在 Node.js 的 API 层之上。

- File System 模块：这是操作系统的目录和文件的模块，提供文件和目录的读、写、创建、删除、权限设置等等。
- Net 模块：提供网络套接字 socket，用来创建 TCP 连接，TCP 连接可以用来访问后台数据库和其他持久化服务。
- HTTP 模块：提供创建 HTTP 连接的能力，可以用来创建 Web 服务，也是 Node.js 在前端最常用的核心模块。
- URL 模块：用来处理客户端请求的 URL 信息的辅助模块，可以解析 URL 字符串。
- Path 模块：用来处理文件路径信息的辅助模块，可以解析文件路径的字符串。
- Process 模块：用来获取进程信息。
- Buffer 模块：用来处理二进制数据。
- Console 模块：控制台模块，同浏览器的Console模块，用来输出信息到控制台。
- Crypto 加密解密模块：用来处理需要用户授权的服务。
- Events 模块：用来监听和派发用户事件。

### API 精选

正在施工中......
