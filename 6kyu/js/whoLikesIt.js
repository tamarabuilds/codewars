// https://www.codewars.com/kata/5266876b8f4bf2da9b000362
// Who likes it?
/*

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

// P: 0+ list of names in an array
// R: specific strings in return

function likes(names){
    // // conditional for empty
    // if (names.length < 1) return 'no one likes this'
    // // conditional for 1 name
    // if (names.length === 1 ) return `${names} likes this`
    // // conditional for 2 names
    // if (names.length === 2 ) return `${names[0]} and ${names[1]} like this`
    // // conditional for 3 names
    // if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
    // // conditional for 4+ names
    // if (names.length > 3) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    
    // ... First solution
    // +: works, clean
    // -: if is a bit wordy?
    
    switch (names.length){
        case 0:
            return 'no one likes this'
        case 1:    
            return `${names} likes this`
        case 2:
            return `${names[0]} and ${names[1]} like this`
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }

    // ... Second solution
    // +: clearer, less code
    // -: maybe loop better for 1, 2, 3 ... Nope!

}


console.log(likes([]  ))            // no one likes this
console.log(likes(["Peter"]  ))     // Peter likes this
console.log(likes(["Jacob", "Alex"]  ))     // "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"]  ))     // "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"]  ))     // "Alex, Jacob and 2 others like this"