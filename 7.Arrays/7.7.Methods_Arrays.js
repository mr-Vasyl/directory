let table = new Array(10);
for (i = 0, z = 0; i < table.length; i++, z++) {
	table[i] = [ i * 2, z * 2 ];
}
console.log(table);

// forEach
let data = [ 1, 2, 3, 4, 5 ],
	sum = 0;
data.forEach((element) => {
	sum += element;
});
console.log(sum); //   15

let result = 0;
data.forEach((elem, indx, arr) => {
	if (arr[indx] > 3) {
		result += elem * 2;
	}
});
console.log(result); // [ 18 ]

// map
let z = data.map((element) => element * 4);
console.log(z);

// filter
let arrFilter = data.filter((element) => element < 4); // 123
console.log(arrFilter);
// without null and undefined
let error = [ 1, 2, 3, 4, 5, undefined, null ];
let errorFilter = error.filter((elem) => elem !== undefined && elem !== null);
console.log(errorFilter); //[ 1, 2, 3, 4, 5 ]
// парні числа
let res = error.filter((elem) => elem % 2 === 0 && elem !== null);
console.log(res);

// find
let findArr = [ 1, 2, 3, 4, 5 ];
let found = findArr.findIndex((e) => e === 3);
console.log(found); // 2
let found2 = findArr.find((e) => e % 2 === 0);
console.log(found2); // перше знайдене число яке ділиться на 2

// every
let base = [ 1, 2, 3, 4, 5 ];
console.log(base.every((e) => e < 6)); // true всі менші
console.log(base.every((e) => e % 2 === 0)); // false не всі парні

//some
console.log(base.some((e) => e % 2 === 0)); // true хоть одне число ділиться

// reduce
console.log(base.reduce((x, y) => x + y, 0)); // 15 сума
console.log(base.reduce((x, y) => (x > y ? x : y))); // найбільше значення 5
// reduceRight
console.log(base.reduceRight((acc, val) => acc - val)); // -5

// flat
console.log([ 1, [ 2, 3 ] ].flat());
// flatMap
let phrases = [ 'hello world', 'the definitive guide' ];
console.log(phrases.flatMap((p) => p.split(' '))); // [ 'hello', 'world', 'the', 'definitive', 'guide' ]

// contact
let concat = base.concat(phrases);
console.log(concat); // [ 1, 2, 3, 4, 5, 'hello world', 'the definitive guide' ]

//push, pop
let stack = [];
stack.push(1, 2, 3); // 1,2,3
stack.pop(); // 1,2

// unshift, shift
stack.unshift(8, 9); // 8,9
stack.shift(); // 9

// slice
console.log([ 1, 2, 3, 4, 5 ].slice(2, 4)); // [ 3, 4 ]

//splice
console.log([ 1, 2, 3, 4, 5 ].splice(2)); // [ 3, 4, 5 ]

// fill
let fillArr = new Array(5);
console.log([ fillArr.fill(9, 0), fillArr.fill(8, 2, -1) ]); // [ [ 9, 9, 8, 8, 9 ], [ 9, 9, 8, 8, 9 ] ]

// copyWithin
console.log([ 1, 3, 3, 3 ].copyWithin(1)); // 1,1,3,3

// indexOf
console.log([ 2, 5, 6, 5 ].indexOf(5)); // 1
console.log([ 2, 5, 6, 5 ].lastIndexOf(5)); // 3

//includes
console.log([ 1, 2, 3, 4, NaN ].includes(NaN)); // true

// sort
console.log([ 'chery', 'apple', 'banana' ].sort()); // 'apple', 'banana', 'chery'

// sort()
let sort = [ 33, 4, 88, 111 ];
sort.sort(); // 111, 33, 4, 88
sort.sort((a, b) => a - b);
console.log(sort); // 4, 33, 88, 111
sort.sort((a, b) => b - a);
console.log(sort); // 111, 33, 4, 88

// reverse
console.log([ 1, 2, 3 ].reverse());

// join toString
let info = [ 1, 2, 3, 4, 56 ];
let numbToString = info.join(' - ');
console.log(numbToString); // 1 - 2 - 3 - 4 - 56
console.log(info.toString()); // 1,2,3,4,56
console.log(Array.isArray(info)); // true

// наповнюэмо обєкт
let z = {};
let i = 0;
while (i < 10) {
	z[i] = i * i;
	i++;
}
z.length = i;
console.log(z);

let total = 0;
for (let i = 0; i < z.length; i++) {
	total += z[i];
}
console.log(total); // 285

//call (за допомогою можна використовувати методами масивів для ітераціі обєктів)
let any = { 0: 'a', 1: 'b', length: 2 };
console.log(Array.prototype.join.call(any, '+')); // a+b
console.log(Array.prototype.slice.call(any, 0)); // [ 'a', 'b' ]


