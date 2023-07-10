// https://www.codewars.com/kata/559ac78160f0be07c200005a
// Name Shuffler
/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

// P: string
// R: string

function nameShuffler(str){
    // const arr = str.split(' ')
    // return arr[1] + ' ' + arr[0]

    // // first solution. hard-corded

    return str.split(' ').reverse().join(' ')

    // Learned. better

}

console.log(nameShuffler('john mcclane'))       // mcclane john