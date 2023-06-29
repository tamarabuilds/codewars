// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003
// Sort Numbers
/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

// P: numbers, empty, null
// R: sorted numbers or empty array

function solution(nums){
    // sort or check for null / empty
    return nums ? nums.sort( (a,b) => a - b) : []

    // ... First solution
    // +: clean and efficient. happy
}

console.log(solution([1, 2, 10, 50, 5]))        // [1,2,5,10,50]
console.log(solution([]))        // []
console.log(solution(null))        // []