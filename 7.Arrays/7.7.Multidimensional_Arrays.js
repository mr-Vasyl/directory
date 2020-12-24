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
