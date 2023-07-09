// https://www.codewars.com/kata/59cfc000aeb2844d16000075
// Alternate capitalization

/*
DESCRIPTION:
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

// P: string, lowercase, no spaces
// R: two strings

function capitalize(s){
    // variables
    let oddCaps = ''
    let evenCaps = ''
    // loop
    for ( let i = 0; i < s.length; i++){
        // conditional for even/odd
        if (i % 2 === 0){
            oddCaps += s[i]
            evenCaps += s[i].toUpperCase()
        } else{
            evenCaps += s[i]
            oddCaps += s[i].toUpperCase()
        }
    }

    return [evenCaps, oddCaps]

    // ... First solution
    // +: works, clear
    // -: long?
}

console.log(capitalize('abcdef'))       //  'AbCdEf', 'aBcDeF'
console.log(capitalize('codewars'))       //  'AbCdEf', 'aBcDeF'