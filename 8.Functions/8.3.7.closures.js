
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

let c = counter(1000)
console.log(c.count) // 1000
console.log(c.count) //1001
console.log(c.count = 2000); // 2000
console.log(c.count) //2000
console.log(c.count = 2000); //значення не бути меншим 