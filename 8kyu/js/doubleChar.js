// https://www.codewars.com/kata/56b1f01c247c01db92000076
// Double Char
/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/
// function doubleChar(str){                                   // First solution
//     return str.split('').map( (c) => c.repeat(2)).join('')
// }

function doubleChar(str){                       // Second solution
    let answer = ''
    for( let i = 0; i < str.length; i++){
        answer += str[i]
        answer += str[i]
    }
    return answer
}



console.log(doubleChar('Hello'))
console.log(doubleChar('Adidas Baby!'))