// https://www.codewars.com/kata/546e2562b03326a88e000020
// Digit*Digit
/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
*/
function squareDigits(num){
    // let numArr = String(num).split('')              // First solution
    // let squaredArr = []
    // for(let i = 0; i < numArr.length; i++){
    //     squaredArr.push(numArr[i]**2)
    // }
    // return Number(squaredArr.join(''))

    return Number(String(num).split('').map( (e) => e*e).join(''))          // Second solution
}

console.log(squareDigits(3213)) // 9414
console.log(squareDigits(2112)) // 4114
console.log(squareDigits(0)) // 0