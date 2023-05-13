// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1
// Parse nice int from char problem
/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
*/

function getAge(inputString){
    // return Number(inputString[0])                       // First solution
    // let arr = inputString.split('')
    // let answer =  Number(arr.filter( (e) => ( Number(e) >= 0)).join(''))        // Second solution
    // return answer

    // return Number(inputString.split('').filter((e) => (Number(e) >= 0)).join(''))       // Third solution
    return parseInt(inputString)
}

console.log(getAge("4 years old"))