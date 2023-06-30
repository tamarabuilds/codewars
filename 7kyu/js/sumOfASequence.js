// https://www.codewars.com/kata/586f6741c66d18c22800010a
// Sum of a sequence
/*
Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
*/

// P: non-negative values (decimals?)
// R: sum all the steps in the sequence. Integer



const sequenceSum = (begin, end, step) => {
    // variable storing steps
    // let steps = []
    // // loop
    // for ( begin; begin <= end; begin += step){
    //     // check integer for end
    //     steps.push(begin)
    // }
    // // return sum of steps
    // return steps.reduce( (acc, c) => acc + c, 0)

    // // ... First solution ...
    // // +: clear, organized
    // // -: might be expensive??


    // let sum = 0
    // for (begin; begin <= end; begin += step){
    //     sum += begin
    // }
    // return sum

    // // ... Learned solution
    // // +: clear, efficient



    return begin > end? 0: begin + sequenceSum(begin + step, end, step)

    // ... Learned solution
    // +: uses recursion!!
    // -: not as clear

  };



console.log(sequenceSum(2, 1, 2))       // 0
console.log(sequenceSum(2, 6, 2))       // 12
console.log(sequenceSum(1, 5, 1))       // 15
console.log(sequenceSum(1, 5, 3))       // 5