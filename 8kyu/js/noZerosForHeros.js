// https://www.codewars.com/kata/570a6a46455d08ff8d001002
// No zeros for heros
/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

// P: integer
// R: integer

function noBoringZeros(n) {
    if (n.toString().length === 1) return n    
    let str = n.toString().split('')
    // loop
    let i = str.length
    while( str[i-1] === '0'){
        str.pop(str[i-1])
        i--
    }
    
    return Number(str.join(''))
}

console.log( noBoringZeros(1450))   // 145
console.log( noBoringZeros(960000))   // 96
console.log( noBoringZeros(1050))   // 105
console.log( noBoringZeros(0))   // 0
console.log( noBoringZeros(-1050))   // -105

