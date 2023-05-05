// https://www.codewars.com/kata/568d0dd208ee69389d000016
// Transportation on vacation
/*
DESCRIPTION:
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, 
you get $50 off your total. Alternatively, if you rent the car for 3 or more days, 
you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/
// function rentalCarCost(d){                      // First solution
//     return d >= 7 ? d*40 - 50 : d >= 3 ? d*40 - 20 : d*40
// }

// function rentalCarCost(d){                  // Second solution
//     let cost = d*40
//     if(d >= 7){
//         cost -= 50
//     } else if(d >= 3){
//         cost -= 20
//     }
//     return cost
// }

// function rentalCarCost(d){                  // Third solution
//     let cost = 0
//     for(let i = d; i >= 1; i--){
//         cost += 40
//         if(i == 7){
//             cost -=30
//         }
//         if(i == 3){
//             cost -=20
//         }
//     }
//     return cost
// }

function baseRate(days,rate = 40){                      // Learned solution
    return days * rate
}

function discount(days, threeDayDiscount = 20, sevenDayDiscount = 50){
    if (days > 6) return sevenDayDiscount 
    if (days > 2) return threeDayDiscount
    else return 0
}

function rentalCarCost(d){
    return baseRate(d) - discount(d)
}



console.log(rentalCarCost(1))
console.log(rentalCarCost(2))
console.log(rentalCarCost(3))
console.log(rentalCarCost(4))
console.log(rentalCarCost(5))
console.log(rentalCarCost(6))
console.log(rentalCarCost(7))
console.log(rentalCarCost(8))
console.log(rentalCarCost(9))
console.log(rentalCarCost(10))
