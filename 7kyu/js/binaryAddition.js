// https://www.codewars.com/kata/551f37452ff852b7bd000139
// Binary Addition
/*
DESCRIPTION:
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/
// function addBinary(a,b){
//     let sum = a+b                                               // First solution
//     // console.log(sum)
//     let output = []
//     // https://stackoverflow.com/questions/4016213/whats-the-opposite-of-javascripts-math-pow
//     const binaryLength = Math.floor(Math.log(sum) / Math.log(2))
//     // console.log(binaryLength)
//     output = Array.from({length: binaryLength + 1}, (e, i) => i = 0  )
//     output[binaryLength] = 1
//     sum -= Math.pow(2, binaryLength)
//     for (let i = binaryLength; i >= 0 ; i--){
//         if (sum >= Math.pow(2, i)){
//             output[i] = 1
//             sum -= Math.pow(2, i)
//         }
//     }

//     return output.reverse().join('')
// }


// function addBinary(a,b){                            // Second try. Didn't work. Right shift doesn't support bigInt values
//     // console.log(a, b)
//     let sum = a+b
//     let output = []
//     console.log( typeof sum)
//     while (sum > 0){
//         console.log(`sum is: ${sum}`)
//         if(sum & 1 ) {
//             output.push(1)
//         } else {
//             output.push(0)
//         }
//         sum = sum >>> 1
//     }
    
//     return output.reverse().join('')
// }



function addBinary(a,b){                            // Learned solution
    return (a+b).toString(2)
}



console.log(addBinary(1,1))
console.log(addBinary(5,9))
console.log(addBinary(1,2))
console.log(addBinary(153871448667597, 335635611645010)) /// 1101111010011010000111110011100011110101000011111
console.log('1101111010011010000111110011100011110101000011111')



