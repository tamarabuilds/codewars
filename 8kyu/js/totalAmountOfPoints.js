// https://www.codewars.com/kata/5bb904724c47249b10000131
// Total amount of points
/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/
// function points(games){                                     // First solution
//     let xPoints = 0
//     for(let i = 0; i < games.length; i++){
//         let [x, y] = games[i].split(":")
//         // console.log(`x is ${x}, y is ${y}`)
//         if(x > y){
//             xPoints += 3
//             // console.log(`3 points awarded for game ${i}`)
//         } else if ( x == y){
//             xPoints += 1
//             // console.log(`1 point awarded for game ${i}`)

//         }
//     }
//     return xPoints
// }


function points(games){                                         // Learned solution
    let total = 0
    games.map( (game) => {
        game[0] > game[2]? total += 3 : game[0] === game[2] ? total++ : 0 
})   
    return total
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]))
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]))