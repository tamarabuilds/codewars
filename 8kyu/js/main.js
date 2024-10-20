console.log("main.js loaded");

// PREP
// PARAMETERS: string with numbers, letters, and special characters
// RETURN: string with spacing, no numbers
// EXAMPLES
// PSEUDOCODE

// https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-8&tags=Fundamentals&beta=false&order_by=satisfaction_percent%20desc%2Ctotal_completed%20desc

///////////////



















//////////////////////Count the Monkeys!


function monkeyCount(n) {
  // your code here
  return Array(n).fill(1).map((e, i) => i + 1)
  }

console.log(monkeyCount(5), [1, 2, 3, 4, 5])


//////////////////////Thinkful - Logic Drills: Traffic light
/*
function updateLight(current) {
  
  //your code here!
  if(current === 'green') return "yellow"
  if(current === 'yellow') return "red"
  return 'green'

}

console.log(updateLight('green'), 'yellow')
console.log(updateLight('yellow'), 'red')
console.log(updateLight('red'), 'green')
*/

/////////////////////// Double Char
/*
function doubleChar(str) {
  // Your code here
  return str.split('').map( e => e.repeat(2)).join('')
}


console.log(doubleChar('abcd'), 'aabbccdd')
console.log(doubleChar('Adidas'), 'AAddiiddaass')

*/


///////////////////Quarter of the year
/*
const quarterOf = (month) => {
  // Your code here
  return Math.ceil(month/3)
}

console.log(quarterOf(3), 1)
console.log(quarterOf(8), 3)
console.log(quarterOf(11), 4)
console.log(quarterOf(4), 2)

*/

////////////////////// The Feast of Many Beasts

/*
function feast(beast, dish) {
  //your function here
  const first = beast[0];
  const last = beast[beast.length - 1];
  return dish[0] === first && dish[dish.length - 1] === last
}


console.log(feast("great blue heron", "garlic naan"), true)
console.log(feast("chickadee", "chocolate cake"), true)
console.log(feast("brown bear", "bear claw"), false)
*/



///////////////// Remove exclamation marks
/*
function removeExclamationMarks(s) {
  return s.split('!').join('');
}

console.log(removeExclamationMarks("Hello World!"), "Hello World")
*/



////////////////////Transportation on vacation
/*
function rentalCarCost(d) {
  // Your solution here
  if ( d >= 7) return (d * 40) - 50
  if ( d >= 3) return (d * 40) - 20
  return d * 40

}

console.log(rentalCarCost(1), 40)
console.log(rentalCarCost(3), 100)
console.log(rentalCarCost(6), 220)
console.log(rentalCarCost(7), 230)
console.log(rentalCarCost(10), 350)
*/


///////////////////// Sum Mixed Array
/*
function sumMix(x){
  const nums = x.map( e => parseInt(e))
  return nums.reduce( (a, c) => a + c, 0)
}

console.log(sumMix([9, 3, '7', '3']), 22)
*/


/////////////////////////// Grasshopper - Personalized Message
/*
function greet (name, owner) {
  if (name === owner) return `Hello boss`;
  return `Hello guest`
}

*/


/////////////////////////Area or Perimeter
/*
const areaOrPerimeter = function(l , w) {
  if (l === w) return l * w;
  return (2 * l) + (2 * w) 
};

*/

///////////////////Sum without highest and lowest number
/*
function sumArray(array) {
  if (!array || array.length < 3) return 0
  const sorted = array.sort((a, b) => a - b)
  sorted.shift()
  sorted.pop()
  return sorted.reduce((a, c) => a  + c, 0)
  
  
  // if (!array || array.length < 3) return 0
  // const min = Math.min(...array)
  // const max = Math.max(...array)
  // const minLocation = array.indexOf(min)
  // const maxLocation = array.indexOf(max)

  // // const newArray = array.map(e => (e !== min && e !== max) ? e :  0)
  // // return newArray.reduce((a, c) => a  + c, 0)
  // return array.slice(minLocation)

}
*/
// console.log(sumArray(null), 0)
// console.log(sumArray([]), 0)
// console.log(sumArray([3]), 0)
// console.log(sumArray([3, 5]), 0)
// console.log(sumArray([6, 2, 1, 8, 10]), 16)
// console.log(sumArray([0, 1, 6, 10, 10]), 17)
// console.log(sumArray([-6, -20, -1, -10, -12]), -28)
// console.log(sumArray([-6, 20, -1, 10, -12]), 3)


//////////////////////// Grasshopper - Grade book
/*
Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/
/*
function getGrade (s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3
  if (average >= 90 ) return 'A'
  if (average >= 80 ) return 'B'
  if (average >= 70 ) return 'C'
  if (average >= 60 ) return 'D'
  return 'F'
}
*/

/////////////////////////// Array plus array


/*

function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((acc, col) => acc + col, 0)
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21)
*/


////////////////Total amount of points
/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

/*


function points(games) {
  let tracking = 0;
  games.forEach((e) => {
    const game = e.split(':')
    if (game[0] > game[1]) tracking += 3
    if (game[1] === game[0]) tracking += 1
  } )
  return tracking
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]), 30)
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]), 10)
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]), 0)
console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]), 15)
console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]), 12)

*/




////////////////////////////Find Maximum and Minimum Values of a List
/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.
*/

/*
var min = function(list){
    
  return Math.min(...list);
}

var max = function(list){
  
  return Math.max(...list);
}
*/



//////////////////////////Convert a string to an array
/*
function stringToArray(string){

	// code code code
  return string.split(' ')

}
*/

////////////////////////Rock Paper Scissors!
/*
const rps = (p1, p2) => {
  if( p1 === p2) return "Draw!"
  if (p1 === "rock") {
    switch (p2) {
      case "paper":
        return "Player 2 won!";
      case "scissors":
        return "Player 1 won!";
    }
  }
  if (p1 === "paper") {
    switch (p2) {
      case "rock":
        return "Player 1 won!";
      case "scissors":
        return "Player 2 won!";
    }
  }
  if (p1 === "scissors") {
    switch (p2) {
      case "rock":
        return "Player 2 won!";
      case "paper":
        return "Player 1 won!";
    }
  }
};

console.log(rps("rock", "scissors"), "Player 1 won!");
console.log(rps("scissors", "paper"), "Player 1 won!");
console.log(rps("paper", "rock"), "Player 1 won!");

console.log(rps("scissors", "rock"), "Player 2 won!");
console.log(rps("paper", "scissors"), "Player 2 won!");
console.log(rps("rock", "paper"), "Player 2 won!");

console.log(rps("rock", "rock"), "Draw!");
console.log(rps("paper", "paper"), "Draw!");
console.log(rps("scissors", "scissors"), "Draw!");

*/

////////////////////////If you can't sleep, just count sheep!!
/*
var countSheep = function (num){
  //your code here
  let message = ''
  for (let i = 1; i <= num; i++){
    message += `${i} sheep...`
  }
  return message
}

console.log(countSheep(0), "")
console.log(countSheep(1), "1 sheep...")
console.log(countSheep(2), "1 sheep...2 sheep...")
*/

//////////////////////You Can't Code Under Pressure #1
/*
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}
*/

///////////// Count by X
/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

/*
function countBy(x, n) {
  let z = Array(n).fill(x).map((e, i) => e * (i+1), 1);
  

  return z;
}

console.log(countBy(1,10), [1,2,3,4,5,6,7,8,9,10])
console.log(countBy(2,5), [2,4,6,8,10])
*/

/////////////////////// Will you make it?
/*
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.
*/

/*
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  return mpg * fuelLeft >= distanceToPump
};


console.log(zeroFuel(50, 25, 2), true)
console.log(zeroFuel(100, 50, 1), false)

*/

//////////////////////////// DNA to RNA Conversion

/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/
/*
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  // return dna.split('').map((element) => element === 'T' ? 'U': element).join('')
  // return dna.replaceAll('T', 'U')
  return dna.split('T').join('U')
}

console.log(DNAtoRNA('TTTT'), 'UUUU')
console.log(DNAtoRNA('GCAT'), 'GCAU')
console.log(DNAtoRNA('GACCGCCGCC'), 'GACCGCCGCC')
*/

////////////////////////////Is he gonna survive?
/*
function hero(bullets, dragons){
  return bullets / 2 >= dragons;
  }

  console.log(hero(10, 5), true)
  console.log(hero(7, 4), false)
*/

/////////////////////// Reversed sequence
/*
const reverseSeq = n => {
  // let arr = [n]
  // for (let i = n-1; i > 0; i--){
  //   arr.push(i)
  // }
  // return arr
  return Array(n).fill(0).map( (e,i) => n - i)
};

console.log(reverseSeq(5), [5, 4, 3, 2, 1])
*/

////////////////////// Beginner - Reduce but Grow
/*
function grow(x) {
  return x.reduce( (acc, c) => acc * c, 1)
}

console.log(grow([1, 2, 3]), 6)
console.log(grow([4, 1, 1, 1, 4]), 16)
*/

//////////////////// Calculate BMI
/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/
/*
function bmi(weight, height) {
  const bmi = weight / (height * height);
  if (bmi <= 18.5) return "Underweight"
  if (bmi <= 25.0) return "Normal"
  if (bmi <= 30.0) return "Overweight"
  if (bmi > 30.0) return "Obese"  
}

console.log(bmi(80, 1.80), "Normal")
*/

//////////////////////Sentence Smash
/*
function smash (words) {
  return words.join(' ')
};
*/

////////////////////////// You only need one - Beginner
/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/
/*

function check(a, x) {
  return a.includes(x)
}

console.log(check([66, 101], 66), true)
console.log(check([101, 45, 75, 105, 99, 107], 107), true)
console.log(check(['t', 'e', 's', 't'], 'e'), true)
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false)

*/

//////////////////////// Fake Binary
/*

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/
/*
function fakeBin(x){
  const arr = x.split('')
  // let result = []
  // arr.forEach( n => {
  //   if (n < 5) { result.push('0')}
  //   if (n >= 5) { result.push('1')}
  // })
 return arr.map( n => n < 5 ? '0' : '1').join('')
}

console.log(fakeBin('45385593107843568'), '01011110001100111')
console.log(fakeBin('509321967506747'), '101000111101101')
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011')
*/
/////////////// MakeUpperCase
/*
function makeUpperCase(str) {
  // Code here
  return str.toUpperCase()
}
*/

/////////////////// Count of positives / sum of negatives

/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/
/*

function countPositivesSumNegatives(input) {
  if (!input || input.length < 1 ) return []
  let positive = 0;
  let negative = 0;
  input.forEach(n => {
    if (n > 0) { positive += 1 }
    if (n < 0) { negative += n }
  })
  return [positive, negative]
}

console.log(countPositivesSumNegatives( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), [10,-65])
console.log(countPositivesSumNegatives( [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]), [8,-50])
*/

//////////////////// Simple multiplication
/*
function simpleMultiplication(number) {
  if (number % 2 === 0) return number * 8
  return number * 9
}

console.log(simpleMultiplication(2), 16)
console.log(simpleMultiplication(1), 9)
console.log(simpleMultiplication(8), 64)
console.log(simpleMultiplication(5), 45)
*/

/////////////////// Invert values

/*
function invert(array) {
  return array.map((n) => -n);
}

console.log(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5])
console.log(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5])
console.log(invert([]), [])
console.log(invert([0]), [0])

*/

///////////////////// Calculate average
/*
function findAverage(array) {
  if (array.length < 1) return 0
  return (array.reduce((acc, num) => acc + num, 0)) / (array.length);
}

console.log(findAverage([1,1,1]), 1)
console.log(findAverage([1,2,3]), 2)
console.log(findAverage([1,2,3,4]), 2.5)
console.log(findAverage([]), 0)

*/

/////////////////////// How good are you really?
/*There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

*/

/*
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const countClass = classPoints.length
  const sumClass = classPoints.reduce((acc, num) => acc + num, 0)
  return sumClass / countClass < yourPoints 
}


console.log(betterThanAverage([2, 3], 5), true)
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true)
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false)
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false)

*/

///////////////////// Beginner Series #2 Clock

/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/
/*
function past(h, m, s){
  //#Happy Coding! ^_^
  const hoursConverted = h * 60
  const minutesConverted = (m + hoursConverted) * 60
  const totalSeconds = (s + minutesConverted)
  return totalSeconds * 1000
}

console.log(past(0, 1, 1), 61000)
console.log(past(1, 1, 1), 3661000)
console.log(past(0,0,0), 0)
console.log(past(1, 0, 1), 3601000)
console.log(past(1, 0, 0), 3600000)
*/

//////// Sum Arrays
/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.
*/

/*
// Sum Numbers
function sum (numbers) {
  "use strict";
  
  return numbers.reduce( (acc, num) => acc + num, 0)
};

console.log(sum([]), 0)
console.log(sum([1, 5.2, 4, 0, -1]), 9.2)

*/

////////////////////// Are You Playing Banjo?

/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

/*
function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === "r") {
    return `${name} plays banjo`
  }
  return `${name} does not play banjo`
}

console.log(areYouPlayingBanjo("Adam"), "Adam does not play banjo")
console.log(areYouPlayingBanjo("bravo"), "bravo does not play banjo")
console.log(areYouPlayingBanjo("Ringo"), "Ringo plays banjo")
console.log(areYouPlayingBanjo("rolf"), "rolf plays banjo")
*/

////////////////////////  Convert a Boolean to a String
/*
function booleanToString(b){
  //your code here
  // return b ? "true" : "false"
  return b.toString()
}

console.log(booleanToString(true), "true")
console.log(booleanToString(false), "false")
*/

//////////////////// Beginner Series #1 School Paperwork
/*
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
*/
/*

function paperwork(n, m) {
  if (n < 1 || m < 1 ) return 0
  return n * m
}

console.log(paperwork(5,5), 25)
console.log(paperwork(5,-5), 0)
console.log(paperwork(-5,-5), 0)
console.log(paperwork(-5,5), 0)
console.log(paperwork(5,0), 0)
*/

//////////////// Beginner - Lost Without a Map
/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

/*
function maps(x){
  return x.map(num => num * 2)
}

console.log(maps([1, 2, 3]), [2, 4, 6])
console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8])
console.log(maps([2, 2, 2, 2, 2, 2]), [2, 2, 2, 2, 2, 2])
*/

//////////////// A Needle in the Haystack
/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*/

/*
function findNeedle(haystack) {
  // your code here
  const position = haystack.indexOf('needle');
  return `found the needle at position ${position}`
}


var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

console.log(findNeedle(haystack_1), "found the needle at position 3")
console.log(findNeedle(haystack_2), "found the needle at position 5")
console.log(findNeedle(haystack_3), "found the needle at position 30")
*/

//////////////////// Function 1 - hello world
/*
function greet() {
  return "hello world!";
  }

*/
///////////////////// Opposites Attract
/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/
/*
function lovefunc(flower1, flower2){
  // moment of truth
  const isFlower1even = flower1 % 2 === 0;
  const isFlower2even = flower2 % 2 === 0;
  return isFlower1even !== isFlower2even
}

console.log(lovefunc(1,4), true)
console.log(lovefunc(2,2), false)
console.log(lovefunc(0,1), true)
console.log(lovefunc(0,0), false)
*/

//////////////////// Returning Strings
/*
function greet(name){
  return `Hello, ${name} how are you doing today?`
}

console.log(greet('Ryan'), "Hello, Ryan how are you doing today?")
console.log(greet('Shingles'), "Hello, Shingles how are you doing today?")
*/

////////////////////// Convert number to reversed array of digits
/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/
/*
function digitize(n) {
  // turn into string and reverse, then turn into array
  // return n.toString().split('').reverse().map(n => Number(n))
  const array = n.toString().split('')
  const reversed = array.reverse()
  const final = reversed.map(n => Number(n))
  return final
}

console.log(digitize(35231), [1,3,2,5,3])
console.log(digitize(0), [0])
*/

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
