// https://www.codewars.com/kata/55d1d6d5955ec6365400006d/javascript
// Round up to the next multiple of 5
/*

Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/

// P: Integers, +/-,0
// R: multiple of 5

// function roundToNext5(n){
//     // loop until multiple
//     for( n; n % 5 !== 0; n++){}
//     return n
// }

// // ... First solution ...
// // +: clean and simple
// // -: maybe not clear to others

function roundToNext5(n){
    return Math.ceil(n/5)*5
}

// ... Learned solution 
// +: clean math solution
// -: need to see it work


console.log(roundToNext5(0))    // 0
console.log(roundToNext5(2))    // 5
console.log(roundToNext5(3))    // 5
console.log(roundToNext5(12))    // 15
console.log(roundToNext5(21))    // 25
console.log(roundToNext5(30))    // 30
console.log(roundToNext5(-2))    // 0
console.log(roundToNext5(-5))    // -5