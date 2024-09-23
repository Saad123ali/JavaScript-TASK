                                            // Primitive Data Types



let num = 42;
let str = "Hello, World!";
let bool = false;
let undef;
let nul = null;
console.log(num, typeof num);    
console.log(str, typeof str);    
console.log(bool, typeof bool);  
console.log(undef, typeof undef); 
console.log(nul, typeof nul);


                                            // Non - Primitive Data Types

// Object Types

let person = {
    name: "Alice",
    age: 30,
    isEmployed: true
};

console.log(person, typeof person); 
               
// Array Types but it type is object

let numbers = [1, 2, 3, 4, 5];
console.log(numbers, typeof numbers); 


// Function Types

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet, typeof greet); 
console.log(greet("Alice"));      
