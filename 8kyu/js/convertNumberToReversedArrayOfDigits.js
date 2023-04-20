// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
// Convert number to reversed array of digits


/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/






function digitize(n) {
    // let answer =  String(n).split('').reverse()
    // console.log(answer)
    // for (let i = 0; i < answer.length; i++){
    //   answer[i] = Number(answer[i])
    // }
    // return answer
  
    // return String(n).split('').reverse().map(Number)
    return String(n).split('').map(n => Number(n))
  
  }
  
  
  console.log(digitize(54321))
  
  
  
  