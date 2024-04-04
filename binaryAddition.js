//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

const binaryAddition = (a , b) =>{
    let sum = a + b
    return sum.toString(2)
}
console.log(binaryAddition(1, 1))