// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
// Beginner - Lost Without a Map
/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/




function maps(x){
    // const double = x.map()
    return (x.map(x => x * 2))
  }
  
  const arr = [1, 2, 3]
  console.log(maps(arr))
  