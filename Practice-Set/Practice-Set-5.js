// 1. create an array of numbers and take inputs from the user to add numbers to the array

// note : prompt cannot be used in vs code then hardcode value use

let arr = []

for(let i =0; i < 10; i++)
{
    arr.push(i)
}

console.log(arr)

//  2.  make an array and give the total number of sum


let array = [1,2,3,4,5,6];
let sum = 0;

for(let i = 0; i <array.length; i++) {
    sum += array[i];
}
console.log(sum);

//  3. filter for numbers divisible by 10 from a given array


let a = [12,45,30, 50 , 670, 100, 76, 32, 87, 99, 12 ,67];

let n = a.filter((num) =>{
    return num % 10 == 0;
});

console.log(n)

// 4. create an arrayt of square of given array numbers

let square = a.map((num) =>{
    return num * num;
})
console.log(square)

//  5. use reduce to calculate factorial of a given numbers form an array of first n natural no.  ( n being the number whose factorial needs to be calcualted)

let arr2 = [1,2,3,4,5,6,7,8,9,10]

let factorial = a.reduce((num1 ,num2) =>{
    return num1 * num2;
})

console.log(factorial)
