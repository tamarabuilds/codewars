// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
// Abbreviate a Two Word Name


/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/


function abbrevName(name){
    // const [first, last] = name.toUpperCase().split(' ')
    // return `${first[0]}.${last[0]}`
  
    return name.split(' ').map( i => i[0].toUpperCase()).join('.')
  
  }
  
  console.log(abbrevName('Sam Harris'))
  
  
  
  