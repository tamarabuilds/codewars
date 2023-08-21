// https://www.codewars.com/kata/545cedaa9943f7fe7b000048
// Detect Pangram
/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

// P: string
// R: boolean

function isPangram(string){
    // const the alphabet as array
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    // map if includes
    // return alphabet.map( (e)=> string.toLowerCase().includes(e)).sort()[0] === true
    // return [...new Set(alphabet.map( (e)=> string.toLowerCase().includes(e)))].length === 1
    // return alphabet.map( (e)=> string.toLowerCase().includes(e)).includes(false) === false

    // first solutions: work! but could be simpler

    return alphabet.every( (x)=> string.toLowerCase().includes(x))

    // learned solution. Need to practice using every and string....
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))      // true
console.log(isPangram('This is not a pangram.'))      // false
console.log(isPangram('Cwm fjord bank glyphs vext quiz'))      // true