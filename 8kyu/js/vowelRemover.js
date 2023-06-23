// https://www.codewars.com/kata/5547929140907378f9000039
// Vowel remover

/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

// P: strings
// R: string without vowels

function shortcut(string){
    // find and replace
    return string.replaceAll('a','').replaceAll('e','').replaceAll('i','').replaceAll('o','').replaceAll('u','')
}

console.log(shortcut('hello'))      // hll
console.log(shortcut('codewards'))      // cdwrs
console.log(shortcut('how are you today?'))     // hw r y tdy?