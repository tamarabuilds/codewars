// https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7
// MakeUpperCase
/*
Write a function which converts the input string to uppercase.
*/

// const makeUpperCase = str => {          // First solution
//     return str.toUpperCase()
// }

const makeUpperCase = str => str.toUpperCase()          // Second solution


console.log(makeUpperCase("hello") === "HELLO")