// https://www.codewars.com/kata/576757b1df89ecf5bd00073b
// Build Tower
/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

// P: integer
// R: array

function towerBuilder(nFloors){
    // variable for answer
    let answer = []
    const max = 2 * nFloors - 1
    // loop through n, variable for number of stars
    for (let i = 0, j = 1; i < nFloors; i++, j += 2){
        const space = (max - j) / 2
        answer.push(`${' '.repeat(space)}${'*'.repeat(j)}${' '.repeat(space)}`)
    }
    return answer
}

console.log(towerBuilder(1))    // *
console.log(towerBuilder(2))    // [" * ","***"]);
console.log(towerBuilder(3))    // ["  *  "," *** ","*****"]);