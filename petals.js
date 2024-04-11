// function petals (n) {
     
//     return n === 1 ? ("I love you") : 
//         n === 2 ? ("a litle") : 
//         n === 3 ? ("a lot") : 
//         n === 4 ? ("passionately") : 
//         n === 5 ? ("madly") : 
//         n === 6 ? ("not at all") : 
//         "mxiuh"
// }
// console.log(petals(5))

 function petals (n){
    let love = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    return love[(n - 1) % love.length];
 }
 console.log(petals(8))