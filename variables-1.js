//Declaring and Intializing Variables

var number =1;
var name="Hemangi";
var rate = 1.2;
var greeting = "Hello, world!";
var flag = false;

console.log(number);
console.log(name);
console.log(rate);
console.log(greeting);

// Arithmetic and Math Library Functions in JavaScript
// JavaScript utilizes the standard arithmetic operators:
// • + (addition)
// • - (subtraction)
// • * (multiplication)
// • / (division)
// • % (modulo)
// JavaScript also has a math library you can use for advanced functions such as square
// root, absolute value, and the trigonometric functions. The arithmetic operators follow
// the standard order of operations, and parentheses can be used to modify that order.

var x = 3;
var y = 1.1;
console.log(x + y);
console.log(x * y);
console.log((x+y)*(x-y));
var z = 9;
console.log(Math.sqrt(z));
console.log(Math.abs(y/x))

// If you don’t want or need the precision shown above, you can format a number to a
// fixed precision:

var x = 3;
var y = 1.1;
var z = x * y;
console.log(z.toFixed(2)); // displays 3.30

//2 represents number of decimal points

console.log(z.toFixed(4));