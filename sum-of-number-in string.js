// calculate the sum of numbers in a string

function sumOfChars(str){
    let sum = 0;
    for(let char of str){
        if(!isNaN(parseInt(char))){
            sum += parseInt(char);
        }
    }
    return sum;
}

console.log(sumOfChars("chari4te2"))