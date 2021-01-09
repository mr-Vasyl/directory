//  let sum = 0;
//  for (let i of [ 1, 2, 3 ]) {
//	sum += i;
// }
// console.log(sum);

let chars = [ ...'char' ];
console.log(chars); // c,h,a,r

let d = [ 1, 2, 3, 4, 5 ];
console.log(Math.max(...d)); // 5

let [ a, b, c, s, e ] = d;
console.log(s); // 4

let m = new Map([ [ 'one', 2 ], [ 'two', 45 ] ]);
for (let [ k, v ] of m) {
	console.log(k, v); //one 2
	//two 45
}

console.log({ 1: [ m.keys() ], 2: [ m.values() ] });

class Range {
	constructor(from, to) {
		this.from = from;
		this.to = to;
	}
	/*has(x) {
		return typeof x === 'number' && this.from <= x <= this.to;
	}
	toString() {
		return `x --- ${this.from} < x < ${this.to}`;
	}*/
	[Symbol.iterator]() {
		let next = Math.ceil(this.from);
		let last = this.to;
		return {
			next() {
				return next <= last ? { value: next++ } : { done: true };
			}
		};
	}
}

for (let x of new Range(1, 10)) {
	console.log(x); // 1,2,3,4,.....
}
console.log([ ...new Range(-2, 2) ]); // [ -2, -1, 0, 1, 2 ]

// генератор який ітерується у функц
const seq = function*(from, to) {
	for (let i = from; i <= to; i++) {
		yield i;
	}
};
console.log([ ...seq(2, 6) ]); // [ 2, 3, 4, 5, 6 ]

let sum = 0;
for (let prime of seq(2, 6)) {
	sum += prime;
}
console.log(sum); // 20

// проста функ
const seqs = function(from, to) {
	let arr = [];
	for (let i = from; i <= to; i++) {
		arr.push(i);
	}
	return arr;
};
console.log(seqs(2, 6));

// генератор обэкта по свойствах
let o = {
	x: 1,
	y: 2,
	z: 3,
	*g() {
		for (let key of Object.keys(this)) {
			yield key;
		}
	}
};
console.log([ ...o.g() ]);

// генератор класса
class Gener {
	constructor(from, to) {
		this.from = from;
		this.to = to;
	}
	*[Symbol.iterator]() {
		for (let x = this.from; x <= this.to; x++) {
			yield x;
		}
	}
}
console.log([ ...new Gener(2, 8) ]); // 2,3,4,5,6,7,8

// чередовать елементи передаваямих обектов
function* zip(...iterables) {
	console.log(iterables);
	let iterators = iterables.map((i) => i[Symbol.iterator]());
	console.log(iterators);
	let index = 0;
	while (iterators.length > 0) {
		if (index >= iterators.length) {
			index = 0;
		}
		let item = iterators[index].next();
		if (item.done) {
			iterators.splice(index, 1);
		} else {
			yield item.value;
			index++;
		}
	}
}
console.log([ ...zip([ 23, 54, 65 ], 'abc', [ 2222 ]) ]); // 23 'a', 2222,54,  'b', 65,'c']

// по порядку
function* sens(...iterables) {
	for (let iterable of iterables) {
		for (let item of iterable) {
			yield item;
		}
	}
}
console.log([ ...sens([ 12, 34, 455 ], 'hgdf') ]);

// по порядку c yeild
function* sens(...iterables) {
	for (let iterable of iterables) {
		yield* iterable;
	}
}
console.log([ ...sens([ 12, 34, 455 ], 'hgdf') ]);
