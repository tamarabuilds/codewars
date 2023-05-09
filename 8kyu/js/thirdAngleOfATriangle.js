// https://www.codewars.com/kata/5a023c426975981341000014
// Third Angle of a Triangle
/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle
*/
// function otherAngle(a,b){               // First solution
//     return 180-a-b
// }

function otherAngle(a,b){                   // Learned solution
    // confirm no negative angles
    if( a < 0 || b < 0) return false
    // confirm angles < 180
    if (a + b >= 180) return false
    // calculate remaining angle
    return 180 - (a + b)
}

console.log(otherAngle(30,60))
console.log(otherAngle(43,78))