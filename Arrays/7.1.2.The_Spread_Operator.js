let array1 = [ 2, 3, 4 ];
console.log(array1[array1.length-1]) // останній елемент масива
let array2 = [ 45, ...array1, 3 ];
console.log(array2);

let digits = [ ...'hello_world' ];
console.log(digits); // 'h', 'e', 'l', 'l','o', '_', 'w', 'o','r', 'l', 'd'
// видалення дублів
console.log([ ...new Set(digits) ]); //'h', 'e', 'l','o', '_', 'w','r', 'd

// array from
console.log(Array.from('foo')); // [ 'f', 'o', 'o' ]
console.log(Array.from([ 2, 4, 5 ], (x) => x * x)); // [ 4, 16, 25 ]

