'use strict';

const co = require('co');
const jrQrcode = require('../dist/jr-qrcode.js');
const decodeQr = require('./decodeQr');

describe('getQrBase64', function () {
  it('empty text', function (done) {
    co(function* () {
      const str = '';
      const data = jrQrcode.getQrBase64(str, {
        padding     : 10,   //二维码四边空白，默认为10px
        width       : 256,  //二维码图片宽度，默认为256px
        height      : 256,  //二维码图片高度，默认为256px
        correctLevel    : QRErrorCorrectLevel.H,    //二维码容错level，默认为高
        background      : "#ffffff",    //二维码颜色
        foreground      : "#000000"     //二维码背景颜色
      });

      const decoded = yield decodeQr(data);
      assert.strictEqual(str, decoded);
      done();
    });
  });

  it('text is not empty', function (done) {
    co(function* () {
      const str = 'jr-qrcode';
      const data = jrQrcode.getQrBase64(str, {
        padding     : 10,   //二维码四边空白，默认为10px
        width       : 256,  //二维码图片宽度，默认为256px
        height      : 256,  //二维码图片高度，默认为256px
        correctLevel    : QRErrorCorrectLevel.H,    //二维码容错level，默认为高
        background      : "#ffffff",    //二维码颜色
        foreground      : "#000000"     //二维码背景颜色
      });

      const decoded = yield decodeQr(data);
      assert.strictEqual(str, decoded);
      done();
    });
  });

  it('text has 空格', function (done) {
    co(function* () {
      const str = 'hello jr-qrcode';
      const data = jrQrcode.getQrBase64(str, {
        padding     : 10,   //二维码四边空白，默认为10px
        width       : 256,  //二维码图片宽度，默认为256px
        height      : 256,  //二维码图片高度，默认为256px
        correctLevel    : QRErrorCorrectLevel.H,    //二维码容错level，默认为高
        background      : "#ffffff",    //二维码颜色
        foreground      : "#000000"     //二维码背景颜色
      });

      const decoded = yield decodeQr(data);
      assert.strictEqual(str, decoded);
      done();
    });
  });

  it('text is 中文', function (done) {
    co(function* () {
      const str = '你好啊';
      const data = jrQrcode.getQrBase64(str, {
        padding     : 10,   //二维码四边空白，默认为10px
        width       : 256,  //二维码图片宽度，默认为256px
        height      : 256,  //二维码图片高度，默认为256px
        correctLevel    : QRErrorCorrectLevel.H,    //二维码容错level，默认为高
        background      : "#ffffff",    //二维码颜色
        foreground      : "#000000"     //二维码背景颜色
      });

      const decoded = yield decodeQr(data);
      assert.strictEqual(str, decoded);
      done();
    });
  });

  it('text is 中文 + 英文 + 数字 + 空格', function (done) {
    co(function* () {
      const str = '你好啊 hello 520 你好';
      const data = jrQrcode.getQrBase64(str, {
        padding     : 10,   //二维码四边空白，默认为10px
        width       : 256,  //二维码图片宽度，默认为256px
        height      : 256,  //二维码图片高度，默认为256px
        correctLevel    : QRErrorCorrectLevel.H,    //二维码容错level，默认为高
        background      : "#ffffff",    //二维码颜色
        foreground      : "#000000"     //二维码背景颜色
      });

      const decoded = yield decodeQr(data);
      assert.strictEqual(str, decoded);
      done();
    });
  });

  it('text is URL', function (done) {
    co(function* () {
      const str = 'http://m.pp.cn/home.html?debug=dev#footer';
      const data = jrQrcode.getQrBase64(str, {
        padding     : 10,   //二维码四边空白，默认为10px
        width       : 256,  //二维码图片宽度，默认为256px
        height      : 256,  //二维码图片高度，默认为256px
        correctLevel    : QRErrorCorrectLevel.H,    //二维码容错level，默认为高
        background      : "#ffffff",    //二维码颜色
        foreground      : "#000000"     //二维码背景颜色
      });

      const decoded = yield decodeQr(data);
      assert.strictEqual(str, decoded);
      done();
    });
  });

});
