// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
// Sum of odd numbers
/*
Given the triangle of consecutive odd numbers:

1,1                    1
2,2                3     5
3,4            7     9    11
4,7        13    15    17    19
5,11        21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n){
    let start = 1
    for (let j = start; j < n; j++){
        start = j + 2
        console.log(start)
    }
    let row = 0
    // console.log(start)
    for (let i = 0; i < n ; i++){
        // console.log(start + (i * 2))
        row += start + (i * 2)
    }    
    
    return `final: ${row}`
}



console.log(rowSumOddNumbers(1))        //  1
console.log(rowSumOddNumbers(2))        // 8
console.log(rowSumOddNumbers(3))        // 27
// console.log(rowSumOddNumbers(42))       // 74088
// console.log(rowSumOddNumbers(1))        // 1