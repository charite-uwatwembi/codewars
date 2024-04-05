function sortOddNumbersOnly(arr){
   let odd = arr.filter(num => num % 2 !==0).sort((a, b)=> a - b)
   return arr.map( num => num % 2 !==0 ?odd.shift():num)
}
console.log(sortOddNumbersOnly([10, 5,15, 3, 4, 2, 6]))