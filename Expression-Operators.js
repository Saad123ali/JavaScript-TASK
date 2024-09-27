console.log("opearators in js");

let a = 45;
let b = 45;

// Arithmetic operators

// Addtion
console.log("a + b = ", a + b);   // a+b = 90
// substraction
console.log("a - b = ", a - b);   // a - b = 0
// multiplication
console.log("a * b = ", a * b);   //a * b = 2025
// division
console.log("a / b = ", a / b);   // a / b = 1
// remainder
console.log("a % b = ", a % b);   //a % b = 0
// exponential
console.log("a ** b = ", a ** b);  //a ** b = 2.4806364445134117e+74
// post increment
console.log("a++ = ", a++);   // a++ = 45
// pre increment
console.log("++a = ", ++a);   // ++a = 47
// pre decrement
console.log("--a = ", --a);   // --a = 46
// post decrement 
console.log("a-- = ", --a);   //a-- = 45


// assignment operators

console.log("a = ", a);                   //a = 45
console.log("a += b", a += b);          // a+b = 90
console.log("a -= b", a -= b);        // a -= b = 45
console.log("a *= b", a *= b);        //a *= b = 2025
console.log("a /= b", a /= b);      // a /= b = 45
console.log("a %= b", a %= b);      //a %= b = 0
console.log("a **= b", a **= b);   //a **= b = 0


// Comparison Operators

let x = 10;
let y = "10";

// Equal to
console.log("x == y: ", x == y);      // Output: true

// Not equal to
console.log("x != y: ", x != y);      // Output: false

// Strict equal to
console.log("x === y: ", x === y);    // Output: false

// triple equal to is restricted operator its also check type

// Strict not equal to
console.log("x !== y: ", x !== y);    // Output: true

// Greater than
console.log("x > y: ", x > y);        // Output: false

// Less than
console.log("x < y: ", x < y);        // Output: false

// Greater than or equal to
console.log("x >= y: ", x >= y);      // Output: true

// Less than or equal to
console.log("x <= y: ", x <= y);      // Output: true

// Logical Operators

let p = true;
let q = false
// Logical AND
console.log("p && q: ", p && q);  // Output: false

// Logical OR
console.log("p || q: ", p || q);  // Output: true

// Logical NOT
console.log("!p: ", !p);          // Output: false
console.log("!q: ", !q);          // Output: true


// Bitwise Operators

let m = 5; // 0101 in binary
let n = 3; // 0011 in binary

// Bitwise AND
console.log("m & n: ", m & n);  // Output: 1 (0001)

// Bitwise OR
console.log("m | n: ", m | n);  // Output: 7 (0111)

// Bitwise XOR
console.log("m ^ n: ", m ^ n);  // Output: 6 (0110)

// Bitwise NOT
console.log("~m: ", ~m);        // Output: -6 (inverts bits of 5)

// Left Shift
console.log("m << 1: ", m << 1); // Output: 10 (shifts bits left by 1)

// Right Shift
console.log("m >> 1: ", m >> 1); // Output: 2 (shifts bits right by 1)

// Zero Fill Right Shift
console.log("m >>> 1: ", m >>> 1); // Output: 2 (shifts right with zero fill)

// Ternary Operator

let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.

// Instanceof Operator

function Car(make, model) {
    this.make = make;
    this.model = model;
}

let myCar = new Car("Toyota", "Corolla");

console.log("myCar instanceof Car: ", myCar instanceof Car); // Output: true
console.log("myCar instanceof Object: ", myCar instanceof Object); // Output: true
console.log("myCar instanceof Array: ", myCar instanceof Array); // Output: false


// Delete Operator

let obj = {
    name: "Saad",
    age: 21
};

console.log("Before delete: ", obj); // Output: { name: 'Saad', age: 21 }

delete obj.age;

console.log("After delete: ", obj);  // Output: { name: 'Saad' }
