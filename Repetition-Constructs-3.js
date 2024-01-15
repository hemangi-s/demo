//Repetition-Constructs-3

// Many of the algorithms we study in this book are repetitive in nature. We use two
// repetition constructs in this book—the while loop and the for loop.

// The while loop


var number = 1;
var sum = 0;
while (number < 11) {
 sum += number;
 ++number;
}
console.log(sum); // displays 55



// When we want to execute a set of statements a specified number of times, we use a for
// loop. Example uses a for loop to sum the integers 1 through 10.

// Summing integers using a for loop

var number = 1;
var sum = 0;
for (var number = 1; number < 11; number++) {
 sum += number;
}
console.log(sum); // displays 55


// for loops are also used frequently to access the elements of an array, as shown in
// Example 
// Using a for loop with an array

var numbers = [3, 7, 12, 22, 100];
var sum = 0;
for (var i = 0; i < numbers.length; ++i) {
 sum += numbers[i];
}
console.log(sum); // displays 144

// Comparison operators

const assert = require('assert');

assert.equal(3 < 4, true);
assert.equal(3 <= 4, true);
assert.equal('abc' === 'abc', true);
assert.equal('abc' !== 'def', true);
