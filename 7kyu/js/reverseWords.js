// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
// Reverse words
/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str){
    // let answer = []                                 // First solution
    // let strArr = str.split(' ')
    // for (let i = 0; i < strArr.length; i++){
    //     // console.log(strArr[i].split('').reverse())
    //     answer += strArr[i].split('').reverse().join('')
    //     answer += ' '
    //     // console.log(answer)
    // }
    // return answer.trim()


    // let strArr = str.split(' ')                             // Second solution
    // return strArr.map( (e, i) => e.split('').reverse().join('') + ' ').join('').trim()


    
    // let strArr = str.split(' ')                             //Learned solution
    // return strArr.map( (e) => e.split('').reverse().join('')).join(' ')

    return str.split('').reverse().join('').split(' ').reverse().join(' ')          // Learned solution

}





console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
// console.log(reverseWords('apple'))
// console.log(reverseWords('a b c d'))
// console.log(reverseWords('double  spaced  words'))