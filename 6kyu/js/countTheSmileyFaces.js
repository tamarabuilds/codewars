// https://www.codewars.com/kata/583203e6eb35d7980400002a
// Count the smiley faces!

/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/

// P: array
// R: integer

function countSmileys(arr){
    // set count to 0
    let count = 0
    // loop each element in arr
    for ( let i = 0; i < arr.length; i++){
        // conditional for length = 2, check for valid characters
        if ( arr[i].length === 2){
            // if valid, incrememnt count
            if ( arr[i][0] === ':' || arr[i][0] === ';'){
                if (arr[i][1] === ')' || arr[i][1] === 'D'){
                    count++
                }
            }
        }
    
        // condicitonal for length = 3, check for valid chars
        if ( arr[i].length === 3){
            // if valid, incrememnt count
            if ( arr[i][0] === ':' || arr[i][0] === ';'){
                if (arr[i][1] === '-' || arr[i][1] === '~'){
                    if (arr[i][2] === ')' || arr[i][2] === 'D'){
                        count++
                    }
                }
            }
        }

    }

    // return count
    return count

    // // first solution: good but duplicates a bit. 



}

console.log(countSmileys([]))   // 0
console.log(countSmileys([':D',':~)',';~D',':)']))   // 4
console.log(countSmileys([':)',':(',':D',':O',':;']))   // 2
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))   // 1
