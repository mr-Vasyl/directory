// косинус від числа
{
	x = Math.PI;
	cx = Math.cos(x);
	console.log('cos(π) = ' + cx);
}
// Если имя пользователя null, undefined, false, О, " " или NaN,
// то присвоить ему новое значение
let username = null;
if (!username) username = 'Marcus';
console.log(username);

function convert(x) {
	switch (typeof x) {
		case 'number':
			return x.toString(16);
		case 'string':
			return '"' + x + '"';
		default:
			return String(x);
	}
}
console.log(convert(123));

//while
let count = 0;
while (count < 10) {
	console.log(count);
	count++;
}

//do-while
let arr = [ 1, 4, 65, 5 ];
function printArr(a) {
	let len = a.length,
		i = 0;
	if (len === 0) {
		console.log('пустий масив');
	} else {
		do {
			console.log(a[i]);
		} while (++i < len);
	}
}
printArr(arr);

//for
for (let count = 20; count > 0; count--) {
	console.log(count + ' по порядку');
}
let i,
	j,
	sum = 0;
for (i = 0, j = 10; i < 10; i++, j--) {
	sum += i * j;
	console.log(i, j, sum);
}
let arry = [ 1, 2, 3, 4, 5 ],
	sum = 0,
	data;
for (data of arry) {
	sum = sum + data;
}
console.log(sum);
// for in with object
let obj = { a: 1, b: 2 };
for (let count in obj) {
	console.log(`obj - ${count}:${obj[count]}`);
}
// по ключам
for (let o of Object.keys(obj)) {
	console.log(o);
}
// по значенням
let sum = 0;
for (let a of Object.values(obj)) {
	sum += a;
}
console.log(sum);
//ключі і значення
for (let [key, val] of Object.entries(obj)) {
	console.log(key,val);
}
// з строками
let str = {};
for(let leteer of "miiss") {
	if(str[leteer]) {
		str[leteer]++;
	} else {
		str[leteer] = 1;
	}
}
console.log(str)

//Set
let text = "Na na Batman"
let wordsSet = new Set(text.split(' '));
console.log(wordsSet)
let wordsArray = [];
for(let word of wordsSet) {
	wordsArray.push(word)
}
console.log(wordsArray)

// for in обект в масив
let o = {x:1, b:3};
let a = [], i=0;
for(a[i++] in o){};
console.log(a) // [x,b]
