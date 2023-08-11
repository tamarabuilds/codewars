// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334
// Bin to Decimal

/*
Complete the function which converts a binary number (given as a string) to a decimal number.
*/

// P: integer in binary
// R: integer, decimal number

function binToDec(bin){
    // method
    return parseInt(bin, 2)
}

console.log(binToDec(1))    // 1
console.log(binToDec(0))    // 0
console.log(binToDec(1001001))    // 73