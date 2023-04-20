// https://www.codewars.com/kata/576bb71bbbcf0951d5000044
// Count of positives / sum of negatives
/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/
function countPositivesSumNegatives(input){
    return input && input.length ? [ input.filter( n => n > 0 ).length , input.filter( n => n < 0 ).reduce( (acc, c) => acc + c, 0) ] : []


    // if(!input){
    //     return []
    // }
    
    // let evens = 0
    // let odds = 0
    // for(let i = 0; i < input.length; i++){
    //     if(input[i] > 0){
    //         evens++
    //     } else if(input[i] < 0){
    //         odds += input[i]
    //     }
    // }

    // if(evens === 0 && odds === 0){
    //     return []
    // } else{
    //     return [evens, odds]
    // }




    // if(input === null || input === 'empty'){
    //     return []
    // }
    // let evens = input.filter( (element) => element > 0)
    // // console.log(evens)
    // let odds = input.filter( (element) => element < 0)
    // // console.log(odds)
    // const totalOdds = odds.reduce( (acc, c) => acc + c, 0)
    // // console.log(totalOdds)
    // if(evens.length === 0 && totalOdds === 0){
    //     return []
    // } else{
    //     return [evens.length, totalOdds]
    // }
    

}



const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
const testNull = null
const testEmpty = []

console.log(countPositivesSumNegatives(testData))
console.log(countPositivesSumNegatives(testNull))
console.log(countPositivesSumNegatives(testEmpty))
console.log(countPositivesSumNegatives())
