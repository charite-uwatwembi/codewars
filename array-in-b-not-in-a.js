// a function that takes arrays a and b as argument and removes elements of b that are in a

const removeSames = (a, b) =>{
    return a.filter( item => item !== b)
}
let a = [1, 2, 3, 4]
let b = [4, 5, 6, 7]
console.log(removeSames(a, b))