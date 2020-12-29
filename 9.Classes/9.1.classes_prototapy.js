// простой класс
function range(from, to) {
	let r = Object.create(range.methods);
	r.from = from;
    r.to = to;
     console.log(r)
    return r;
   
}

range.methods = {
	includes(x) {
		return this.from <= x && x <= this.to;
	},
	*[Symbol.iterator]() { // робить обєкт ітеріруєм 
		for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
	},
	toString() {
		return '(' + this.from + '...' + this.to + ')';
	}
};

let r = range(1, 3);
// range . methods . i s PrototypeOf ( r ) ; 1 1 range . methods - объект прототипа
console.log(r.includes(2)); // true 2 входить в діапазон
console.log(r.toString()); // (1...3)
console.log([ ...r ]); // [1,2,3] через ітератор в масив

// класс конструктор
// простой класс
function Range(from, to) {
	this.from = from;
    this.to = to;  
}

Range.prototype = {
	includes: function(x) {
		return this.from <= x && x <= this.to;
	},
	[Symbol.iterator]: function*() { // робить обєкт ітеріруєм 
		for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
	},
	toString: function() {
		return '(' + this.from + '...' + this.to + ')';
	}
};

let r2 = new Range(1, 3);
console.log(r2.includes(2)); // true 2 входить в діапазон
console.log(r2.toString()); // (1...3)
console.log([ ...r2 ]); // [1,2,3] через ітератор в масив

// instanceof 
console.log(r2 instanceof Range) // true

