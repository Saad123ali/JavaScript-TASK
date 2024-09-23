                                            // Primitive Data Types



let num = 42;
let str = "Hello, World!";
let bool = false;
let undef;
let nul = null;
console.log(num, typeof num);             //[42 , 'number]
console.log(str, typeof str);             //['Hello world!' , 'string]
console.log(bool, typeof bool);           //[false , 'boolean]
console.log(undef, typeof undef);         //[undefined , 'undefined']
console.log(nul, typeof nul);             //[null . 'object]


                                            // Non - Primitive Data Types

// Object Types

let person = {
    name: "Alice",
    age: 30,
    isEmployed: true
};

console.log(person, typeof person);     //[  { name: "Alice", age: 30, isEmployed: true } , 'object]
               
// Array Types but it type is object

let numbers = [1, 2, 3, 4, 5];
console.log(numbers, typeof numbers);   //[ [1, 2, 3, 4, 5] , 'object']


// Function Types

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet, typeof greet);       //['function'] 
console.log(greet("Alice"));            //'Hello , Alice!'
