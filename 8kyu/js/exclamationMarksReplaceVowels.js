// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed
// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
/*
DESCRIPTION:
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

function replace(s){
    // variable for vowels, answer
    const vowels = 'aeiouAEIOU'
    // let answer = ''
    // loop
    // for (let i = 0; i < s.length; i++){
    //     // conditional for vowel, replace
    //     if (vowels.includes(s[i])){
    //         answer += '!'
    //     } else {
    //         answer += s[i]
    //     }
    // }
    // return answer

    // First solution
    // clean. too simple?

    return s.split('').map( e => vowels.includes(e) ? '!': e).join('')


}

console.log(replace("Hi!"))     // H!!
console.log(replace("!Hi! Hi!"))     // !H!! H!!