// toString
let array = [ 3, 32, 33, 44 ].toString();
console.log(typeof array);
// Преобразование
let room = {
	number: 777,
	valueOf: function() {
		return this.number;
	}, // 777
	toString: function() {
		return this.number;
	} // 777
};
console.log(+room);

// Extended Object Literal Syntax
let x = 3,
	y = 4;
let result = { x, y };
console.log(result.x + result.y);

//Computed Property Names
const Property_name = 'p1';
function computePropertyName() {
	return 'p' + 2;
}
let p = {
	[Property_name]: 1,
	[computePropertyName()]: 2
};
console.log(p.p1 + p.p2); // 3

// операція поширення 
let position = {x:6, y: 11};
let dimensions = {width: 100, height: 200}
let rect = {...position, ... dimensions}
console.log(rect) // { x: 6, y: 11, width: 100, height: 200 }



