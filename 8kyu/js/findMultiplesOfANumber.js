// https://www.codewars.com/kata/58ca658cc0d6401f2700045f
// Find Multiples of a Number
/*


DESCRIPTION:
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
*/

// P: integers, +, limit, higher than base
// R: array of multiples

function findMultiples(integer, limit){
    // variable for answer
    // let multiples = []
    // // for loop
    // for ( let i = integer; i <= limit; i += integer){
    //     // multiples until limit
    //     multiples.push(i)
    // }
    // return multiples


    // ... First solution ... ///
    // +: clear, works
    // -: for loop substitute?



    let count = Math.floor(limit / integer)
    return Array.from({length:count}, (e, i) => (i+1) * integer )  
    // ... Second solution ... ///
    // +: works, short
    // -: not as clear

}


console.log(findMultiples(2,6))  // 2, 4, 6
console.log(findMultiples(5,25))    // 5, 10, 15, 20, 25
console.log(findMultiples(1,2))     // 1, 2
