'use strict';

require('./assign-polyfill.js');
require('./qrcode.js');

var Encode = require('./encode.js');

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
            reverse: false,
            background: '#ffffff',
            foreground: '#000000'
        }, options);

        try {
            options.text = Encode.utf16to8(text);    // 解决中文问题
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
        if (options.reverse) {
          var transparent = 'rgba(0, 0, 0, 0)';
          ctx.fillStyle = transparent;
          options.foreground = transparent;
        } else {
          ctx.fillStyle = options.background;
        }
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

    return _e;
})();

!window.jrQrcode && (window.jrQrcode = jrQrcode);

module.exports = jrQrcode;
