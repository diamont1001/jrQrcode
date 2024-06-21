export interface JrQrcodeOptions {
    /** @default 10 */
    padding?: number;
    /** @default 256 */
    width?: number;
    /** @default 256 */
    height?: number;
    /** @default -1 */
    typeNumber?: number;
    /** @default QRErrorCorrectLevel.H */
    correctLevel?: QRErrorCorrectLevel;
    /** @default false */
    reverse?: boolean;
    /** @default #ffffff */
    background?: string;
    /** @default #000000 */
    foreground?: string;
}
export enum QRErrorCorrectLevel {
    L = 1,
    M = 0,
    Q = 3,
    H = 2,
}
export function getQrBase64(text: string, options?: JrQrcodeOptions): string;