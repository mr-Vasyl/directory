let array1 = [ 2, 3, 4 ];
console.log(array1[array1.length - 1]); // останній елемент масива
let array2 = [ 45, ...array1, 3 ];
console.log(array2);

let digits = [ ...'hello_world' ];
console.log(digits); // 'h', 'e', 'l', 'l','o', '_', 'w', 'o','r', 'l', 'd'
// видалення дублів
console.log([ ...new Set(digits) ]); //'h', 'e', 'l','o', '_', 'w','r', 'd

// array from
console.log(Array.from('foo')); // [ 'f', 'o', 'o' ]
console.log(Array.from([ 2, 4, 5 ], (x) => x * x)); // [ 4, 16, 25 ]

let a = [ 1, 2, 3, 4 ];
a.length = 3;
console.log(a); // 3
a.length = 0;
console.log(a); // 0

a.push('twenty');
a[1] = 'five';
console.log(a);

// for/of
let letters = [ ...'hello worlds' ];
let string = '';
for (letter of letters) {
	string += letter;
}
console.log(string); //hello worlds

// forEach
let uppecase = '';
letters.forEach((letter) => {
	uppecase += letter.toUpperCase();
});
console.log(uppecase); //HELLO WORLDS

// for
let vowels = '';
for (let i = 0; i < letters.length; i++) {
	vowels += letters[i];
}
console.log(vowels); //hello worlds

//reverse and skip the last symbol
let revers = '';
for (let i = letters.length - 1; i >= 0; i--) {
	if (letters[i] === 's') continue;
	revers += letters[i];
}
console.log(revers); //dlrow olleh

