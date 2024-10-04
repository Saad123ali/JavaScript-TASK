//  1. use logical operator to find whether the age of a person lies between 10 and 20?

let age = prompt("What is your age");  //Note prompt does not work on vs code use in  browser

if (age > 10 && age < 20) {
    console.log("Your age lies between 10 and 20")
}
else {
    console.log("Your age does not lies between 10 and 20");
}

// 2. make the problem 1 to convert into switch case

let ages = prompt("What is your age");

ages = Number.parseInt(ages);

switch (ages) {
    case 12:
        console.log("Your age 12")
        break;
    case 13:
        console.log("Your age 13")
        break;
    case 14:
        console.log("Your age 14")
        break;
    case 15:
        console.log("Your age is 15")
        break;
    default:
        console.log("Your age does not lies between 10 and 20");

}


// 3. write a program js program to find whether a number is divisible by 2 and 3

let no = prompt("What is your age");

no = Number.parseInt(no);

if(no % 2 == 0 && no % 3 == 0)
{
    console.log("your number is divisible by 2 and 3");
}
else
{
    console.log("your number is not divisible by 2 and 3");
}

// 4. write a program js program to find whether a number is divisible by either 2 and 3

let nums = prompt("What is your age");

nums = Number.parseInt(nums);

if(nums % 2 == 0 || nums % 3 == 0)
{
    console.log("your number is divisible by 2 and 3");
}
else
{
    console.log("your number is not divisible by 2 and 3");
}

// 5. print " you can drive or you can not drive" based on age being greater than 18 using ternary operator

let a = 12;
let ag = a > 18 ? "you can drive" : "you can not drive";
console.log(ag);


// Function to get user input and convert it to a number
function getNumberInput(promptText) {
    let input = prompt(promptText);
    return Number.parseInt(input);
}

// Check if age lies between 10 and 20
let agess = getNumberInput("What is your age?");
if (agess > 10 && agess < 20) {
    console.log("Your age lies between 10 and 20.");
} else {
    console.log("Your age does not lie between 10 and 20.");
}

// Check if a number is divisible by 2 and 3
let number = getNumberInput("Enter a number to check if it is divisible by 2 and 3:");
if (number % 2 === 0 && number % 3 === 0) {
    console.log("Your number is divisible by 2 and 3.");
} else {
    console.log("Your number is not divisible by 2 and 3.");
}

// Check if a number is odd or even using ternary operator
let num = getNumberInput("Enter another number to check if it is odd or even:");
let result = (num % 2 === 0) ? "The number is even." : "The number is odd.";
console.log(result);

// Check if a character is a vowel or consonant
let char = prompt("Enter a character:").toLowerCase();
switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(char + " is a vowel.");
        break;
    default:
        console.log(char + " is a consonant.");
}

// Check if a year is a leap year
let year = getNumberInput("Enter a year to check if it is a leap year:");
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}