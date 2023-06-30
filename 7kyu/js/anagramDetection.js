// https://www.codewars.com/kata/529eef7a9194e0cbc1000255
// Anagram Detection
/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

// P: string, blank
// R: true/false

var isAnagram = function(test, original) {
    // if (test.length != original.length) return false
    // // sort both strings
    // const str1 = test.toLowerCase().split('').sort()
    // const str2 = original.toLowerCase().split('').sort()
    // // compare if same
    // for (let i = 0; i < str1.length; i++){
    //     if (str1[i] != str2[i]){
    //         return false
    //     }
    // }
    // return true
    // // ... First solution ...
    // // +: works because sort algorithm is same on both strings
    // // -: could be more elegant. not terrible clever 

    const str1 = test.toLowerCase().split('').sort().join()
    const str2 = original.toLowerCase().split('').sort().join()

    return str1 === str2

    // Learned solution
    // +: clean, elegant.
    // -: sad I missed the join.


};

console.log(isAnagram('foefet', 'toffee'))    //  true
console.log(isAnagram('Buckethead', 'DeathCubeK'))    //  true
console.log(isAnagram('wlejr', 'toffee'))    //  false
console.log(isAnagram('k', 'lk'))    //  false