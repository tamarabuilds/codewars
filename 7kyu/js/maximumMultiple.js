// https://www.codewars.com/kata/5aba780a6a176b029800041c
// Maximum Multiple
/*
Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
Input >> Output Examples
maxMultiple (2,7) ==> return (6)
Explanation:
(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

maxMultiple (10,50)  ==> return (50)
Explanation:
(50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

maxMultiple (37,200) ==> return (185)
Explanation:
(185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .
*/

// P: positive values
// R: greatest divisor

function maxMultiple(divisor, bound){
    // variable.
    // let max = bound
    // // loop, counting down
    // for (let i = bound; i > 0; i--)
    // // conditional
    //     if( i % divisor === 0){
    //         max = i
    //         return i
    //     }

    // return 0

    // // ... First solution
    // // +: works, clean
    // // -: long winded

    // return bound % divisor === 0 ? bound : maxMultiple(divisor, bound - 1)

    // // ... Second solution
    // // +: used recursion!!
    // // -: could be counfusing

    return bound - (bound % divisor)

    // ... Learned solution
    // +: clean, math
    // -: reminder of mod required.
}

console.log(maxMultiple(2,7))       // 6
console.log(maxMultiple(3,10))       // 9
console.log(maxMultiple(7,17))       // 14