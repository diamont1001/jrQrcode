# 二维码js生成库 #
把字符串生成二维码，并以Base64 URL形式输出。
支持白色二维码，即反色二维码。

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

// 模块方法调用，传入字符串，获取 base64 编码的图片 URL
var imgBase64 = jrQrcode.getQrBase64('hello world');
```

## 用法 ##

```js
var imgBase64 = jrQrcode.getQrBase64(text, options);

/**
@param: text: 要生成二维码的字符，支持中文
@param: options: {
  padding       : 10,   // 二维码四边空白（默认为10px）
  width         : 256,  // 二维码图片宽度（默认为256px）
  height        : 256,  // 二维码图片高度（默认为256px）
  correctLevel  : QRErrorCorrectLevel.H,    // 二维码容错level（默认为高）
  reverse       : false,        // 反色二维码，二维码颜色为上层容器的背景颜色
  background    : "#ffffff",    // 二维码背景颜色（默认白色）
  foreground    : "#000000"     // 二维码颜色（默认黑色）
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

## Use cases
If you are using jrQrcode in production, just tell us.

*	[Jr二维码 Chrome 插件](https://chrome.google.com/webstore/detail/jr-qr/efgpdlpahaaoimppgenfinecaaiebeai)，源码在『[这里](https://github.com/diamont1001/chrome-extensions-qr)』

![](https://raw.githubusercontent.com/diamont1001/jrQrcode/master/docs/chrome-extensions-qr.png)

* [豌豆荚直搜器 Chrome 插件](https://chrome.google.com/webstore/detail/%E8%B1%8C%E8%B1%86%E8%8D%9A%E7%9B%B4%E6%90%9C/eafahahbkiojhlhllnpajnnpfngkpdfn)

![](https://raw.githubusercontent.com/diamont1001/jrQrcode/master/docs/chrome-extensions-wdj.png)
