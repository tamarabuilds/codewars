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

// function getDivistorsCnt(n){                // Learned 
//     let count = 0
//     if (n === 1) return 1

//     if (n % Math.sqrt(n) === 0) count ++
//     for (let i = 1; i < Math.sqrt(n); i++){
//         if (n % i === 0){
//             count += 2
//         }
//     }
//     return count
// }

function getDivisorsCnt(n) {                    // Learned
    let count = 0;
    const sqrtN = Math.floor(Math.sqrt(n));
  
    for (let i = 1; i <= sqrtN; i++) {
      if (n % i === 0) {
        count += 2; // Both i and n/i are divisors
      }
    }
  
    if (sqrtN * sqrtN === n) {
      count--;
    }
  
    return count;
  }





console.log(getDivistorsCnt(1))  // 1
console.log(getDivistorsCnt(4))  // 3
console.log(getDivistorsCnt(5))  // 2
console.log(getDivistorsCnt(12))  // 6 
console.log(getDivistorsCnt(30))  // 8
console.log(getDivistorsCnt(54))  // 8












/*
    // Variable to count
    let count = 1
    let i = n
    // console.log(i)

    // Loop
    while (i >= 1){
        console.log(i)
        // Conditional for divisibility
        if (i % 2 === 0){
            count++
            i = i / 2
        } else if (i % 3 === 0){
            count++
            i = i / 3
        }  else if (i % 5 === 0){
            count++
            i = i / 5
        }  else if (i % 7 === 0){
            count++
            i = i / 7
        } else{
            i--
        }
        // return count
    }
    return count
    */