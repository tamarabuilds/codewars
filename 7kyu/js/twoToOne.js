// https://www.codewars.com/kata/5656b6906de340bd1b0000ac
// Two to One
/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/
function longest(s1, s2){
    // return Array.from(new Set((s1 + s2).split('').sort( ))).join('')            // First solution

    // return Array.from(new Set((s1 + s2))).sort( ).join('')            // Learned solution

    return [...new Set((s1 + s2))].sort( ).join('')             // Learned solution

}

console.log(longest("aretheyhere", "yestheyarehere"))
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))
// console.log(longest("inmanylanguages", "theresapairoffunctions"))