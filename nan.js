// isNaN()

// Not number and if cannot be transformed into number = true
// Number and if can be transformed into number = false 

var x = "SKJ";
console.log(isNaN(x));

var x = "5.5";
console.log(isNaN(x));

var number = 69;
var string = "string";
var num = "69";

console.log(isNaN(number));
console.log(isNaN(string));
console.log(isNaN(num));


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




