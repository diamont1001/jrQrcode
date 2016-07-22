# 二维码js生成库 #
把字符串生成二维码，并以Base64 URL形式输出

## 兼容性 ##
插件使用了H5的canvas特性进行二维码绘制，最后输出base64 url，因些本插件要求运行环境支持canvas特性即可。

## 安装 ##
	npm install jr-qrcode

## 插件引用 ##
### 传统引用 ###
	<script type="text/javascript" src="release/jr-qrcode.js"></script>
### 模块化引用(比如：webpack) ###
	require('jr-qrcode');

## 用法 ##
    var imgBase64 = jrQrcode.getQrBase64(text, options);

    @param: text: 要生成二维码的字符，支持中文
    @param: options: {
        padding		: 10,   //二维码四边空白，默认为10px
        width		: 256,  //二维码图片宽度，默认为256px
        height		: 256,  //二维码图片高度，默认为256px
        correctLevel	: QRErrorCorrectLevel.H,    //二维码容错level，默认为高
        background      : "#ffffff",    //二维码颜色
        foreground      : "#000000"     //二维码背景颜色
    }
    @return: 生成的二维码Base64 URL

## 二维码容错级别 ##
    QRErrorCorrectLevel = {
    	L : 1,
    	M : 0,
    	Q : 3,
    	H : 2
    };
