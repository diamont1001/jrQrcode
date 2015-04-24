/**
 * Created by Administrator on 2015/4/24.
 */

var jrQrcode = (function(){
    var getQrBase64 = function(text, options) {
        if(typeof options != "object") {
            options = {};
        }
        options.text = utf16to8(text);	//解决中文问题

        var divId = "jrqrcode-div-id-" + new Date().getTime();
        $(document.body).append('<div id="' + divId + '" style="display:none;"></div>');
        var $handle = $("#" + divId);

        $handle.qrcode(options);
        var pCanvas = $handle.children("canvas");
        var imgData = "";
        if(pCanvas.length >= 0){
            imgData = pCanvas[0].toDataURL();
        }
        $handle.remove();

        return imgData;
    };

    function utf16to8(str) {
        var out, i, len, c;
        out = "";
        len = str.length;
        for(i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i);
            } else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
            } else {
                out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
            }
        }
        return out;
    }

    function utf8to16(str) {
        var out, i, len, c;
        var char2, char3;
        out = "";
        len = str.length;
        i = 0;
        while(i < len) {
            c = str.charCodeAt(i++);
            switch(c >> 4)
            {
                case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                // 0xxxxxxx
                out += str.charAt(i-1);
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

    return {
        getQrBase64: getQrBase64
    }
})();