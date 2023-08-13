// https://www.codewars.com/kata/57e3f79c9cb119374600046b
// Hello, Name or World!
/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
  */

// P: string
// R: string

function hello(name){
    // use the || or if exists then set all to lower case but upper the first
    return name ? `Hello, ${name[0].toUpperCase() + name.toLowerCase().slice(1)}!` : `Hello, World!`   
}

console.log(hello('john'))      // Hello, John!
console.log(hello('aliCE'))      // Hello, Alice!
console.log(hello(''))      // Hello, World!
console.log(hello())      // Hello, World!