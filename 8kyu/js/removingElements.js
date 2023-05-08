// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
// Removing Elements
/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/
// function removeEveryOther(arr){                     // First solution
//     return arr.filter( (_,i) => (i % 2 === 0) )
// }

// function removeEveryOther(arr){                 // Second solution
//     let answer = []
//     for( let i = 0; i < arr.length; i++){
//         if( i % 2 === 0 ){
//             answer.push(arr[i])
//         }
//     }
//     return answer
// }

function removeEveryOther(arr){                     // Learned solution
    for( let i = 1; i < arr.length; i++){
        arr.splice(i,1)
    }
    return arr
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(removeEveryOther([[1, 2]]))
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]))