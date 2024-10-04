// Prompt the user to enter a number
let limit = 15;

// Definition of a for loop:
// A for loop is used to repeat a block of code a known number of times. 
// It consists of three parts: initialization, condition, and increment/decrement.
let sumFor = 0;
for (let i = 1; i <= limit; i++) {
    sumFor += i; // Add the current number to the sum
}
console.log("Sum using for loop: " + sumFor);

// Definition of a while loop:
// A while loop repeatedly executes a block of code as long as a specified condition is true. 
// It checks the condition before executing the code inside the loop.
let sumWhile = 0;
let j = 1; // Initialize counter for while loop
while (j <= limit) {
    sumWhile += j; // Add the current number to the sum
    j++; // Increment the counter
}
console.log("Sum using while loop: " + sumWhile);

// Definition of a do...while loop:
// A do...while loop is similar to a while loop, but it guarantees that the code block will execute at least once.
// The condition is checked after the code block has executed.
let sumDoWhile = 0;
let k = 1; // Initialize counter for do...while loop
do {
    sumDoWhile += k; // Add the current number to the sum
    k++; // Increment the counter
} while (k <= limit);
console.log("Sum using do...while loop: " + sumDoWhile);
