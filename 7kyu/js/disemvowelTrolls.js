// https://www.codewars.com/kata/52fba66badcd10859f00097e
// Disemvowel Trolls
/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/
function disemvowel(str){
    //     let response = ''                           // First solution
    //     const vowels = { 
    //         'a':'a',
    //         'e':'e',
    //         'i':'i',
    //         'o':'o',
    //         'u':'u',
    //         'A':'A',
    //         'E':'E',
    //         'I':'I',
    //         'O':'O',
    //         'U':'U'
    //  }
    //     for(let i = 0; i < str.length; i++){
    //         // console.log(`str[i]: ${str[i]} and vowels[str[i]]: ${vowels[str[i]]}`)
    //         if(str[i] !== vowels[str[i]]){
    //             response += str[i]
    //         }
    //     }
    //     return response
    
        // const vowels = {                             // Second solution
        //     'a':'a',
        //     'e':'e',
        //     'i':'i',
        //     'o':'o',
        //     'u':'u',
        //     'A':'A',
        //     'E':'E',
        //     'I':'I',
        //     'O':'O',
        //     'U':'U'
        // }
        // return str.split('').filter( (e) => e in vowels? '' : e).join('')
    
        const vowels = 'aeiou'                          // learned solution
        return str
            .split('')
            .filter( (e) => !vowels.includes(e.toLowerCase()))
            .join('')
    
    
    }
    
    
    console.log(disemvowel("This website is for losers LOL!"))
    console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))
    