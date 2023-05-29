// https://www.codewars.com/kata/554e4a2f232cdd87d9000038
// Complementary DNA
/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/
function DNAStrand(dna){
    // let answer = ''                                     // First solution
    // for(let i = 0; i < dna.length; i++){
    //     if(dna[i] === 'A'){
    //         answer += 'T'
    //     } else if(dna[i] === 'T'){
    //         answer += 'A'
    //     } else if (dna[i] === 'C'){
    //         answer += 'G'
    //     } else {
    //         answer += 'C'
    //     }
    // }
    // return answer

    // return dna.split('').map( e => e === 'A'? 'T': e === 'T'? 'A': e === 'G'? 'C': 'G').join('')                // Second solution

    const pairs = {'A':'T', 'T':'A', 'G':'C', 'C':'G'}
    return dna.split('').map( e => pairs[e]).join('')                               // Learned solution

}

console.log(DNAStrand("AAAA"))
console.log(DNAStrand("ATTGC"))
console.log(DNAStrand("GTAT"))
console.log(DNAStrand("GTATGTAT"))