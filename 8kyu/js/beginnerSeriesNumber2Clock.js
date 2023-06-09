// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
// Beginner Series #2 Clock
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


function past(h, m, s){
    // const min = m + (60 * h)
    // const sec = s + (60 * min)
    // return sec * 1000
  
    const setTime = new Date().setHours(h, m, s)
    const midnight = new Date().setHours(0,0,0)
    return setTime - midnight
  
  }
  
  console.log(past(1,1,1))