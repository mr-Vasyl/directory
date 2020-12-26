let sum = (e) => {
	let total = 0;
	for (let element of e) {
		if (typeof element !== 'number') {
			throw new TypeError(`${sum.name} elemens must be number`);
		}
		total += element;
	}
	return total;
};
let z = [ 1, 2, 3, 4, 5 ];
console.log(sum(z)); // 15
console.log(sum(1, 2, 3, 4, 5)); // e is not iterable
console.log(sum([ 1, 2, 'string' ])); // muts be number

// функція в масиві
let arr = [ (x) => x * x, 50 ];
console.log(arr[0](arr[1])); // 2500

//методи обєкта як функ.
let operators = {
	add: (x, y) => x + y,
	pow: Math.pow
};
function operator(f, a, b) {
	if (typeof operators[f] === 'function') {
		return operators[f](a, b);
	} else throw 'unknown operator';
}
console.log(operator('pow', 10, 2)); // 100

