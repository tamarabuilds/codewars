// https://www.codewars.com/kata/55ecd718f46fba02e5000029
// What is between?
/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/
function between(a,b){
    // return Array.from({length:(b-a+1)}, (e, i) => i + a)            // First solution
    // let answer = []
    // for( let i = 0; i <= b-a; i++){                         // Second solution
    //     answer.push(a + i)
    // }
    // return answer

    // let answer = []
    // for( let i = a; i <= b; i++){                   // Learned solution
    //     answer.push(i)
    // }
    // return answer
    return Array.from({length: b-a+1}, () => a++)           // Learned solution
    
}

console.log(between(1, 4))
console.log(between(-2,2))