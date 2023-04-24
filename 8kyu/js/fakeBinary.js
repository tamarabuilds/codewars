// https://www.codewars.com/kata/57eae65a4321032ce000002d
// Fake Binary
/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/
// function fakeBin(x){            // First solution
//     let fakeBinary = ''
//     for(let i = 0; i < x.length; i++){
//         if( x[i] < 5){
//             fakeBinary += '0'
//         } else {
//             fakeBinary += '1'
//         }
//     }
//     return fakeBinary
// }

function fakeBin(x){
    return x.split('').map( n => n > 4 ? 1 : 0).join('')        //  Learned solution
}

console.log(fakeBin('45385593107843568') === '01011110001100111')
console.log(fakeBin('45385593107843568'))