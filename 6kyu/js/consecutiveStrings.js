// https://www.codewars.com/kata/56a5d994ac971f1ac500003e
// Consecutive strings

/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

Note
consecutive strings : follow one after another without an interruption
*/

function longestConsec(strarr, k){
    // // set concatArr for all concats
    // let concatArr = []
    // // for all strings in strarr
    // for ( let i = 0; i <= strarr.length - k  ; i++){
    //     let word = ''
    //     for ( let j = i; j < k + i; j++){
    //         word += strarr[j]
    //     }
    //     // add concats to concatArr
    //     concatArr.push( word)
    // }

    // // calc max lenth of concatArr entries
    // const max = Math.max(...concatArr.map( e => e.length))  
    // // return first index value with the length

    // return concatArr.filter( e => e.length === max)[0] || ''

    // // first solution: good, long?

    let longest = ''
    for ( let i = 0; k > 0 && i <= strarr.length - k; i++){
        const tempArr = strarr.slice(i, i + k)
        const tempStr = tempArr.join('')
        if ( tempStr.length > longest.length){
            longest = tempStr
        }
    }
    return longest

    // learned: remember to use slice.

}

console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2))        //  folingtrashy
console.log(longestConsec([], 2) )       //  ''
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3))        //  ixoyx3452zzzzzzzzzzzz
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15))        //  ""
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) )       //  ""
