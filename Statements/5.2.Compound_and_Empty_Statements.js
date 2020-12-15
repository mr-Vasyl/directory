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
