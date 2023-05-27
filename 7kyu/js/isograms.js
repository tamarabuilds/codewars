// https://www.codewars.com/kata/54ba84be607a92aa900000f1
// Isograms
/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/
function isIsogram(str){
    // str = str.toLowerCase()                                 // First solution
    // for(let i = 0; i < str.length; i++){
    //     for(let j = i + 1; j < str.length; j++){
    //         if (str[i] === str[j]){
    //             return false
    //         } 
    //     }
    // }
    // return true



    // arrOfStr = str.toLowerCase().split('')
    // // console.log(str.indexOf('d'))
    // return arrOfStr.forEach( (e,i) =>{
    //     // console.log(arrOfStr.slice(i+1))
    //     // arrOfStr.slice(i).indexOf(e)
    //     arrOfStr.indexOf(e) == i

    // })



    return new Set(str.toLowerCase()).size == str.length            // Learned solution



}


console.log(isIsogram('Dermatoglyphics'))
console.log(isIsogram('isogram'))
console.log(isIsogram('aba'))
console.log(isIsogram('moOse'))
console.log(isIsogram('isIsogram'))
console.log(isIsogram(''))