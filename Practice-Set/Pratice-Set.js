// Q.1  crate a variable of type string and try to add a number to it

let a = "Saad";
let b = 6;
console.log(a + b);        // Saad6   because concatinate


// Q.2   dispaly the Q.1 typeof 

console.log(typeof (a + b));  //string


//Q.3   crate a const object in js can you change it to hold a number  later?

const a1 = {
    name: "Saad",
    section: "SE 3-2",
    isStudent: true
}

// a1= "Ali" // this line throw an error

console.log(a1); // { name: 'Saad , section: 'SE 3-2', isStudent: true }

// Q.4 try to add new key to the const object in Q.3 were you able to do it

a1['surname'] = "ali"
a1['name'] = "ali"
console.log(a1)  // { name: 'ali , section: 'SE 3-2', isStudent: true , surname: 'ali' }

// a1 variable is reference of this object we cannot assign  a value and aslo not create the new object but also add new key   a1 in realation ship with this object

// Q.5 write a program to create a word meaning dictinary of 5 words

const dictinary = {
    appreciate: "recognize the full worth of.",
    beautiful: "pleasing the senses or mind aesthetically.",
    colleague: "a person with whom one works in a profession or business.",
    definitely: "without doubt (used for emphasis).",
    empathy: "the ability to understand and share the feelings of another."
}

console.log(dictinary.colleague);  //  a person with whom one works in a profession or business
console.log(dictinary['empathy']); //   the ability to understand and share the feelings of another.

//  we can use both to types to access the key  

// Q.6 Create a variable with a string value and change its type to a number.
let c = "123";
console.log(typeof c); // Output: string
c = Number(c);
console.log(typeof c); // Output: number
console.log(c); // Output: 123

// Explanation: Initially, the variable c is of type string. Using Number(c), the type is changed to number.


// Q.7 Create a variable with a number value and change its type to a string.
let d = 456;
console.log(typeof d); // Output: number
d = d.toString();
console.log(typeof d); // Output: string
console.log(d); // Output: "456"

// Explanation: Initially, the variable d is of type number. Using toString(), the type is changed to string.


// Q.8 Create a function to multiply two numbers and return the result.
function multiply(x, y) {
    return x * y;
}
console.log(multiply(3, 4)); // Output: 12

// Explanation: The multiply function takes two numbers as arguments and returns their product.

// Q.9 Create an object and use a function to add a new key-value pair.
let person = {
    name: "Saad",
    age: 21
};

function addKeyValue(obj, key, value) {
    obj[key] = value;
}

addKeyValue(person, "city", "Islamabad");
console.log(person); // Output: { name: 'Saad', age: 21, city: 'Islamabad' }

// Explanation: The addKeyValue function takes an object, key, and value as arguments and adds the key-value pair to the object.


// Q.10 Create an array and find the sum of its elements.
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum); // Output: 15

// Q.11 Create a function that checks if a number is even or odd.
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(isEvenOrOdd(7)); // Output: Odd
console.log(isEvenOrOdd(12)); // Output: Even

// Q.12 Create a function to count the number of vowels in a string.
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    
    return count;
}

console.log(countVowels("Hello World")); // Output: 3

// Explanation: The countVowels function counts the number of vowels in the given string.