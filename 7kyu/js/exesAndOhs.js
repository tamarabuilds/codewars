// https://www.codewars.com/kata/55908aad6620c066bc00002a
// Exes and Ohs
/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// function XO(str){
//     str = str.toLowerCase()                         // First solution
//     let xArr = []
//     let oArr = []
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === 'x'){
//             xArr += str[i]
//         } else if(str[i] === 'o'){
//             oArr += str[i]
//         }
//     }
//     return xArr.length === oArr.length
// }


// function XO(str){                                   // Second solution
//     str = str.toLowerCase()
//     let xArr = str.split('').filter( e => e === 'x')
//     let oArr = str.split('').filter( e => e === 'o')
//     return xArr.length === oArr.length
// }


function XO(str){

    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length              // Learned solution
}

console.log(XO('xo'))
console.log(XO('xxOo'))
console.log(XO('xoXXOOMMXO'))
console.log(XO('xmmo'))
console.log(XO('xxxm'))
console.log(XO('Oo'))