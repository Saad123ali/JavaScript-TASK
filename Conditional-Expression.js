// Conditional Expression in JavaScript

// Conditional expressions allow us to execute different blocks of code based on certain conditions. 

// Example: Enter age 

// There are three types of conditional expressions: 

//   1.   if statement: 
//        The if statement executes a block of code if a specified condition is true.
let age = 25; // Hardcoded user input for age (you can change this value)

// 1. if statement
if (age >= 18) {
    console.log("You are an adult."); // This will be executed if the condition is true
}

//   2.   if ... else statement: 
//        The if ... else statement executes one block of code if the condition is true and another block if it is false.
if (age < 18) {
    console.log("You are a minor."); // This will be executed if the condition is true
} else {
    console.log("You are an adult."); // This will be executed if the condition is false
}

//   3.   if ... else ... if statement: 
//        The if ... else ... if statement allows you to specify multiple conditions to test. 
//        If the first condition is false, it checks the next condition, and so on.
if (age < 13) {
    console.log("You are a child."); // Executed if age is less than 13
} else if (age >= 13 && age < 18) {
    console.log("You are a teenager."); // Executed if age is between 13 and 17
} else if (age >= 18 && age < 65) {
    console.log("You are an adult."); // Executed if age is between 18 and 64
} else {
    console.log("You are a senior."); // Executed if age is 65 or older
}
