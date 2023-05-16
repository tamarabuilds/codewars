// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
// Is it a palindrome?

/*
Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".
*/

function isPalindrome(x){
    // return x.toLowerCase().split('').reverse().join('') == x.toLowerCase()          // First solution

    return [...x].reverse().join('').toLowerCase() == x.toLowerCase()           // Learned solution
}

console.log(isPalindrome("a"))
console.log(isPalindrome("aba"))
console.log(isPalindrome("Abba"))
console.log(isPalindrome("hello"))
console.log(isPalindrome("Bob"))
console.log(isPalindrome("Madam"))
console.log(isPalindrome("AbBa"))
console.log(isPalindrome("''"))