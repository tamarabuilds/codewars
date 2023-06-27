// https://www.codewars.com/kata/583f158ea20cfcbeb400000a
// Make a function that does arithmetic!
/*
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Try to do it without using if statements!
*/

// P: integer (+-0), string (+, *, -, /)
// R: numerical result

// function arithmetic(a, b, operator){
//     // switch
//     switch (operator) {
//         case 'add':
//             return a + b
//         case 'subtract':
//             return a-b
//         case 'multiply':
//             return a*b
//         case 'divide':
//             return a/b
//     }
// }

// // ... First solution
// // +: clean, great
// // -: could remove last and add default

// function arithmetic(a, b, operator){
//     switch (operator) {
//         case 'add':
//             return a + b
//         case 'subtract':
//             return a-b
//         case 'multiply':
//             return a*b
//         default:
//             return a/b
//     }
// }

// // ... Second solution
// // +: clean, uses default
// // -: assumes parameters are perfect

const arithmetic = (a, b, operator) => ({
    add       : a + b,
    subtract  : a - b,
    multiply  : a * b,
    divide    : a / b,
}[operator])


// ... Learned solution
// +: uses an object, clean
// -: takes a while to understand, executes all operations each time and is wasteful



console.log(arithmetic(5, 2, 'add'))    // 7
console.log(arithmetic(5, 2, 'subtract'))    // 3
console.log(arithmetic(5, 2, 'multiply'))    // 10
console.log(arithmetic(5, 2, 'divide'))    // 2.5
