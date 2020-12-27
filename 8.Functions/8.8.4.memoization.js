// memoize
function memoize(f) {
	const cache = new Map();
	return function(...args) {
		let key = args.length + args.join('+');
		if (cache.has(key)) {
			return cache.get(key);
		} else {
			let result = f.apply(this, args);
			cache.set(key, result);
			return result;
		}
	};
}

// алгоритм Евклида - знайти найбільшого ділитиля
function gsd(a, b) {
	if (a < b) {
		[ a, b ] = [ b, a ];
		while (b !== 0) {
			[ a, b ] = [ b, a % b ];
		}
		return a;
	}
}

// факториал числа
function factorial(n) {
	return n <= 1 ? 1 : n * factorial(n - 1);
}

const gsdmemo = memoize(gsd);
const factorialmemo = memoize(factorial);
console.log(gsdmemo(85, 187));
console.log(factorialmemo(5));
