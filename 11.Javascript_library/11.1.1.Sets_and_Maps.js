let s = new Set('Mississippi'); // 4 - m i s p
console.log(s.size);
console.log(s.add(1).size); // 5
s.add(true);
console.log(s.size); // 6
s.add([ 1, 2, 3, 4 ]); // 7
s.delete(1); // 6
s.clear();
console.log(s.size); // 0

// провірити множества масива в Set
let data = new Set([ 1, 2, 3, 4, 5 ]);
console.log(data.has(2)); // true

let sum = 0;
for (let p of data) {
	sum += p;
}
console.log(sum); // 15
console.log([ ...data ]);

let a = 1;
data.forEach((n) => (a *= n));
console.log(a); // 120

let arr = [
    ["name", "Vasyl"],
    ["ago", 31]
]

let o =  {1:2, 3:4};
let m = new Map(arr)
console.log(m)
m.set(NaN, "nanana")
m.set(o, "nanfdana")
console.log(m)

