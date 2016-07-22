// jest.unmock('../lib/qrcode');
jest.unmock('../lib/jr-qrcode.js');

describe('generate a qrcode in base64 url', () => {
	it('getQrBase64("hello中文测试")', () => {
		const jrQrcode = require('../lib/jr-qrcode.js');
		expect(jrQrcode.getQrBase64('hello中文测试')).toContain("data:image");
	});
});