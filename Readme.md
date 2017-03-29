# 二维码js生成库 #
把字符串生成二维码，并以Base64 URL形式输出

## 兼容性 ##
插件使用了H5的canvas特性进行二维码绘制，最后输出base64 url，因此本插件要求运行环境支持canvas特性即可。

## 安装 ##

```bash
npm install jr-qrcode
```

## 插件引用 ##
### 传统引用 ###

```
<script type="text/javascript" src="dist/jr-qrcode.js"></script>

<script>
  var imgBase64 = jrQrcode.getQrBase64('hello world');
</script>
```

### 模块化引用(比如：webpack) ###

```js
// 方法1：全局引用（window.jrQrcode）
require('jr-qrcode');

// 方法2：变量引用
var jrQrcode = require('jr-qrcode');
var imgBase64 = jrQrcode.getQrBase64('hello world');
```

## 用法 ##

```js
var imgBase64 = jrQrcode.getQrBase64(text, options);

/**
@param: text: 要生成二维码的字符，支持中文
@param: options: {
  padding       : 10,   // 二维码四边空白，默认为10px
  width         : 256,  // 二维码图片宽度，默认为256px
  height        : 256,  // 二维码图片高度，默认为256px
  correctLevel  : QRErrorCorrectLevel.H,    // 二维码容错level，默认为高
  background    : "#ffffff",    // 二维码颜色
  foreground    : "#000000"     // 二维码背景颜色
}
@return: 生成的二维码Base64 URL
*/
```

## 二维码容错级别 ##

```js
QRErrorCorrectLevel = {
  L : 1,
  M : 0,
  Q : 3,
  H : 2
};
```

## 线上例子  
*	[UC二维码Chrome插件](https://chrome.google.com/webstore/detail/uc-qr-code/nhelohnehpahakjoklmodmogclacjgdj?spm=0.0.0.0.Xew8fP&hl=zh-CN "UC二维码Chrome插件")
