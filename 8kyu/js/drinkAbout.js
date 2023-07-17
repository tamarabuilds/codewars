// https://www.codewars.com/kata/56170e844da7c6f647000063
// Drink about
/*
DESCRIPTION:
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
*/

function peopleWithAgeDring(old){
    // lots of ternary operators from oldest to yougest
    return old >= 21 ? "drink whisky" : old >= 18 ? "drink beer"
     : old >= 14 ? "drink coke" : "drink toddy"
}

console.log(peopleWithAgeDring(13))     // toddy
console.log(peopleWithAgeDring(17))     // coke
console.log(peopleWithAgeDring(18))     // beer
console.log(peopleWithAgeDring(20))     // beer
console.log(peopleWithAgeDring(30))     // whisky