// https://www.codewars.com/kata/57f609022f4d534f05000024
// Find the stray number
/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

// P: odd-length, integers (+/-,0), 1 number is different
// R: only the different integer, number

function stray(numbers){
    // sort
    const sorted = numbers.sort( (a,b) => b-a)
    // is first and second equal? If so, use last, else first
    return sorted[1] === sorted[0] ? sorted[sorted.length-1] : sorted[0]
}

console.log(stray([1,1,2]))     // 2
console.log(stray([2,1,2]))     // 1
console.log(stray([2,1,1]))     // 2
console.log(stray([17, 17, 3, 17, 17, 17, 17]))  // 3
console.log(stray([undefined, undefined, 1610]))
console.log(stray([
    undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, 1610,      undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined]))
