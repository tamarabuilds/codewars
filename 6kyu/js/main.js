// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
// Duplicate Encoder
/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word){
    // arr for single chars, final
    let wordArr = word.split('')
    let answer = ''
    let single = []

    // loop
    for (let i = 0; i < wordArr.length; i++){
        // if index
        // console.log( `index: ${wordArr.findLastIndex( (e) => e === word[i]) }`)
        if (wordArr.findLastIndex( (e) => e === word[i]) === i && wordArr.findIndex(word[i]) === i){
            single.push(word[i])
            // console.log(`single added: ${word[i]}`)
        }
        
    }
    
    console.log(`single: ${single}`)
    
    // if single, (, else )
    for (let i = 0; i < wordArr.length; i++){
    
        if ( single.includes(wordArr[i])){
            answer += "("
        } else {
            answer += ")"
        }

    }

    return answer
}

// console.log(duplicateEncode('din'))     // "((("
console.log(duplicateEncode('recede'))     // "()()()"
// console.log(duplicateEncode('Success'))     // ")())())"
// console.log(duplicateEncode('(( @'))     // "))(("


    