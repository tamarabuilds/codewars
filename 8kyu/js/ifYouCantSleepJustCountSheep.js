// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
// If you can't sleep, just count sheep!!
/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
const countSheep = num => {                 // First solution
    let allSheep = ''
    for(let i = 1; i <= num; i ++){
        allSheep += `${i} sheep...`
    }
    return allSheep
}

// const countSheep = num => [...Array(num)].map( (element, i) => `${i + 1} sheep...`).join('')            // Learned solution

console.log(countSheep(0))
console.log(countSheep(1))
console.log(countSheep(3))
console.log(countSheep(5))