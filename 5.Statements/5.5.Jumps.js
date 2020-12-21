// break
let array = [ 'uno', 'two', 'three', 'four' ];
for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
	if (array[i] === 'three') break;
}

let matrix = [ [ 2, 2, 3, 4 ], [ 5, 76, 54, 5 ], [ 4, 6, 43, 22 ]];
let sum = 0,
	success = false;
if (matrix) {
	for (let x = 0; x < matrix.length; x++) {
		let row = matrix[x];
		console.log(row);
		if (!row) break;
		for (let y = 0; y < row.length; y++) {
			let cell = row[y];
			if (isNaN(cell)) break;
			sum += cell;
		}
	}
	success = true;
}
console.log([ sum, success ]);

// continue
let totalText = '';
for (let i = 0; i < array.length; i++) {
	if (!array[i]) continue;
	totalText += ` ${array[i]}`;
}
console.log(totalText);

//throw
function factorial (x) {
    if(x < 0) throw new Error("знвчення отрицательное")
    let g = 1;
    for(; x>1; x--) {
        g*=x
    }
    return g;
}

//try catch
try {
factorial(-1);
} catch(e) {
    console.log(e);
}
