// https://www.codewars.com/kata/57fae964d80daa229d000126
// Exclamation marks series #1: Remove an exclamation mark from the end of string
/*
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
*/

function removeExclamation(string){
    let answer = ""
    if( string[string.length] === "!"){
        answer = string.split("").slice(-1)
    }
    return answer
}

console.log(removeExclamation("Hi!"))       // Hi