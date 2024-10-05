// 1. what will the following print in javascript
//console.log("Saad\"".length)

console.log("Saad\"".length)

// 2. use includes function in string

const sentence = "The quick brown fox jumped over the lazy dog.";
const word = "foxs";

console.log(`The word ${word} ${sentence.includes(word) ? "is" : "is not" } in the sentence`);;

// 3. write a program to convert string into lower case

let name = "SAAD ALI";

console.log(name.toLowerCase())

// 4.  Extract the amount of this string 

let str = "Please give me Rs 1000";

let amount = Number.parseInt(str.slice("Please give me Rs".length));

console.log(amount)
console.log(typeof amount)  // number format


// 5. try to change 4th character of a given string were you able to do it?

// note string is ambutable


let frind = "Pasha"
frind[3] = "H"
console.log(frind)  // note string is abmutable so we cannot change