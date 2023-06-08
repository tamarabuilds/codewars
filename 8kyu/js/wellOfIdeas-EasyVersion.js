// https://www.codewars.com/kata/57f222ce69e09c3630000212
// Well of Ideas - Easy Version
/*
DESCRIPTION:
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well(x){
    // const yesCount = x.filter( word => word.includes('good')).length                // First solution
    // return  yesCount < 1 ? 'Fail!' : yesCount < 3 ? 'Publish!' : 'I smell a series!' 
    
    // const yesCount = x.filter( n => n === 'good').length                        // Second solution
    // if (yesCount < 1) return 'Fail!'
    // if (yesCount < 3) return 'Publish!'
    // return 'I smell a series!'

    const yesCount = x.filter( n => n === 'good').length                            // Learned solution
    return yesCount ? yesCount > 2 ? 'I smell a series!' : 'Publish' : 'Fail!'
}

console.log(well(['bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))