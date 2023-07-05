// https://www.codewars.com/kata/52f3149496de55aded000410
// Summing a number's digits
/*

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

// P: integers
// R: integers

function sumDigits(number){
    // // variable
    // let count = 0
    // let i = 0
    // let str = number.toString()
    // // for loop
    // while (str.charAt(i) !== ''){
    //     // check for negative, skip
    //     if (str.charAt(i) === '-'){
    //     } else {
    //         count += +(str.charAt(i))
    //     }
    //     i++
    // }
    // return count

    // // ... First solution
    // // +: works for all solution
    // // -: lots of variables and whiles are kinda weak


    return Math.abs(number).toString().split('').reduce( (acc, c) => +acc + +c, 0)

    // ... Learned solution
    // +: less wordy. nice.
}

console.log(sumDigits(10))      // 1
console.log(sumDigits(99))      // 18
console.log(sumDigits(-32))      // 5