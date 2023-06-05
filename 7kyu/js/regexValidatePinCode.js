// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
// Regex validate PIN code
/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/
function validationPIN(pin){
    // const nums = '0123456789'                                                                   // First solution
    // const countNums = pin.split('').filter( n => nums.includes(n)).length
    // return  countNums === pin.length && countNums === 4 ||  countNums === pin.length && countNums === 6

    pin = pin.split('')                                                                         // Learned solution
    const findNaN = pin => pin.find( character => !parseInt(character) >= 0)
    if ((pin.length === 4 || pin.length === 6) && !findNaN){
        return true
    } else {
        return false
    }

}

console.log(validationPIN('1'))
console.log(validationPIN('12'))
console.log(validationPIN('1'))
console.log(validationPIN('123'))
console.log(validationPIN('12345'))
console.log(validationPIN('1234567'))
console.log(validationPIN('-1'))
console.log(validationPIN('1.34'))
console.log(validationPIN('0000000'))

console.log(validationPIN('a1'))
console.log(validationPIN('1.2'))

console.log(validationPIN('1234'))
console.log(validationPIN('0000'))
console.log(validationPIN('1111'))
console.log(validationPIN('123456'))
console.log(validationPIN('1231'))
console.log(validationPIN('-1234'))