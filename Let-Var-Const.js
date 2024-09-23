/*
var

Scope: Function-scoped.
Hoisting: Hoisted, initialized as undefined.
Re-declaration: Allowed.

let

Scope: Block-scoped.
Hoisting: Hoisted but not initialized.
Re-declaration: Not allowed, but updatable.

const

Scope: Block-scoped.
Hoisting: Hoisted but not initialized.
Re-declaration/Assignment: Not allowed; values can't be changed (except for object/array mutations).
*/

console.log("Var - let - const");  // 'Var - let - const '

// Using var
console.log(a); // undefined (hoisted)
var a = 10;
console.log(a); // 10

if (true) {
    var a = "Saad"; // Re-declared and updated inside the block (same global scope)
    console.log(a); // Saad
}

console.log(a); // 20 (var is function-scoped, so it affects the outer scope)

// Using let
let b = 10;

// let b = 32;  // this line throw error because we cannot redclare
console.log(b); // 10

if (true) {
    let b = "Ali"; // Block-scoped, so this is a new 'b' only inside the block
    console.log(b); // Ali (block-scoped)
}

console.log(b); // 10 (outer 'b' is unchanged)

// Using const
const c = 10;
console.log(c); // 10

// let c = "Saad";  //this line throw error because constant cannot be cjhanged 

console.log(c); // 10 (outer 'c' is unchanged)

0