// https://www.codewars.com/kata/5a34b80155519e1a00000009
// Multiple of index

/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/

// P: array
// R: array

function multipleOfIndex(array){
    // filter if number mod its index is 0
    return  array.filter( (e, i) => e % i === 0  || e === i)
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))      //   -6, 32, 25
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]))      //   -1, 10
console.log(multipleOfIndex([0, 2, 3, 6, 9]))      //   0, 2, 6