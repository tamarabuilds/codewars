// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699
// Sum of Minimums!
/*
DESCRIPTION:
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)
*/

// P: Array of integers, non-empty
// R: integer

function sumOfMinimums(arr){
    // // variable for holding mins
    // let mins = 0
    // // loop over array
    // for ( let i = 0; i < arr.length; i++){
    //     // find min
    //     mins += Math.min(...arr[i])
    // }
    // return mins

    // .... first solution
    // +: works, clean
    // -: can i be more clever than a for loop?

    return arr.reduce( (acc, c) => acc + Math.min(...c), 0)

    // ... second solution
    // +: clever, 1 line
    // -: confusing?


}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))     // 9
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]))    // 76    // 9