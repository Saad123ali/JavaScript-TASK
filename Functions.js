//  functions are blocks of code designed to perform a particular task. they are executed when they are invocked / call . whenever needed.

// function  functionName() { do some work}
// functionName();   function call

// Function to calculate the sum of all numbers from 1 to n
function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i; // Add each number to the sum
    }
    return sum; // Return the calculated sum
}

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false; // If num is divisible by any number, it's not prime
    }
    return true; // If no divisors were found, num is prime
}

// Function to check if a character is a vowel or consonant
function checkVowelOrConsonant(char) {
    char = char.toLowerCase(); // Convert character to lowercase
    if ('aeiou'.includes(char)) {
        return char + " is a vowel.";
    } else {
        return char + " is a consonant.";
    }
}

// Main program execution
let limit = prompt("Enter a number to calculate the sum of all numbers from 1 to that number:");
limit = Number.parseInt(limit); // Convert input to an integer
let totalSum = calculateSum(limit); // Call the function to calculate the sum
console.log("The sum from 1 to " + limit + " is: " + totalSum);

let numberToCheck = prompt("Enter a number to check if it is prime:");
numberToCheck = Number.parseInt(numberToCheck);
if (isPrime(numberToCheck)) {
    console.log(numberToCheck + " is a prime number.");
} else {
    console.log(numberToCheck + " is not a prime number.");
}

let charToCheck = prompt("Enter a character to check if it is a vowel or consonant:");
console.log(checkVowelOrConsonant(charToCheck)); // Call the function and log the result



// Higher-order function
// is a function that either takes one or more functions as arguments , return a fucntion  or both 


function applyOperation(arr, operation) {
    return arr.map(operation);  // Applies the operation to each element of the array
  }
  
  // Operation functions
  function square(x) {
    return x * x;
  }
  
  function double(x) {
    return x * 2;
  }
  
  // Test
  let numbers = [1, 2, 3, 4, 5];
  
  // Apply square operation
  let squaredNumbers = applyOperation(numbers, square);
  console.log("Squared Numbers:", squaredNumbers); // [1, 4, 9, 16, 25]
  
  // Apply double operation
  let doubledNumbers = applyOperation(numbers, double);
  console.log("Doubled Numbers:", doubledNumbers); // [2, 4, 6, 8, 10]
  