// extends and super
class EZArray extends Array {
	get first() {
		return this[0];
	}
	get last() {
		return this[this.length - 1];
	}
}
let a = new EZArray();
a instanceof EZArray; // true
a instanceof Array; // true
a.push(1, 2, 3, 4); // [1,2,3,4]
console.log(a.pop()); //[1,2,3]
a.first; // 1
a.last; //3
console.log(a[1]); //2
Array.isArray(a); // true
EZArray.isArray(a); // true
Array.prototype.isPrototypeOf(EZArray.prototype); // true
Array.isPrototypeOf(EZArray); // true

class TypedMap extends Map {
	constructor(keyType, valueType, entries) {
		if (entries) {
			for (let [ k, v ] of entries) {
				if (typeof k !== keyType || typeof v !== valueType) {
					throw new TypeError(`неправильний тип для записи [${k}, ${v}]`);
				}
			}
		}
	    super(entries)
		this.keyType = keyType;
		this.valueType = valueType;
	}
	set(key, velue) {
		if (this.keyType && typeof key !== this.keyType) {
			throw new TypeError(`${key}  не ідноситься до типу ${this.keyType}`);
		}
		if (this.valueType && typeof value !== this.valueType) {
			throw new TypeError(`${velue}  не ідноситься до типу ${this.valueType}`);
		}
		return super.set(key, velue);
	}
}

let typ = new TypedMap("fff", "aaa");
console.log(typ);
console.log(typ.set("ffsdf", "sdsdd"));


