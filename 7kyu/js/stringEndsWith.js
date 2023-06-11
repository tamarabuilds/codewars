// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
// String ends with?
/*
DESCRIPTION:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/


function solution(str, ending){
    // if (ending){                        // First solution
    //     return str.slice(-(ending.length)) === ending
    // }
    // return true

    return str.endsWith(ending)                 // Learned solution
}

console.log(solution('abcde', 'cde'))
console.log(solution('abcde', 'abc'))
console.log(solution('abc', ''))