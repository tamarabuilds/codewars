// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
// Sort array by string length
/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

// P: array of strings, empty
// R: order the strings by length

// function sortByLength(array) {
//     // variable
//     let answer = []
//     // find string array lengths
//     const arrayLengths = array.map( (e)=> e.length)
//     // for loop
//     for (let i = 0 ; i <= Math.max(...arrayLengths); i++){
//         if (arrayLengths.indexOf(i) !== -1){
//             answer.push( array[arrayLengths.indexOf(i)])

//         }
//     }
//     return answer
// }

// ... First solution 
// +: clear
// -: brute force

function sortByLength(array){                               /// Learned. Much better.
    return array.sort( (a,b) => a.length - b.length)
}



console.log(sortByLength(["Beg", "Life", "I", "To"]))
console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]))
console.log(sortByLength(["Longer", "Longest", "Short"]))

