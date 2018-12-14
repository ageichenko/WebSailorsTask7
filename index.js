const obj = {
	prop1: 'ololo',
	prop2: 6,
	prop3: 5,
	prop4: 'lalala',
	prop5: 1,
};
let result = 0;

for (let value of Object.values(obj)) {
	if (typeof value === 'number') {
		result += value*2;
	}
}

console.log(result);