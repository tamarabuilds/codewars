// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
// Shortest Word
/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
function findShort(s){
    // return Math.min(...s.split(' ').map( (e) => e.length))              // First solution

    return s.split(' ').sort( (a, b) => a.length - b.length)[0].length      // Learned solution
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
console.log(findShort("turns out random test cases are easier than writing out basic ones"))