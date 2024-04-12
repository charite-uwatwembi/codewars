function sumWithoutHandL(arr){
    return arr.slice(1, -1).reduce((a, b) => a + b);
    
}
console.log(sumWithoutHandL([1, 2, 1, 3, 10]))