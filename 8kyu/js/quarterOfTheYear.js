// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
// Quarter of the year
/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12
*/
// const quarterOf = (month) => {                      // First solution
//     return Math.ceil((month / 12) * 4 )
// }

// const quarterOf = (month) => {                              // Second solution
//     return month > 9 ? 4 : month > 6 ? 3 : month > 3 ? 2 : 1
// }

// const quarterOf = (month) => {                      // Third solution
//     if (month > 9) return 4
//     if (month > 6) return 3
//     if (month > 3) return 2
//     else return 1
// }

// const quarterOf = (month) => {                  // Learned solution
//     return Math.ceil( month / 3)
// }


const monthToQuarterMap = {                     // Learned solution
    '1': 1,
    '2': 1,
    '3': 1,
    '4': 2,
    '5': 2,
    '6': 2,
    '7': 3,
    '8': 3,
    '9': 3,
    '10': 4,
    '11': 4,
    '12': 4
}

const quarterOf = month => {
    return monthToQuarterMap[month]
}



console.log(quarterOf(3))
console.log(quarterOf(8))
console.log(quarterOf(11))