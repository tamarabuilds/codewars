// https://www.codewars.com/kata/57eaeb9578748ff92a000009
// Sum Mixed Array
/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/
// function sumMix(m){                                 // First solution
//     return m.reduce( (acc, c) => Number(acc) + Number(c))
// }


function sumMix(m){                                 // Learned solution
    return m.reduce( (acc, c) => acc + Number(c), 0)
}

console.log(sumMix([9, 3, '7', '3']));
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])); 
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])); 