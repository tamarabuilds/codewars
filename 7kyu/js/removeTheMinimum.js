// https://www.codewars.com/kata/563cf89eb4747c5fb100001b
// Remove the minimum
/*
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

// P: integers, +/-, high number > low number > lower index > higher index, 
// R: Do not mutate original array, [] --> []

function removeSmallest(numbers){
    // ---- First Solution --- //
    // // Variables                                   
    // let toRemove = true
    // let answer = []
    
    // // Find min
    // const min = Math.min(...numbers)

    // // Loop
    // // Conditional for min
    // for (let i = 0; i < numbers.length; i++){
    //     // Return remaining once min found
    //     if ( numbers[i] === min && toRemove) {
    //         toRemove = false
    //     } else {
    //         answer.push(numbers[i])
    //     }
    // }
    // return answer

    // ....First solution
    // +: Clean, clear
    // -: Could take a lot of time if array is large


    // ---- Second Solution --- //
    // 
    // // Variables
    // let minIndex = 0

    // // Find min
    // const min = Math.min(...numbers)

    // // Locate and remove first min
    // minIndex = numbers.findIndex( (e) => e === min)

    // return minIndex === -1 ? [] : numbers.toSpliced(minIndex, 1)                // Codewars doesn't recognize toSpliced()
    

    // ... Second solution
    // +: cleaner, just removes 1 element without having to walk every element
    // -: doesn't work in codewars!!


    // // --- Third solution --- //
    // let minIndex = numbers.findIndex( e => e === Math.min(...numbers))
    // return numbers.slice(0,minIndex).concat(numbers.slice(minIndex+1))

    // ... Third solution
    // +: concise, fast
    // -: wordy. Maybe confusing


    // --- Learned Solution --- //
    const min = Math.min(...numbers)
    return numbers.filter( (e, i, arr) => i !== arr.indexOf(min))

    // ... Learned solution
    // +: very clean, with filter
    // - : none?



}









console.log(removeSmallest([1,2,3,4,5]))  // [2,3,4,5]
console.log(removeSmallest([5,3,2,1,4]))  // [5,3,2,4]
console.log(removeSmallest([2,2,1,2,1]))  // [2,2,2,1]
console.log(removeSmallest([]))  // []

