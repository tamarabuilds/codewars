// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b
// Simple Fun #176: Reverse Letter
/*
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/

// P: string with non-alphabetic characters
// R: reverse string all alpha

function reverseLetter(str){
    // // variables
    // const alpha = 'abcdefghijklmnopqrstuvwxyz'
    // const stack = []
    
    // // loop
    // for( let i = 0; i < str.length; i++){
    //     // condition for alpha
    //     if( alpha.includes(str[i])){
    //         stack.unshift(str[i])
    //     }
    // }

    // return stack.join('')

    // // ... First solution
    // // +: works, clear
    // // -: wordy

    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    return str.split('').filter( e => alpha.includes(e)).reverse().join('')

    // ... second solution
    // +: works, concise.
    // -: confusing?


}

console.log(reverseLetter('krishan'))       // nahsirk
console.log(reverseLetter('ultr53o?n'))       // nortlu
console.log(reverseLetter('ab23c'))       // cba
