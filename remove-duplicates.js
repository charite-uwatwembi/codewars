//Remove duplicates from the array
 const removeDupes = (arr) =>{
    return [...new Set(arr)]
 }
 let arr = removeDupes([1,2,2,4,5,6,6,8,9])
 console.log(arr);