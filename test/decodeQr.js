'use strict';

const jsQR = require("jsqr");
const Encode = require('../lib/encode.js');

module.exports = function(base64Url, width, height) {
  return new Promise(resolve => {
    width = width ? width : 256;
    height = height ? height : 256;

    const image = new Image();
    image.src = base64Url;

    image.onload = function() {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, width, height);

      const imageData = ctx.getImageData(0, 0, width, height);

      const decoded = Encode.utf8to16(jsQR.decodeQRFromImage(imageData.data, imageData.width, imageData.height));

      resolve(decoded);
    };
  });
}
