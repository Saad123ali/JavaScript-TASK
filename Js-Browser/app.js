// // alert('hello');
// // console.log("hello")

// // console object methods

// console.clear(); // Clears all previously logged messages
// console.log(console)

// // 1. Logging messages
// console.log("=== Console Object Methods Demo ===");
// console.log("Hello, World!"); // General output
// console.info("This is an informational message."); // Info message
// console.warn("This is a warning message!"); // Warning message
// console.error("This is an error message!"); // Error message

// // 2. Using console.table()
// let people = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 },
//     { name: "Doe", age: 35 }
// ];
// console.table(people); // Display tabular data

// // 3. Timing operations
// console.time("Timer");
// for (let i = 0; i < 1000000; i++) {
//     // Some time-consuming operation
// }
// console.timeEnd("Timer"); // Outputs elapsed time

// // 4. Grouping messages
// console.group("Group 1");
// console.log("Inside Group 1");
// console.group("Subgroup 1");
// console.log("Inside Subgroup 1");
// console.groupEnd(); // Ends Subgroup 1
// console.groupEnd(); // Ends Group 1

// // 5. Clearing the console

// // 6. Asserting conditions
// let age = 18;
// console.assert(age >= 21, "Age is less than 21!"); // Will log an error message since age < 21

// // 7. Tracing the stack
// function myFunction() {
//     console.trace("Trace message"); // Outputs the stack trace
// }
// myFunction();

// // 8. Counting calls
// console.count("Counter"); // Counter: 1
// console.count("Counter"); // Counter: 2
// console.count("Counter"); // Counter: 3
// console.countReset("Counter"); // Resets the counter
// console.count("Counter"); // Counter: 1

// // 9. Displaying object properties
// let obj = { name: "John", age: 30 };
// console.dir(obj); // Displays properties of the object


// alert , prompt , confirm 

// alert("Vs code is working");
// let a = prompt("Hi please enter a numbers")
// console.log(a);
// document.write(`you enter string because prompt cannot convert data types ${typeof a}`);

// // Using confirm() to ask for user confirmation
// let write = confirm("Do you want to proceed?");

// if (write) {
//    document.write(a);
// } else {
//     document.write("Please allow to write");
// }

//  DOM , BOM &  Window object

// DOM  stands The Document Object Model (DOM) is a programming interface for web documents.

//BOM The Browser Object Model (BOM) is a browser-specific convention referring to all the objects exposed by the web browser. The BOM allows JavaScript to “interact with” the browser4


// window object represents browser window nd provides methods to control it . It is global object
// console.log(window)
// window.alert("This is widow object")


// console.log(document)
// console.log(document.body)

// document.body.style.background = "RED"

