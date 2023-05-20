// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
// Sort and Star

/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/
function twoSort(s) {
    return s.sort()[0].split('').join("***")            // Learned solution

    // const firstWord = s.sort()[0].split('')                 // First solution
    // let answer = ''
    // for( let i = 0; i < firstWord.length-1; i++){
    //     answer += firstWord[i] + '***'
    // }
    // answer += firstWord[firstWord.length-1]
    // return answer
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))