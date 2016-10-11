/**
 * 框架核心程序入口
 *
 * Created by Chenjr on 2016/04/11
 */

'use strict';

const koa = require('koa'),
    path = require('path'),
    serve = require('koa-static');

const app = global.app = koa();

// 静态目录
app.use(serve(path.join(__dirname, '../release'), {}));

module.exports = app;
