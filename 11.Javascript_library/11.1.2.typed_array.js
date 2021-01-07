Int8Array(); // signed bytes
Uint8Array(); // unsigned bytes
Uint8ClampedArray(); // unsigned bytes without rollover
Int16Array(); // signed 16-bit short integers
Uint16Array(); // unsigned 16-bit short integers
Int32Array(); //signed 32-bit integers
Uint32Array(); // unsigned 32-bit integers
BigInt64Array(); // signed 64-bit BigInt values (ES2020)
BigUint64Array(); // unsigned 64-bit BigInt values (ES2020)
Float32Array(); // 32-bit floating-point value
Float64Array(); // 64-bit floating-point value: a regular JavaScript number

// Date
let now = new Date(2100, 0, 1, 2, 3, 4, 5);
console.log(now);

let country = new Date(Date.UTC(2100, 0, 1));
console.log(country.toUTCString); // Англыя

let startTime = Date.now();
console.log('----------');
let endTime = Date.now();
console.log(Date.now(`різниця ${endTime - startTime}ms.`));

let d = new Date(2020, 0, 1, 17, 10, 30);
console.log(d.toString()); // Wed Jan 01 2020 17:10:30 GMT+0200 (GMT+02:00)

class HTTPError extends Error {
	constructor(status, statusText, url) {
		super(`${status} ${statusText}: ${url}`);
		this.status = status;
		this.statusText = statusText;
		this.url = url;
	}
	get name() {
		return 'HTTPError';
	}
}

let error = new HTTPError(404, 'Not Found', 'http://example.com/');
console.log(error.status); // => 404
console.log(error.message); // => "404 Not Found: http://example.com/"
console.log(error.name); // => "HTTPError"
