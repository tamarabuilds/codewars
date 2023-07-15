// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
// Counting Duplicates
/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// P: alpha, upper and lower
// R: 0+ integer

function duplicateCount(text){
    // count variable
    let count = 0
    // sort
    let sorted = text.toLowerCase().split('').sort()
    // if i-1 === i and i+1 != i, count++
    for (let i = 1; i < sorted.length; i++){
        if (sorted[i] === sorted[i-1] && sorted[i] != sorted[i+1]){
            count++
            i++
        }
    }

    return count

    // ... First solution ...
    // +: works
    // -: not clever
}

console.log(duplicateCount(""))     // 0
console.log(duplicateCount("abcde"))     // 0
console.log(duplicateCount("aabbcde"))     // 2
console.log(duplicateCount("aabBcde"))     // 2
console.log(duplicateCount("Indivisibility"))     // 1
console.log(duplicateCount("Indivisibilities"))     // 2