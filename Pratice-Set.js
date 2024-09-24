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

