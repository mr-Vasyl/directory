/*undefined null
0 -0 NaN
"" // пустая строка // false
Все остальные значения, включая все объекты (и массивы) преобразуются и
потому работают как true.*/

console.log(typeof null);
console.log(typeof undefined);

let strname = 'string name'; // A string to use as a property name
let symname = Symbol('propname'); // A Symbol to use as a property name
typeof strname; // => "string": strname is a string
typeof symname; // => "symbol": symname is a symbol
// Метод Symbol.iterator предназначен для получения итератора из объекта

//функція для порівняння двох масивів
let arr1 = [ 1, 2, 3, 4 ];
let arr2 = [ 1, 2, 3, 4 ];

let func = (a, b) => {
	if (a === b) return true;
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) return false;
	}
	return true;
};
console.log(func(arr1, arr2));
х+ "" // => String(х)
+х // => Number(х)
х - 0 // => NumЬer(х)
!!х // => Boolean ( х ) : обратите внимание на два символа !
let strin = 45
console.log(strin.toString())
console.log(typeof strin);

for(let i = 0, len = data.length; i < len; i++) console.log(data[i]);
for(let datum of data) console.log(datum);
for(let property in object) console.log(property);

//Destructuring Assignment
let [x,y] = [1,2]; // Same as let x=1, y=2
[x,y] = [x+1,y+1]; // Same as x = x + 1, y = y + 1
[x,y] = [y,x]; // Swap the value of the two variables
[x,y] // => [3,2]: the incremented and swapped values