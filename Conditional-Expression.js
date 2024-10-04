// Conditional Expression in JavaScript

// Sometimes we might have to execute a block of code based on some condition 

// Example: Enter age 

// There are three types of conditional expressions 

//   1.   if statement
//   2.   if ... else statement
//   3.   if ... else ... if statement

// Hardcoded user input for age (you can change this value)
let age = 25; // Example age

// 1. if statement
if (age >= 18) {
    console.log("You are an adult.");
}

// 2. if ... else statement
if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}

// 3. if ... else ... if statement
if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age < 18) {
    console.log("You are a teenager.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}
