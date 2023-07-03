// https://www.codewars.com/kata/539ee3b6757843632d00026b
// Find the capitals
/*
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

// P: String with some capital, some lower case. Empty?
// R: array of indexes for letters that are capitals

var capitals = function(word){
    // // array to hold indexes
    // let capitals = []
    // // loop
    // for (let i = 0; i < word.length; i++){
    //     // conditional if uppercase, push the index
    //     if (word[i] === word[i].toUpperCase()){
    //         capitals.push(i)
    //     }
    // }
    // return capitals

    // // ... First solution
    // // +: clean, clear
    // // -: is there a more efficient solution?


    return word.split('').map( (e, i) => {
                            if (e === e.toUpperCase()){
                                // console.log(e, i)
                                return i
                            }
                        })
                        .filter( (i) => i >= 0 )
}
    // Learned solution
    // +: one line-ish
    // -: not clear

console.log(capitals('CodEWaRs'))       // 0,3,4,6
