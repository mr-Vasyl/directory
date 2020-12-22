let objCreat = Object.create();
let usualobj = {};
let newObj = new Object();

let unitcircle = { r: 1 };
let c = Object.create(unitcircle); // наслідуэмось
c.x = 1;
c.y = 1;
c.r = 2;
unitcircle.r; // 1: прототип не тронутий

// защита від underfind or null
let book = { author: { name: 'Vasyl' } };
//1
let surname = undefined;
if (book) {
	if (book.author) {
		surname = book.author.name;
	}
}
console.log(surname);
//2
let surname2 = null;
surname2 = book && book.author && book.author.name;
console.log(surname2); // vasyl

// створюэмо свойство глобального обєкта
('use strict');
globalThis.x = 1;
console.log(delete globalThis.x); // true

// проверка свойств
let o = { x: 4 };
'x' in o; // true
'y' in o; // false
'toString' in o; // true
// hasOwnProperty() or ropertyIsEnumerable() собственное свойство обекта

let arr = { x: 1, b: 2, c: 3 };
for (let a in arr) {
	console.log(a);
}
// проверка щоб не наслідувати методи
for (let a in arr) {
	if (typeof arr[a] === 'function') continue; // пропускаэ
}

// копія свойчтв
let target = { x: 1 },
	source = { y: 2, z: 3 };
for (let key of Object.keys(source)) {
	target[key] = source[key];
}
console.log(target);

let copy = Object.assign(target, source);
console.log(copy);

// серіалізація обєктів 
let objJeson = { x: 2, array: [ 1, 2, 3, 4, 5 ], z: { a: 3, b: 4 } };
let s = JSON.stringify(objJeson);
let k = JSON.parse(s);
console.log({ s: s, k: k });
console.log([ typeof s, typeof k ]);
