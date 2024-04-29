function powersOfTwo (n){
    let powers=[]
    let power = 1

    for(let i = 0; i < n; i++){
        power *= 2
        powers.push(power)
        
    }
    return powers
}

console.log(powersOfTwo(0))
console.log(powersOfTwo(1))
console.log(powersOfTwo(2))
