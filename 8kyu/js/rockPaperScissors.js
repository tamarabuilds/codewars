// https://www.codewars.com/kata/5672a98bdbdd995fad00000f
// Rock Paper Scissors!
/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/
// const rps = (p1, p2) => {                               // First solution
//     const getMsg = (n) => `Player ${n} won!`
//     if(p1 === 'rock' && p2 === 'paper'){
//         return getMsg(2)
//     } else if (p1 === 'paper' && p2 === 'scissors'){
//         return getMsg(2)
//     } else if (p1 === 'scissors' && p2 === 'rock'){
//         return getMsg(2)
//     } else if(p2 === 'rock' && p1 === 'paper'){
//         return getMsg(1)
//     } else if (p2 === 'paper' && p1 === 'scissors'){
//         return getMsg(1)
//     } else if (p2 === 'scissors' && p1 === 'rock'){
//         return getMsg(1)
//     } else {
//         return 'Draw!'
//     }
// }

// const rps = (p1, p2) => {                               // Learned solution
//     const getMsg = (n) => `Player ${n} won!`
//     if(p1 === p2){
//         return 'Draw'
//     }
//     if(p1 === 'rock' && p2 === 'paper'){
//         return getMsg(2)
//     } else if (p1 === 'paper' && p2 === 'scissors'){
//         return getMsg(2)
//     } else if (p1 === 'scissors' && p2 === 'rock'){
//         return getMsg(2)
//     } else {
//         return getMsg(1)
//     }
// }

const rps = (p1, p2) => {                               // Learned solution
    const getMsg = (n) => `Player ${n} won!`
    if(p1 === p2){
        return 'Draw'
    }
    const rules = {rock: "scissors", paper: "rock", scissors: "paper"}
    if(p2 === rules[p1]){
        return getMsg(1)
    } else {
        return getMsg(2)
    }
}





console.log(rps('rock', 'scissors'));
console.log(rps('scissors', 'paper'));
console.log(rps('paper', 'rock'));



console.log(rps('scissors', 'rock'));
console.log(rps('paper', 'scissors'));
console.log(rps('rock', 'paper'));



console.log(rps('rock', 'rock'));
console.log(rps('scissors', 'scissors'));
console.log(rps('paper', 'paper'));