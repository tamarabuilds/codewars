// https://www.codewars.com/kata/54da5a58ea159efa38000836
// Find the odd int
/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

// function findOdd(A){                            // first solution
//     // let checker = { 0: 0, 1: 0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0 }
//     let checker = {}

//     for(let i = 0; i < A.length; i++){
//         if(checker[A[i]] === undefined){
//             checker[A[i]] = 1   
//         } else {

//             checker[A[i]] += 1
//         }
//     }
//     // console.log(Object.keys(checker))
//     // console.log(Object.values(checker))
//     // for( let j = 0; j < Object.values(checker).length; j++){
//     //     if( checker[j] % 2 === 1){
//     //         return j
//     //     }
//     // }
//     // console.log(checker[3])
//     // console.log(checker[7])
//     for (const num in checker){
//         if( checker[num] % 2 === 1 ){
//             return +num
//         }
//     }

    
//     return checker
// }


function findOdd(A){                                // Learned solution
    return A.reduce( (acc, c) => acc ^ c)
}








console.log(findOdd([7]))
console.log(findOdd([0]))
console.log(findOdd([1,1,2]))
console.log(findOdd([0,1,0,1,0]))
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))