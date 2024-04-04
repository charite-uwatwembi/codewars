//calculate the sum of numbers in an array whether they are greater or smaller than 0 and return 0 if the array is empty and also if an array has one number it return that number as the sum
const sumArrays = (arr) => {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[[0]];
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(sumArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(sumArrays([]))
console.log(sumArrays([1]))