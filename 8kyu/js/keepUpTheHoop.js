// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145
// Keep up the hoop
/*
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".
*/
function hoopCount(n){                              // First solution
    return n > 9? `Great, now move on to tricks`: `Keep at it until you get it`
}

console.log( hoopCount(3))
console.log( hoopCount(10))
console.log( hoopCount(11))