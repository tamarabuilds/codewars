// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f
// Flatten and sort an array

/*
DESCRIPTION:
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well
*/

// P: several arrays of integers
// R: single array of integers in order

function flattenAndSort(array){
    // // var for entire array
    // let total = []
    // // loop to add all values
    // for (let i = 0; i < array.length; i++){
    //     total.push(...array[i])
    // }
    // // sort
    // return total.sort( (a,b)=> a-b)

    // // ... First solution. 
    // // +: works, clear
    // // -: can I do it without loop?


    return array.flat().sort( (a,b) => a-b)

    // ... Learned solution
    // +: flat method will make an array flat

}

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))  // 123456789
console.log(flattenAndSort([]))  // []
console.log(flattenAndSort([[], []]))  // []
console.log(flattenAndSort([[], [1]]))  // [1]

