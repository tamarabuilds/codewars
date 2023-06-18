// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
// Testing 1-2-3
/*

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/
// P: list of strings
// R: string prepended by "[index]: "


var number=function(array){
    //map with "[index]: ' 
    // return array.map( (e,i) => i+1 + ": " + e)           // First solution

    // return array.map( (e,i) => `${i+1}: ${e}`)              // Second solution

}

// ... First solution ....
// +: short and sweet
// -: Could use template literals, creates a new array. Maybe could insert into existing




console.log(number(['a','b','c']))