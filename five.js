//the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers

function multiplyByFivePowerDigitis(number){
    let digit = Math.abs(number).toString().length;
    return number * Math.pow(5, digit);
}
console.log(multiplyByFivePowerDigitis(-10))