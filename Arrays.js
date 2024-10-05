//  Array is collection of item with different data types like , string , boolean , integers , objects

// Array are variable which can hold more than one values

// array is mutable array can be change 


const fruit = ["Banana", "Apple", "Orange"]
const a1 = [7, "Saad", false]   // also store different values

console.log(a1)

// accessing the values

let numbers = [1, 2, 3, 4, 5]

console.log(numbers[0])
console.log(numbers[2])
console.log(numbers[4])
console.log(numbers[8])

//  finding the length

console.log(numbers.length)

// changing the values

numbers[4] = 8
console.log(numbers)   // [ 1,2,3,4,8]

// type of array is object

console.log(typeof numbers)  //object

const arr = [1, , 3, "Saad", " Coding", true, null, undefined, 4.3,]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (let i in arr) {
    console.log(arr[i])
}

for (let i of arr) {
    console.log(arr[i])
}

// array methods in js


// array form 

let name = "Saad Ali"
let a = Array.from(name);
console.log(a)

let names = ["Saad" , "Ali" , "Hassan"]
console.log(names)

// check the difference
// 1. push()

names.push("Abrar")
console.log(names)

// 2. pop()
console.log(names.pop())
console.log(names)

// 3. toString()
let num = [12345, 45667]

console.log(num.toString())
console.log(names.toString())  // return normal string to proper array

// 4. concat array

let arr1= [1,2,3,4,5]
let arr2= [6,7,8,9,10]

console.log(arr1.concat(arr2))  // they does not affect original array

// 5. unshift()   they work like push but reverse

names.unshift("Abrar" , 1)
console.log(names)

// 6. shift()  they work like pop but reverse

names.shift()
console.log(names)

// 7. slice()  they does not affect the original array 

console.log(names.slice(1,3))   // the last index is not include in slice


// 8. splice  they change original array

//splice( stratIndex, endIndex ,newItem)

console.log("Original array:");
console.log(names);

let change = names.splice(1, 1, "Haroon");

console.log("\nRemoved element(s):");
console.log(change);

// The original array after the modification
console.log("\nModified array:");
console.log(names);


// 7. forEach()

let no = [3,6,1,8,2,9]

console.log("Using forEach():");
no.forEach(function(no) {
    console.log(no * 2);  // Multiply each number by 2
});
// 8. map()   create new array by pefroming some operation on each array element

let doubled = no.map(function(no) {
    return no * 2;
});

console.log("Using map():");
console.log(doubled); 

// 9. filter()    filter an array with values that passes the test creates a new array

let filtered = no.filter(function(no) {
    return no > 3;
});

console.log("Using filter():");
console.log(filtered); 

// 12. reduce()    reduce function reduce the array and return the singlr value

// syntax  : array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

let number = [1, 2, 3, 4, 5];

let sum = number.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);  // 0 is the initial value for the accumulator

console.log("Sum of numbers:");
console.log(sum);  // Output: 15



let product = number.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
}, 1);  // 1 is the initial value for multiplication

console.log("Product of numbers:");
console.log(product);  // Output: 24

let arrays = [[1, 2], [3, 4], [5, 6]];
let flattened = arrays.reduce(function(accumulator, currentValue) {
    return accumulator.concat(currentValue);
}, []);

console.log("Flattened array:");
console.log(flattened);  // Output: [1, 2, 3, 4, 5, 6]

let fruites = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

let count = fruites.reduce(function(accumulator, fruit) {
    if (!accumulator[fruit]) {
        accumulator[fruit] = 1;  // Initialize the count if it doesn't exist
    } else {
        accumulator[fruit]++;  // Increment the count if it exists
    }
    return accumulator;
}, {});

console.log("Fruit count:");
console.log(count);  // Output: { apple: 3, banana: 2, orange: 1 }

// 11 . sort()

let fruits = ["Banana", "Orange", "Apple", "Mango"];

let sortedFruits = fruits.sort();

console.log("Using sort():");
console.log(sortedFruits);  // ["Apple", "Banana", "Mango", "Orange"]

// // Sorting numbers with a compare function
let sortedNumbers = no.sort(function(a, b) {
    return a - b;  // Sort numbers in ascending order
});

console.log("Sorted numbers:");
console.log(sortedNumbers); 

// extra things   

// we can use the variable for function also use has a variable but not when we use const

let b = function()
{
    return "Saad"
}

console.log(b());
b = 12;
console.log(b)