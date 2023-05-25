// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
// Mumbling
/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/
function accum(s){
    // let answer = []                             // First solution
    // let word = ''
    // s.split('').map( (e,i)=> {
    //     for(let j = 0; j <= i; j++){
    //         if(j === 0){ 
    //             word += e.toUpperCase()
    //         } else {
    //             word += e.toLowerCase()
    //         }
    //     }
    //     answer.push(word)
    //     word = ''
    // })
    // return answer.join('-')

    return s.split('').map( (e,i)=> e.toUpperCase() + e.toLowerCase().repeat(i)).join('-')            // Second solution

}

console.log(accum('ZpglnRxqenU'))
console.log(accum('abcd'))
console.log(accum('cwAt'))