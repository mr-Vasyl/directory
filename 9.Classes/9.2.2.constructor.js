class Complex {
	constructor(real, imaginary) {
		this.r = real;
		this.i = imaginary;
	}

	plus(that) {
		return new Complex(this.r + that.r, this.i + that.i);
	}
	times(that) {
		return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r);
	}

	static sum(c, d) {
		return c.plus(d);
	}
	static product(c, d) {
		return c.times(d);
	}

	get real() {
		return this.r;
	}
	get imaginary() {
		return this.i;
	}
	get magnitude() {
		return Math.hypot(this.r, this.i);
	}
	toString() {
		return `${this.r},${this.i}`;
	}

	equals(that) {
		return that instanceof Complex && this.r === that.r && this.i === that.i;
	}
}

Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

let c = new Complex(2, 3);
console.log(c);
let d = new Complex(c.i, c.r);
console.log(d);
console.log(c.plus(d).toString()); // {5,5}
console.log(c.magnitude);
console.log(Complex.product(c, d)); // new Cmoplex(0.13)
console.log(Complex.ZERO.toString()); // {0,0}
console.log(Complex);

// вивести f n-разів
class Number {}
let n = 3;
let f = (i) => console.log(`hellO ${i}`);

Number.prototype.times = function(n) {
	for (let i = 0; i < n; i++) f(i);
};
let b = new Number();
console.log(b.times(n)); //hello0, hello1, hello2
