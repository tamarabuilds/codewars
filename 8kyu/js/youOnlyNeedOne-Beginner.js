// https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript
// You only need one - Beginner
/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

// function check(a, x){
//     return a.includes(x)        // First solution
// }

// let check = (a, x) => a.includes(x)         // My second solution using arrow function!!

let check = (a, x) => a.indexOf(x) > -1             // Learned solution


console.log(check([66,101], 66))
console.log(check(['t', 'e', 's', 't'], 'e'))
console.log(check(['what', 'a', 'great', 'kata'], 'kat'))