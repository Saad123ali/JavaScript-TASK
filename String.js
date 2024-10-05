// string are collection of characters 

// string are used to store and manipulate text string can be exectuted using following syntax


let name = "Saad"

console.log(name);
console.log(name.length); // this property prints length of the string

// string can be created by using single and double quotes e.g 

// let name = "Saad"  && let name2 = 'Saad'

// aslo get single character 
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);

//template literals string

// it work like taking argument  get argument like ${name} 
//we send insert variable directly in template literals. this is called string interpulation

let friend1 = "Haroon"
let friend2 = "Abrar"

console.log(`The ${friend1} and ${friend2} are best frined`)


//Escape sequence characters 
// are two character but treat like one character

let fruit = `Bana\'na`
console.log(fruit)
console.log(fruit.length)

console.log("1. New Line Example:");
console.log("Hello\nWorld"); // New Line (\n)

console.log("\n2. Tab Example:");
console.log("Hello\tWorld"); // Tab (\t)

console.log("\n3. Backslash Example:");
console.log("This is a backslash: \\\\"); // Backslash (\\)

console.log("\n4. Single Quote Example:");
console.log('It\'s a sunny day'); // Single Quote (\')

console.log("\n5. Double Quote Example:");
console.log("He said, \"JavaScript is awesome!\""); // Double Quote (\")

console.log("\n6. Carriage Return Example:");
console.log("Hello\rWorld"); // Carriage Return (\r) (replaces Hello with World)

console.log("\n7. Unicode Example:");
console.log("Unicode character: \u03A9"); // Unicode (\u)

console.log("\n8. Backspace Example:");
console.log("Backsp\bace"); // Backspace (\b)

console.log("\n9. Form Feed Example:");
console.log("Form feed\fexample"); // Form Feed (\f)


// string methods

// 1. string length

let a = "Saad"
console.log(a.length)    // this property 

// 2. string touppercase

console.log(a.toUpperCase())   // this is function 

// 3. string tolowercase

console.log(a.toLowerCase())

// 4. string slice  note : indes start form 0 to n-1

console.log(a.slice(1,3))    //last index not included 

// if you not send second argument is slice then start indexto n-1 character show

console.log(a.slice(1))  

// 5. string replace

console.log(a.replace("aa" , "AA"))

// 6. string concat

console.log(a.concat(" Ali"))  

// 5. string trim   is used to remove extra space

let bro = "      Ali       "
console.log(bro.trim())


// note  :   string are many methods  search and checkout 



