// https://www.codewars.com/kata/56b7f2f3f18876033f000307
// Are the numbers in order?
/*
Are the numbers in order?
In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

For example:

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.
*/

// P: integers, count 0+
// R: T/F

function inAscOrder(arr){
    // // if count < 2, return true
    // if (arr.length < 2) return true
    // // loop
    // for (let i = 1; i < arr.length; i++){
    //     // condition if less than prior
    //     if (arr[i] < arr[i-1]){
    //         return false
    //     }
    // }
    // return true

    // // ... First solution
    // // +: works, solid solution
    // // -: can I be more creative?
    
    // copy with slice
    let a2 = arr.slice()
    a2.sort( (a,b) => a-b)
    // compare
    return a2.filter( (e,i) => e == arr[i]).length === arr.length

    // ... second solution
    //+: creative review of sorted "copy"
    //-: not as clear. Need to review the entire array before getting solution

}

console.log(inAscOrder([1, 2, 4, 7, 19]))   // true
console.log(inAscOrder([1, 2, 3, 4, 5]))   // true
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]))   // false
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]))   // false
