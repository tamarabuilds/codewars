// https://www.codewars.com/kata/550498447451fbbd7600041c
// Are they the "same"?

/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

Note for C
The two arrays have the same size (> 0) given as parameter in function comp.
*/

function comp(array1, array2){
    if ( !array1 || !array2) return false
    // for each element in 1, loop through all elements in 2 to see if it's the square. If so remove the element from 2
    for ( let i = 0; i < array1.length; i++){
        for ( let j = 0; j < array2.length; j++){
            if ( Math.pow(array1[i], 2) === array2[j]){
                console.log(`i:${i}, j:${j}, array1[i]: ${array1[i]}, array2[j]: ${array2[j]}, calc: ${Math.pow(array1[i], 2) === array2[j]} `)
                // count--
                array2.splice(j, 1)
                console.log( array2)
                
            }
        }
    }
    // return true if array2 length is 0
    return array2.length === 0
}

// console.log( comp([121, 144, 19, 161, 19, 144, 19, 11]   , [121, 14641, 20736, 361, 25921, 361, 20736, 361]))      // true
// console.log( comp([121, 144, 19, 161, 19, 144, 19, 11]  , [132, 14641, 20736, 361, 25921, 361, 20736, 361]))      // false
console.log( comp([4, 6, 1, 9, 1, 3, 4, 7, 0, 0, 4, 0, 6, 0, 5, 8]   , [0, 49, 81, 64, 0, 16, 1, 16, 36, 36, 16, 9, 1, 25, 0, 1]))      // false


// [1, 0, 3, 4, 0, 10, 6, 5, 0, 0] and [0, 100, 16, 9, 0, 1, 36, 1, 25, 0]      // false

// [0, 1, 1, 6, 6, 7, 6, 4, 4, 4, 5, 0] and [1, 49, 16, 1, 16, 0, 36, 36, 25, 16, 36, 1]        // false