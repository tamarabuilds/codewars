// https://www.codewars.com/kata/55f2b110f61eb01779000053
// Beginner Series #3 Sum of Numbers
/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/
function getSum(a, b){
    // let answer = 0                                          // First solution
    // if( a > b )
    //     for( let i = b; i <=a; i++){
    //         answer += i 
    //     } else if(b > a){
    //         for (let j = a; j <= b; j++){
    //             answer += j
    //         }
    //     } else{
    //         return a
    //     }
    //     return answer


    return Array.from({length: Math.abs(a-b) + 1}, (e, i)=> i + Math.min(a,b)).reduce( (acc, c)=> acc + c)                  // Second solution

}

console.log(getSum(0,-1))
console.log(getSum(0,1))
console.log(getSum(2,2))
console.log(getSum(1,0))
console.log(getSum(1,2))