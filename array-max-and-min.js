// Array of numbers and return sum of highest element and lowest element (max + min)
const displaySumOfMaxAndMin = (arr) =>{
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return max + min;
}
let sampleArray = [2, 4, 24]
console.log(displaySumOfMaxAndMin(sampleArray));