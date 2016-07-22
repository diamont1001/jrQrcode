'use strict';

var require = (typeof require === 'undefined') ? function() {} : require;

require('./qrcode');

var jrQrcode = (function() {
	var _e = {};

	_e.getQrBase64 = function(text, options) {
        if (typeof text !== 'string') {
            text = '';
        }

        if (typeof options === 'string') {
            options = {text: options};
        } else if (typeof options !== 'object') {
            options = {};
        }

        // set default values
        options = Object.assign({
            padding: 10,
            width: 256,
            height: 256,
            typeNumber: -1,
            correctLevel: QRErrorCorrectLevel.H,
            background: '#ffffff',
            foreground: '#000000'
        }, options);

        try {
            options.text = utf16to8(text);	// 解决中文问题
        } catch (e) {
            options.text = '' + e;
        }

        var canvas = createCanvas(options);

        return canvas.toDataURL();
    };

    _e.QRErrorCorrectLevel = QRErrorCorrectLevel;

    function createCanvas(options) {
        // create the qrcode itself
        var qrcode = new QRCode(options.typeNumber, options.correctLevel);
        qrcode.addData(options.text);
        qrcode.make();

        // create canvas element
        var canvas = document.createElement('canvas');
        canvas.width = options.width;
        canvas.height = options.height;
        var ctx = canvas.getContext('2d');

        // compute tileW/tileH based on options.width/options.height
        var tileW = (options.width - options.padding * 2) / qrcode.getModuleCount();
        var tileH = (options.height - options.padding * 2) / qrcode.getModuleCount();

        // background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // draw in the canvas
        for (var row = 0; row < qrcode.getModuleCount(); row++) {
            for (var col = 0; col < qrcode.getModuleCount(); col++) {
                ctx.fillStyle = qrcode.isDark(row, col) ? options.foreground : options.background;
                var w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
                var h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));
                ctx.fillRect(Math.round(col * tileW) + options.padding, Math.round(row * tileH) + options.padding, w, h);
            }
        }
        
        return canvas;
    }

    function utf16to8(str) {
        var out, i, len, c;
        out = '';
        len = str.length;
        for (i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i);
            } else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            } else {
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
        }
        return out;
    }

    function utf8to16(str) {
        var out, i, len, c;
        var char2, char3;
        out = '';
        len = str.length;
        i = 0;
        while (i < len) {
            c = str.charCodeAt(i++);
            switch (c >> 4)
            {
                case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                // 0xxxxxxx
                out += str.charAt(i - 1);
                break;
                case 12: case 13:
                // 110x xxxx   10xx xxxx
                char2 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;
                case 14:
                    // 1110 xxxx  10xx xxxx  10xx xxxx
                    char2 = str.charCodeAt(i++);
                    char3 = str.charCodeAt(i++);
                    out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
                    break;
            }
        }
        return out;
    }

	return _e;
})();


window.jrQrcode = jrQrcode;
try {
    module.exports = jrQrcode;
} catch (e) {}
