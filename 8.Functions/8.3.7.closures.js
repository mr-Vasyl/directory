// Closures
let counter = (n) => {
	return {
		get count() {
			return n++;
		},
		set count(m) {
			if (m > n) n = m;
			else throw Error('значення не може бути менше');
		}
	};
};

let c = counter(1000);
console.log(c.count); // 1000
console.log(c.count); //1001
console.log((c.count = 2000)); // 2000
console.log(c.count); //2000
console.log((c.count = 2000)); //значення не бути меншим

let addPrivateProperty = (o, name, predicate) => {
	let value;
	o[`get${name}`] = () => value;
	o[`set${name}`] = (v) => {
		if (predicate && !predicate(v)) {
			throw new TypeError(`set${name} : недопустимое значение ${v}`);
		} else {
			value = v;
		}
	};
};
let o = {};
addPrivateProperty(o, 'Name', (x) => typeof x === 'string');
o.setName('Frank'); // установить знавчення свойства
console.log(o.getName()); // Frank
//o.setName(0); // TypeError недопустимое значение ${v}`);
o.setName('aurezio');
console.log(o.getName());

console.log(addPrivateProperty.name);

// bind
function f(y) {
	return this.x + y;
}
let obj = { x: 2 };
let func = f.bind(obj);
console.log(func(2)); // 4

// знайти середню велечину масива
let data = [ 1, 2, 3, 4, 5 ];
const sum = (x, y) => x + y;
let mean = data.reduce(sum) / data.length;
console.log(mean);

// function вищого порядка
function not(f) {
	return function(...args) {
		let result = f.apply(args);
		return !result;
	};
}
const even = (x) => x % 2 === 0;
const odd = not(even);
console.log([ 1, 3, 5, 5 ].every(odd));

// збільшити числа масива на 1
let mapper = (f) => (a) => a.map(f);
const increment = (x) => x + 1;
const incrementAll = mapper(increment);
console.log(incrementAll([ 1, 2, 3 ])); // 2,3,4

// знайти квадрат суми чисел

{
	function compose(f, g, ...args) {
		return function(...args) {
			return f.call(this, g.apply(this, args));
		};
	}
	const sum = (x, y) => x + y;
	const square = (x) => x * x;
	console.log(compose(square, sum)(2, 3)); // 25
}

