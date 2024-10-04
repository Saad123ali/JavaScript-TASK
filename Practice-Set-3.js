// Function to calculate the sum of an array of numbers
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; // Add each number to the sum
    }
    return sum; // Return the calculated sum
}

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) { // Check up to the square root of num
        if (num % i === 0) return false; // If num is divisible by any number, it's not prime
    }
    return true; // If no divisors were found, num is prime
}

// Function to find all prime numbers in an array
function findPrimes(numbers) {
    let primes = []; // Array to store prime numbers
    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            primes.push(numbers[i]); // Add prime number to the array
        }
    }
    return primes; // Return the array of prime numbers
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

// Function to generate a multiplication table for a given number
function multiplicationTable(num, limit) {
    let table = [];
    for (let i = 1; i <= limit; i++) {
        table.push(num * i); // Add the product to the table array
    }
    return table; // Return the multiplication table
}

// Test Data
const numbersArray = [2, 3, 4, 5, 15, 18, 19, 20]; // Array of numbers to work with
const charToCheck = 'E'; // Character to check if it's a vowel or consonant
const tableNumber = 5; // Number for multiplication table
const tableLimit = 10; // Limit for the multiplication table

// Main Program Execution
console.log("Calculating sum of numbers in the array:");
const totalSum = calculateSum(numbersArray);
console.log("Total Sum:", totalSum);

console.log("\nFinding prime numbers in the array:");
const primeNumbers = findPrimes(numbersArray);
console.log("Prime Numbers:", primeNumbers);

console.log("\nChecking if a character is a vowel or consonant:");
console.log(checkVowelOrConsonant(charToCheck));

console.log("\nGenerating multiplication table:");
const multiplicationResult = multiplicationTable(tableNumber, tableLimit);
console.log(`Multiplication Table for ${tableNumber}:`, multiplicationResult);


// use object.key

let marks = {
    Saad: 90,
    Abrar: 99,
    haroon: 95,
    pasha: 92
}

for(let i = 0; i < Object.keys(marks).length; i++)
{
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[ Object.keys(marks)[i]]);
}

//for in

for(let i in marks)
{
    console.log("The marks of " + i + " are " + marks[i]);
}

// arrow function
let a = 4,b = 5 , c= 19;
const mean = (a,b,c) => {
    return (a+b+c)/4;
}

console.log(mean(a,b,c))