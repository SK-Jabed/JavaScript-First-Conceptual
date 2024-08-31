// Addition Operation

// var x = 5;
// var y = 10;
// var z = 8.5;

// console.log(x + y + z);

var x = 5;
var y = 10;
var z = 8.5;
var total = x + y + z;

console.log(total);


// Subtraction Operation

var x = 15;
var y = 30;
var z = 65;
var sub = z - y -x;

console.log(sub);


// Multiplication Operation

var x = 5;
var y = 10;
var z = 15;
var multi = x * y * z;

console.log(multi);


// Division Operation

var x = 550;
var y = 10;
var z = 5;
var divide = x / y / z;

console.log(divide);


// Multi Operation

var x = 5;
var y = 10;
var z = 8.5;
var add = y + z;
var sub = y - x;
var multi = x * y;
var divide = y / x;

console.log(add);
console.log(sub);
console.log(multi);
console.log(divide);


// toFixed 

var x = 105;
var y = 9;
var divide = x / y;
var value = divide.toFixed(4);

console.log(divide);
console.log(value);

console.log(typeof divide);
console.log(typeof value);

// parseFloat

var x = 6969;
var y = 69;
var divide = x / y;
var value = divide.toFixed(2);
console.log(value);
console.log(69 + value);

var x = 6969;
var y = 69;
var divide = x / y;
var value = parseFloat(divide.toFixed(2));
console.log(value);
console.log(69 + value);

// parseInt

var x = 69.6969;
var y = 69;
var add = x + y;
// var value = parseFloat(add.toFixed(4));
var value = parseInt(add.toFixed(4));
console.log(value);

// Number 

var x = 6969.69;
var y = 69;
var sub = x - y;
var value = divide.toFixed(2);
console.log(69 + value);

var x = 6969.69;
var y = 69;
var sub = x - y;
var value = divide.toFixed(4);
console.log(6 + Number(value));


// x^2, x^3 and x^4 

var x = 5;
console.log(x ** 2);

var x = 3;
console.log(x ** 3);

var x = 4;
console.log(x ** 4);

// Modulus 

var x = 10;
var y = 3;
var mod = (x % y);

console.log(mod);

var x = 10;
var y = 2;
var mod = (x % y);

console.log(mod);

var x = 12;
var y = 100;
var mod = (x % y);

console.log(mod);

// Operation Shorthand Format 

var x = 69;
x = x + 1;
console.log(x);

var x = 69;
x += 1;
console.log(x);

var x = 52;
x = x - 22;
console.log(x);

var x = 52;
x -= 22;
console.log(x);

var x = 15;
x++;

console.log(x);

var x = 15;
x--;

console.log(x);