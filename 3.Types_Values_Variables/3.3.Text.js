let str = 'euro';
console.log(str.length); // довжина строки

for (a of str) {
	let arrA = a;
	console.log(arrA);
} // цикл строки

{
	let a = ' two\nlines'; // Строка , представляющая две строки , которые записаны в одной строке
	let str = 'one\
    long\
    line';
	console.log(str); // Однострочная строка , записанная в трех строках
}
