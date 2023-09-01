// https://www.codewars.com/kata/5842df8ccbd22792a4000245
// Write Number in Expanded Form
/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

// P: integer, whole > 0, not sure how long...
// R: string

function expandedForm(num){
    // convert to string
    // let str = num.toString()
    
    // // set answer to first entry
    // let answer = str[0] + '0'.repeat(str.length - 1)

    // // for loop through each character
    // for ( let i = 1; i < str.length; i++){
    //     // if number is > 0, include and calculate length of remaining string. Fill remaining string with 0s
    //     if ( str[i] > 0 ){
    //         answer += ' + ' + str[i] + '0'.repeat(str.slice(i + 1).length)
    //         // console.log(answer)
    //     }
    // }
    // return answer

    // // First solution: long winded but works nice

    return num.toString()
                .split('')
                .map( (e, i, arr) => e + '0'.repeat(arr.length - i - 1))
                .filter( e => e > 0)
                .join(' + ')

    // learned solution: using arrays and join
}

console.log(expandedForm(12))       // 10 + 2
console.log(expandedForm(42))       // 40 + 2
console.log(expandedForm(70304))       // 70000 + 300 + 4