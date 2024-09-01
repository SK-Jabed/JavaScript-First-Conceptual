// isNaN()

// Not number and if cannot be transformed into number = true
// Number and if can be transformed into number = false 

var x = "SKJ";
console.log(isNaN(x));

var x = "5.5";
console.log(isNaN(x));

// Comparison Operator [===, !==, >, <, >=, <=]

var x = 6;
var y = 9;
var z = 6;

// Equal
console.log(x === y);
console.log(x === z);

// Not Equal
console.log(x !== y);
console.log(x !== z);

// Greater than
console.log(x > y);
console.log(y > x);
console.log(x > z);

// Less than
console.log(x < y);
console.log(y < x);
console.log(x < z);

// Greater than or equal
console.log(x >= y);
console.log(y >= x);
console.log(x >= z);

// Less than or equal
console.log(x <= y);
console.log(y <= x);
console.log(x <= z);


// Difference between == and ===
// == check only values
// === check values with its data type

var x = 5;
var y = 5;

console.log(x == y);
console.log(x ===y);

var x = 5;
var y = "5";

console.log(x == y);
console.log(x ===y);


// Truthy or Falsy 

var x = "";
console.log(!x);

var x = "";
console.log(!!x);

var x = "hello world";
console.log(!!x);

var x = 0;
console.log(!!x);

var x = -0;
console.log(!!x);

var x = 69;
console.log(!!x);

var x = "true";
console.log(!!x);




