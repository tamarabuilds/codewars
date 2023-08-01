// https://www.codewars.com/kata/546f922b54af40e1e90001da
// Replace With Alphabet Position

/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

// P: string
// R: integers as a string

function alaphabetPosition(text){
    // variable for answer
    let answer = ''
    // alpha object
    const alpha = {
        'a' : '1',
        'b' : '2',
        'c' : '3'
    }
    // map lookup with space & if no, blank
    answer = text.split('').map( (e, i, a) => Object.keys(alpha).includes(e) ?
        alpha[e] : '')
    return answer.join(' ')
}

console.log(alaphabetPosition('a!c')) // "1 3"
// console.log(alaphabetPosition("The sunset sets at twelve o' clock.")) //  "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
// console.log(alaphabetPosition("The narwhal bacons at midnight.")) //   20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20
