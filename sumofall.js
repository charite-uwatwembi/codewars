// function that calculates the sum of all elements within an array, whether they are numbers or strings 

function sumMix(arr){
    return arr.reduce((acc, curr)=>acc + Number(curr), 0)
}
console.log(sumMix([1,"20",3]))