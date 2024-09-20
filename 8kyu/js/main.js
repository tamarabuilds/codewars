console.log("main.js loaded");

// PREP
// PARAMETERS: string with numbers, letters, and special characters
// RETURN: string with spacing, no numbers
// EXAMPLES
// PSEUDOCODE

// https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-8&tags=Fundamentals&beta=false&order_by=satisfaction_percent%20desc%2Ctotal_completed%20desc

/////////////// LAST: page 1:Remove First and Last Character
















//Remove First and Last Character
/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
*/
/*
function removeChar(str) {
  let arr = str.split('')
  //remove first char
  arr.splice(0, 1)
  // remove last char
  arr.splice((arr.length-1), 1)
  return arr.join('')
}

console.log(removeChar("eloquent"), "loquen");
console.log(removeChar("country"), "ountr");
console.log(removeChar("person"), "erso");


function removeChar2(str) {
  return str.slice(1, -1)
}

console.log(removeChar2("eloquent"), "loquen");
console.log(removeChar2("country"), "ountr");
console.log(removeChar2("person"), "erso");

*/

//  Opposite number
/*
function opposite(number) {
  //your code here
  return -number
}
*/

/*
// Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
  return bool ? "Yes" : "No"
}

console.log(boolToWord(true), 'Yes')
console.log(boolToWord(false), 'No')

*/

// https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript
/*
Convert a Number to a String!
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"


*/

// PREP
// Parameters: integer
// Return: string
// Examples:

/*
function numberToString(num) {
  // convert num to string
  return num.toString()
}

console.log(numberToString(123), '123')
console.log(numberToString(999), '999')
console.log(numberToString(-999), '-999')
*/

//https://www.codewars.com/kata/5168bb5dfe9a00b126000018

/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

// PREP
// Parameters: string
// Return: string
// Examples:
// Pseudocode:

/*
function solution(str){
  // turn into array
  const arr = str.split('')
  // reverse
  const reverse = arr.reverse()
  // stringify again
  const reversedString = reverse.join('')
  
  return reversedString
}


console.log(solution('world'), 'dlrow')
console.log(solution('hello'), 'olleh')
console.log(solution(''), '')
console.log(solution('h'), 'h')

*/

// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/
// Parameters: array of integers
// Examples:
// Return: sum of positive integers
// Pseudocode:

/*
function positiveSum(arr) {
  // variable
  let sum = 0;
  // if positive add
  arr.map((num) => {
    if (num > 0) {
      sum = sum + num;
    }
  });
  return sum;
}

function positiveSum2(arr) {
  return arr.reduce((a,b) => a + (b > 0? b : 0), 0)
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);

*/

//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


// PREP
// PARAMETERS: integer
// RETURN: "Even" or "Odd"
// EXAMPLES
// PSEUDOCODE

function evenOrOdd(number){
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(4), "Even")
console.log(evenOrOdd(0), "Even")
console.log(evenOrOdd(7), "Odd")

*/
