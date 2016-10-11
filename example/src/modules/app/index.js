/**
 * Created by Chenjr on 2015/7/9.
 */

require('../base/reset.less');
require('./index.less');

var $ = require('lib1/zepto/main'),
    header2 = require('./header2/header2'),
    jrQrcode = require('../../../../dist/jr-qrcode.js');

header2.render(document.getElementById('headerWrap'));
header2.setTitle('detail');

$('#btnOk').click(function(ev) {
	var text = $('#inputText').val().trim();
	var url = jrQrcode.getQrBase64(text, {
		padding     : 10,   //二维码四边空白，默认为10px
	    width       : 256,  //二维码图片宽度，默认为256px
	    height      : 256,  //二维码图片高度，默认为256px
	    correctLevel    : QRErrorCorrectLevel.H,    //二维码容错level，默认为高
	    background      : "#ffffff",    //二维码颜色
	    foreground      : "#000000"     //二维码背景颜色
	});
	console.log(url);
	$('#imgQrCode').attr('src', url);
});
