// https://www.codewars.com/kata/5208f99aee097e6552000148
// Break camelCase
/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

// P: string
// R: string

function solution(string){
    // // variable for storing answer
    // let answer = ''
    // // for each character
    // for ( let i = 0; i < string.length; i++){
    //     // check if character is same as uppercase if so, insert a space, else add character
    //     if ( string[i].toUpperCase() === string[i]){
    //         answer += ' '
    //     }
    //     answer += string[i]
    // // endfor
    // }

    // return answer

    // first solution: works! clear too

    return string.split('').map( e => e === e.toUpperCase() ? ' ' + e : e).join('')

    // second solution: 1-liner :)
}

console.log(solution('camelCasing'))        // camel Casing
console.log(solution('camelCasingTest'))        // camel Casing Test