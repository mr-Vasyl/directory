let factorial = (x) => {
	if (x <= 1) return 1;
	return x * factorial(x - 1);
};
console.log(factorial(5)); // 120

const f = (v = 2) => {
	return { value: v };
};
console.log(f());

// f?...(x) равно (f !==null && f !== undifened ? f(x) : undefined)

let getPropertyNames = (o, a) => {
	if (a === undefined) a = [];
	// a = a || [];
	for (let property in o) a.push(property);
	return a;
};
let o = { x: 1 },
	p = { c: 2, y: 3, z: 4 };
let a = getPropertyNames(o); // x
console.log(getPropertyNames(p, a)); // x, c, y, z

const reactangle = (width, height = width * 2) => ({ width, height });
console.log(reactangle(5)); // 5, 10

// Знайти найбыльше число
let max = (first, ...rest) => {
	let maxValue = first;
	for (let n of rest) {
		if (n > maxValue) {
			maxValue = n;
		}
	}
	return maxValue; // 100
};
console.log(max(2, 3, 4, 100, 50));
// раніше
function max2(x) {
	let maxValue = -Infinity;
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] > maxValue) maxValue = arguments[i];
	}
	return maxValue;
}
console.log(max2(2, 3, 4, 100, 50)); // 100

// сума чисел між 1 i n
let timed = (f) => {
	return (...args) => {
		console.log(`Entering function ${f.name}`);
		let startTime = Date.now();
		try {
			return f(...args);
		} finally {
			console.log(`exit with ${f.name} after ${Date.now() - startTime} mc`);
		}
	};
};

let benchmark = (n) => {
	let sum = 1;
	for (let i = 1; i <= n; i++) {
		sum += i;
		console.log(sum);
	}
	return sum;
};
console.log(timed(benchmark)(100)); // 5050
