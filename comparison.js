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