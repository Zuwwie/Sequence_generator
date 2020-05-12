var generator = sequence(10, 3);

console.log(generator());
console.log(generator());

var generatorTwo = sequence(7, 1);

console.log(generatorTwo());
console.log(generator());
console.log(generatorTwo());
console.log(generatorTwo());

var generatorThree = sequence(15, 10);

console.log(generatorThree());
console.log(generatorThree());

function sequence(startNumber = 0, step) {
	var number = startNumber;
	return function generate() {
		var rez = number;
		number = number + step;
		return rez;
	};
}
