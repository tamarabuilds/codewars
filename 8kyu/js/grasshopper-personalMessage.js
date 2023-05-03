// https://www.codewars.com/kata/5772da22b89313a4d50012f7
// Grasshopper - Personalized Message
/*
DESCRIPTION:
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/
// function greet (name, owner){                                   // First solution
//     return name === owner ? `Hello boss` : `Hello ${name}`
// }

function greet (name, owner){                           // Second solution
    return `Hello ${name === owner? 'boss' : 'guest'}`
}


console.log(greet( 'Daniel', 'Daniel'))
console.log( greet ('Kathryn', 'Kathryn'))
console.log(greet ('Bart', 'Homer'))