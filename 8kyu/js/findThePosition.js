// https://www.codewars.com/kata/5808e2006b65bff35500008f
// Find the position!
/*

DESCRIPTION:
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

// P: letter
// R: string with numeric string

function position(letter){
    // const for alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    // find index in string
    return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`
}

console.log(position('a')) // Postion of alphabet: 1
console.log(position('z')) // Postion of alphabet: 26
console.log(position('e')) // Postion of alphabet: 5