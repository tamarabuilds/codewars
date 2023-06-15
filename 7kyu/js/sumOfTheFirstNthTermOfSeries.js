// https://www.codewars.com/kata/555eded1ad94b00403000071
// Sum of the first nth term of Series

/*
Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/


// PREP
// Parameters: natural numbers, +, 0. Series: denominator increases by 3
// Return: two decimals, string
// Example

// function seriesSum(n){
//     if (n === 0) return '0.00'                      // First solution
//     // Return variable
//     let adding = 1
//     let denom = 1
//     // Loop
//     for ( let i = 2; i <= n; i++){
//         // Increment denominator
//         denom += 3
//         adding += 1/(denom)
//     }

//     // Return with 2 decimal string
//     return adding.toFixed(2).toString()  

// }


// P: natural numbers, 0, +
// R: two decimals, string
// E:

function seriesSum(n){
    // Answer variable

    // Loop
    // Add 3 to denominator
    // Return string with 2 decimals

    // return Array.from({length: n}, i => 1 ).map( (e, i) => 1/(1 + (3 * i))).reduce( (acc, c) => acc + c, 0).toFixed(2).toString()               // Second solution

    // return Array.from({length: n}, (e, i) => 1 / (1 + (3 * i))  ).reduce( (acc, c) => acc + c, 0).toFixed(2).toString()             // Third solution


    let answer = 0                                          // Learned solution
    for (let i = 0; i < n; i++){
        answer += 1/ (1 + 3 * i)
    }
    return answer.toFixed(2)
}




console.log( seriesSum(1))              // 1.00
console.log( seriesSum(2))              // 1.25
console.log( seriesSum(3))              // 1.39
console.log( seriesSum(4))              // 1.49
console.log( seriesSum(0))              // 0.00