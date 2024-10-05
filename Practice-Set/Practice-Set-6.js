//  write a program using prompt function to take inputs of age as a value from the user and use alert to tell him if he can drive or not?

// let age = prompt("Please enter age to drive")

// age = Number.parseInt(age);

// if(age >= 18)
// {
//     alert("You can drive")
// }
// else
// {
//     alert("You can not drive")

// }

// In Q1 use confirm to ask the user if he wants to see the prompt again


// let runagain = true;
// while (runagain) {
//     let age = prompt("Please enter age to drive")
//     age = Number.parseInt(age);

//     if (age >= 18) {
//         alert("You can drive")
//     }
//     else {
//         alert("You can not drive")

//     }
//     runagain = confirm("Do you want again enter age")
// }

// in the pervious question use console.error to log the error if the age entered is negative

// let runagain = true;
// while (runagain) {
//     let age = prompt("Please enter age to drive")
//     age = Number.parseInt(age);

//     if(age < 0)
//     {
//         console.error("Please enter a valid age");
//         break;
//     }

//     if (age >= 18) {
//         alert("You can drive")
//     }
//     else {
//         alert("You can not drive")

//     }
//     runagain = confirm("Do you want again enter age")
// }


// write a program to change the url to gooogle.com( redirection)
// if user enters a number greater than 4
// 

let num = prompt("Please enter number?")

num = Number.parseInt(num)

if(num > 4)
{
    location.href = "https://google.com"
}

// change the color of the page to yellow, red or any other color based on the user input through prompt

let color = prompt("Please enter the name of color to change?")

document.body.style.backgroundColor = color;