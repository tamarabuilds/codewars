// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
// Array plus array
/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/
// function arrayPlusArray(arr1, arr2){                // First solution
//     arr1.push(...arr2)
//     return (arr1).reduce((acc, c) => acc + c, 0)
// }


// function arrayPlusArray(arr1, arr2){                // Second solution
//     return (arr1.reduce((acc, c) => acc + c, 0)) + (arr2.reduce((acc, c) => acc + c, 0))
// }

// function arrayPlusArray(arr1, arr2){                    // Third solution
//     let result = 0
//     for(let i = 0; i < arr1.length; i++){
//         result += arr1[i] + arr2[i]
//     }
//     // for(let i = 0; i < arr2.length; i++){                // Need this if the arrays are different lengths
//     //     result += arr2[i]
//     // }
//     return result
// }

function arrayPlusArray(arr1, arr2){                            // Learned solution
    // return arr1.concat(arr2).reduce((acc, c) => acc + c, 0)
    return [...arr1, ...arr2].reduce((acc, c) => acc + c, 0)
}


console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
console.log(arrayPlusArray([0,0,0], [4, 5, 6]))