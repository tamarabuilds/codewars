console.log("main.js loaded");

// PREP
// PARAMETERS: string with numbers, letters, and special characters
// RETURN: string with spacing, no numbers
// EXAMPLES
// PSEUDOCODE

// https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-8&tags=Fundamentals&beta=false&order_by=satisfaction_percent%20desc%2Ctotal_completed%20desc

/////////////// LAST: page 1:
















///////////////Keep Hydrated!

/*
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/

/*
function litres(time) {
  return Math.floor(time / 2);
}

console.log(litres(2), 1)
console.log(litres(1.4), 0)
console.log(litres(12.3), 6)
console.log(litres(0.82), 0)
console.log(litres(11.8), 5)
console.log(litres(1787), 893)
console.log(litres(0), 0)
*/





//////////////////// Century From Year
/*
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28
*/
/*
function century(year) {
  // // if less than 101, return 1
  // if (year < 101) return 1
  // // get first 2 digits, if there's a modulus, round up
  // let answer = year/100
  // if (year % 100 > 0) return Math.floor(answer) + 1
  // return answer;
  return Math.ceil(year/100)
}

console.log(century(1705), 18)
console.log(century(1900), 19)
console.log(century(1601), 17)
console.log(century(2000), 20)
console.log(century(89), 1)
*/

/////////////////////////Abbreviate a Two Word Name
/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

/*
function abbrevName(name){
  const firstInitial = name[0].toUpperCase()
  const lastInitial = name.split(' ')[1][0].toUpperCase()
  return `${firstInitial}.${lastInitial}`
}

console.log(abbrevName("Sam Harris"), "S.H")
console.log(abbrevName("P Favuzzi"), "P.F")
*/



//////////////////////////////Convert a String to a Number!

/*
const stringToNumber = function(str){
  // return +str;
  // return Number(str);
}

console.log(stringToNumber('1234'), 1234)
*/

//////////////////// Basic Mathematical Operations
/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
*/
/*
function basicOp(operation, value1, value2){
  // switch (operation){
  //   case "+":
  //     return value1 + value2;
  //   case '-':
  //     return value1 - value2;
  //   case '*':
  //     return value1 * value2;
  //   case '/':
  //     return value1 / value2;
  // }
  // return 0;

  const cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2,
  }
  return cases[operation]
}

console.log(basicOp("+", 4, 7), 11)
console.log(basicOp("-", 15, 18), -3)
console.log(basicOp("*", 5, 5), 25)
console.log(basicOp("/", 49, 7), 7)
*/


////////////////////////Counting sheep...
/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

// function countSheeps(sheep) {
//   // reduce, add if true
//   // return sheep.reduce((a, c) => c ? a + c : a, 0)
//   /*
//   let answer = 0;
//   for (let i=0; i< sheep.length; i++){
//     if (sheep[i]){
//       answer++
//     }
//   }
//   return answer
// */
// return sheep.filter(Boolean).length
//   // return Math.sum(...sheep.map((val) => +val)) // nope
// }
/*
console.log(countSheeps([]), 0)
console.log(countSheeps([undefined]), 0)
console.log(countSheeps([null]), 0)
console.log(countSheeps([false]), 0)
console.log(countSheeps([true]), 1)
console.log(countSheeps([undefined,null,false,true]), 1)
console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]), 2)
console.log(countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]), 17)


*/

////////////////////////////Remove String Spaces
/*
Write a function that removes the spaces from the string, then return the resultant string.


*/
/*
function noSpace(x){
  let answer = ''
  // loop through, if space skip, otherwise print out
  for(let i=0; i < x.length; i++){
    if(x[i] === ' ') {} else {
      
      answer = answer + x[i] 
    }
  }
  return answer

  // turn into array, split on space, then join
  // return x.split(' ').join('')
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"), "8j8mBliB8gimjB8B8jlB")
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"), "88Bifk8hB8BB8BBBB888chl8BhBfd")
*/

//////////////////////Find the smallest integer in the array
/*
Given an array of integers your solution should find the smallest integer.


*/
/*
function findSmallestInt(arr) {
  // min
  return Math.min(...arr)
}

console.log(findSmallestInt([34, 15, 88, 2]), 2)
console.log(findSmallestInt([78,56,232,12,18]), 12)
console.log(findSmallestInt([78,56,232,12,0]), 0)
*/
///////////Grasshopper - Summation
/*
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
*/
/*
var summation = function (num) {
  // for loop
  let result = 0;
  for (let i = 1; i <= num; i++){
    result = result + i;
  }
  return result
}

console.log(summation(1), 1)
console.log(summation(2), 3)
console.log(summation(8), 36)
*/



///// String repeat
//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
/*
function repeatStr (n, s) {
  // let output = '';
  // for(let i=0; i < n; i++) {
  //   output = output + s
  // }
  // return output;

  return s.repeat(n)
}

console.log(repeatStr(3, "*"), "***")
console.log(repeatStr(5, "#"), "#####")
console.log(repeatStr(2, "ha "), "ha ha")

*/


////////// Square(n) Sum
/*

Complete the square sum function so that it squares each number passed into it and then sums the results together.
*/

// PREP
// Parameters: array of integers
// RESULT: number
// examples

/*

function squareSum(numbers){
  // reduce each number in the array and add it all up
  // return numbers.reduce((a,c) => a + (c * c), 0)

  // map through each number and add it to the result
  let result = 0;
  numbers.map((n) => {
    result = (n * n) + result
  })
  return result

}

console.log(squareSum([1,2]), 5)
console.log(squareSum([0,3,4,5]), 50)
console.log(squareSum([]), 0)

*/





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
