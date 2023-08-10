// https://www.codewars.com/kata/559d2284b5bb6799e9000047
// Add Length

/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/

// P: string
// R: array

function addLength(str){
    // // variable for the message
    // let answer = []
    // // str into arr
    // let arr = str.split(' ')
    // // loop
    // for (let i = 0; i < arr.length; i++){
    //     // add word and its length
    //     answer.push(arr[i] + ' ' + arr[i].length)
    // }

    // return answer

    // // first solution: works, clear. Possible to do with method?


    return str.split(' ').map( (e) => e + ' ' + e.length)

    // Second solution: all in 1 line. But maybe not as clear?
}

console.log(addLength('apple ban'))     // ["apple 5", "ban 3"]
console.log(addLength('you will win'))     // ["you 3", "will 4", "win 3"]