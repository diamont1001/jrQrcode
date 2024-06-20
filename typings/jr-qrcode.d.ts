declare module "jr-qrcode" {
  interface JrQrcodeOptions {
    padding?: number;
    width?: number;
    height?: number;
    typeNumber?: number;
    correctLevel?: QRErrorCorrectLevel;
    reverse?: boolean;
    background?: string;
    foreground?: string;
  }
  enum QRErrorCorrectLevel {
    L = 1,
    M = 0,
    Q = 3,
    H = 2,
  }

  function getQrBase64(text: string, options?: QROptions | string): string;
  export { getQrBase64, QRErrorCorrectLevel };
}
