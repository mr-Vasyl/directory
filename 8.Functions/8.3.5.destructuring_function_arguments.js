const vectorAdd = ([ x1, y1 ], [ x2, y2 ]) => {
	return [ x1 + x2, y1 + y2 ];
};
console.log(vectorAdd([ 1, 2 ], [ 3, 4 ])); // [ 4, 6 ]

let vectorMultiplay = ({ x, y }, scalar) => {
	return { x: x * scalar, y: y * scalar };
};
console.log(vectorMultiplay({ x: 1, y: 2 }, 2)); //{ x: 2, y: 4 }

let vector = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
	return { x: x1 + x2, y: y1 + y2 };
};
console.log(vector({ x: 1, y: 2 }, { x: 3, y: 4 })); // { x: 4, y: 6 }

let f = ([ x, y, ...cords ], ...rest) => [ x + y, ...rest, ...cords ];
console.log(f([ 2, 3, 4, 56 ], 656, 6)); //[ 5, 656, 6, 4, 56 ]

// помножити на скаляр ы приберегти інші параметри
let scalar = ({ x, y, z = 0, ...rest }, scalar) => {
	return { x: x * scalar, y: y * scalar, z: z * scalar, ...rest };
};
console.log(scalar({ x: 1, y: 2, w: -2 }, 2)); // { x: 2, y: 4, z: 0, w: -2 }
