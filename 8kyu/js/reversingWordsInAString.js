// https://www.codewars.com/kata/57a55c8b72292d057b000594
// Reversing Words in a String
/*
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
Happy coding!
*/

// P: string
// R: string

function reverse(string){
    // turn into array, reverse, turn back to string
    return string.split(' ').reverse().join(' ')
}

console.log(reverse('I am an expert at this'))      // this at expert an am I
console.log(reverse(''))      // 