# 二维码js生成库
把字符串生成二维码，并以Base64 URL形式输出

## 插件引用  
如果页面上已有jQuery或者zepto，则不用再引入zepto.min.js

    <script type="text/javascript" src="dist/zepto.min.js"></script>
	<script type="text/javascript" src="dist/jr-qrcode.min.js"></script>

## 用法
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

## 二维码容错级别
    var QRErrorCorrectLevel = {
    	L : 1,
    	M : 0,
    	Q : 3,
    	H : 2
    };
