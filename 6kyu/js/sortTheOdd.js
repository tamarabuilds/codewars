// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
// Sort the odd
/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

// P: array
// R: sorted array


function sortArray(array){
    // variable for storing the odd numbers in an array
    // const odds = array.filter( e => Math.abs(e % 2) === 1).sort( (a,b)=> a-b)
    // // console.log(`odds: ${odds}, array: ${array}`)
    // // loop through odd numbers
    // for ( let i = 0; i < odds.length; i++){
    //     // loop through array
    //     for ( let j = 0; j < array.length; j++){
    //         // conditional: if odd insert the odd numer
    //         if ( Math.abs(array[j] % 2) === 1){
    //             // console.log(`array[j]: ${array[j]}, odds[i]: ${odds[i]}`)
    //             array[j] = odds[i]
    //             // console.log(`array: ${array}`)
    //             i++
    //         }
    //     }
    // }

    // return array.filter( e => Number.isInteger(e))

    //     // First solution: clear-ish

    const odds = array.filter( e => Math.abs(e % 2) === 1).sort( (a,b)=> a-b)

    
    return array.map( e => e % 2? odds.shift(): e)

    // Learned solution: reminder of shift() taking off the first digit
}

// console.log(sortArray([7, 1]))        // 1, 7
// console.log(sortArray([5, 8, 6, 3, 4]))        // [3, 8, 6, 5, 4]
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))        // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// console.log(sortArray([ -31, -29, -14, 18, 48, -34, 13, -20, -5, 13, 32, 8, 22, -36, -26, 30, 32, -25, 43, 45, 45, 10, 47, 20 ]))        // [ -31, -29, -14, 18, 48, -34, -25, -20, -5, 13, 32, 8, 22, -36, -26, 30, 32, 13, 43, 45, 45, 10, 47, 20 ]
console.log(sortArray([ -40, 26, 8, -41, 10, -41, -11, 37, undefined, undefined, -28, -11, undefined, -18, -8, -20 ]))        // [ -40, 26, 8, -41, 10, -11, 5, 15, 29, 33, -28, 33, 37, -18, -8, -20 ]
console.log(sortArray([ -43, -19, -23, -37, -43, -38, -34, -33, -23, -37, 10, -33, 4]))        // [ -43, -37, -33, -23, -23, -38, -34, -19, 3, 19, 10, 37, 4 ]