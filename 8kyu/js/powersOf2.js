// https://www.codewars.com/kata/57a083a57cb1f31db7000028
// Powers of 2
/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/
function powersOfTwo(n){
    // if(n < 0) return 0                  // First solution
    // let powersArr = []
    // for(let i = 0; i <= n; i++){
    //     powersArr.push(2**i)
    // }
    // return powersArr

    // return Array.from( {length: (n+1)}, (e,i) => 2**i)          // Second solution

    return [...Array(n+1)].map( (_,i) => Math.pow(2,i))         // learned solution
}


console.log(powersOfTwo(0))
console.log(powersOfTwo(1))
console.log(powersOfTwo(4))