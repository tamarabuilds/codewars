// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc
// Factorial
/*
DESCRIPTION:
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

More details about factorial can be found here.

*/

// P: integer, +, -, 0
// R: integer

function factorial(n){
    // check for valid num
    if (n < 0 || n > 12) throw new RangeError('Arguments must be between 0-12')

    return Array.from({length: n}, (e, i) => i + 1).reduce( (acc, c)=> acc * c, 1)

    // ... First solution
    // +: clean, complete
    // -: all good
}


console.log(factorial(0))   //  1
console.log(factorial(1))   //  1
console.log(factorial(2))   //  2
console.log(factorial(3))   //  6
console.log(factorial(-3))   //  Error