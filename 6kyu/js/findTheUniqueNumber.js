// https://www.codewars.com/kata/585d7d5adb20cf33cb000235
// Find the unique number
/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

// P: array
// R: number

function findUniq(arr){
    // sort
    // const sorted = arr.sort()
    // if (sorted[1] === sorted[0]){
    //     return sorted[sorted.length-1]
    // }
    // return sorted[0]

    // first solution: works, could do better with sort

    const sorted = arr.sort( (a,b)=> a - b)
    return sorted[1] === sorted[0] ? sorted.pop(): sorted[0]

    // learned: good reminder of sort and pop
}

console.log(findUniq([1, 0, 0 ]))       // 1
console.log(findUniq([0, 1, 0 ]))       // 1
console.log(findUniq([0, 0, 1 ]))       // 1
console.log(findUniq([1, 1, 1, 2, 1, 1  ]))       // 2
console.log(findUniq([1, 1, 2, 1, 1  ]))       // 2
console.log(findUniq([ 3, 10, 3, 3, 3  ]))       // 10