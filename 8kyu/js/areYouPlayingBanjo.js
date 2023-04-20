// https://www.codewars.com/kata/53af2b8861023f1d88000832
// Are You Playing Banjo?
/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

function areYouPlayingBanjo(name){
    // return name.startsWith('r') || name.startsWith('R') ? `${name} plays banjo` : `${name} does not play banjo`          // First solution
    // return name.slice(0,1).toUpperCase().startsWith('R') ?  `${name} plays banjo` : `${name} does not play banjo`        // 2nd
    // return name[0].toUpperCase().startsWith('R') ?  `${name} plays banjo` : `${name} does not play banjo`           // 3rd

    return name + ( name[0].toLowerCase() === 'r'? ' plays' : ' does not play' ) + ' banjo'         // Learning from others


}

console.log(areYouPlayingBanjo('Adam'))
console.log(areYouPlayingBanjo('Ringo'))
console.log(areYouPlayingBanjo('rosjfwe'))