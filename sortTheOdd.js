function sortOddNumbersOnly(arr){
//    let odd = arr.filter(num => num % 2 !==0).sort((a, b)=> a - b)
//    return arr.map( num => num % 2 !==0 ?odd.shift():num)
return arr.slice().reverse()
// return arr.splice(1,4)
}
let original = [10, 5,15, 3, 4, 2, 6];
console.log("original array", original)
console.log("reversed array", sortOddNumbersOnly(original))

