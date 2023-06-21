// // https://www.codewars.com/kata/542c0f198e077084c0000c2e
// // Count the divisors of a number
// /*
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
// */

// // P: n goes up 500,000, positive
// // R: integer of count of divisors

// function getDivistorsCnt(n){
//     // Variable to count
//     let count = 0
//     let divisor = 1
//     // Loop
//     for (let i = 1; i <= (n/divisor); i++){
//         // Conditional for divisibility
//         if (n % i === 0){
//             count += 1
//             divisor = i
//         }
//         // return count
//     }
//     return count
// }





// console.log(getDivistorsCnt(1))  // 1
// console.log(getDivistorsCnt(4))  // 3
// console.log(getDivistorsCnt(5))  // 2
// console.log(getDivistorsCnt(12))  // 6 
// console.log(getDivistorsCnt(30))  // 8
// console.log(getDivistorsCnt(54))  // 8
