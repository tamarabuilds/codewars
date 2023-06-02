// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b
// Is the string uppercase?
/*
Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/
String.prototype.isUpperCase = function() {
    // your code here
    // return this.toString() === this.toUpperCase()               // First solution

    // return this + '' === this.toUpperCase()                 // Second solution

    return this == this.toUpperCase()                       // Learned solution

  }



console.log('c'.isUpperCase())
console.log('C'.isUpperCase())
console.log('hello I AM DONALD'.isUpperCase())
console.log('HELLO I AM DONALD'.isUpperCase())
console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase())
console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase())
console.log(',amdnmfe;ewj welkfLKJ'.isUpperCase())