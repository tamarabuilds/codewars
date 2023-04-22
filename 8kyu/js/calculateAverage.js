// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
// Calculate average
/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

// let findAverage = arr => arr.length > 0 ? arr.reduce( (acc, c) => acc + c, 0) / arr.length : 0       // first solution

// function findAverage(arr){
//     return arr == false ? 0 : arr.reduce( (acc, c) => acc + c, 0) / arr.length              // second solution
// }


let findAverage = arr => arr.length ? arr.reduce( (acc, c) => acc + c, 0) / arr.length : 0          // learned solution


console.log(findAverage([1,1,1]))
console.log(findAverage([1,2,3,4]))