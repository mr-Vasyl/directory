1 + 2; // => 3: addition
'1' + '2'; // => "12": concatenation
'1' + 2; // => "12": concatenation after number-to-string
1 + {}; // => "1[object Object]": concatenation after object-to-string
true + true; // => 2: addition after boolean-to-number
2 + null; // => 2: addition after null converts to 0
2 + undefined; // => NaN: addition after undefined converts to NaN
1 + 2 + ' blind mice'; // => "3 blind mice"
1 + (2 + ' blind mice'); // => "12 blind mice"

let a = -2;
console.log(a == true);

let username = 'Marcus Aurelius';
let greet = 'Hello ' + (username ? username : 'there');
console.log(greet);

/*x typeof x
undefined "undefined"
null "object"
true or false "boolean"
any number or NaN "number"
any BigInt "bigint"
any string "string"
any symbol "symbol"
any function "function"
any nonfunction object "object"*/
let value = 'how are you?';
let val = typeof value === 'string' ? "'" + value + "'" : value.toString();
console.log(val);

//delete
let arr = {a: 2, b: 3};
delete arr.b;
console.log("b" in arr);

// void для зміни без ретурн
let counter = 0;
const increment = () => void counter++;
increment() // => undefined
counter // => 1

for(let i=0,j=10; i < j; i++,j--) {
    console.log(i+j);
    }

