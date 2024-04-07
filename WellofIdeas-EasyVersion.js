const checkGood = (x) =>{
 const availability = x.filter(idea => idea === "good").length

 if ( availability === 0){
    return "Fail"
 }else if ( availability === 1 || availability === 2){
    return "Publish";
 }else if ( availability > 2){
    return "I smell a series"
 }

}
console.log(checkGood(['bad', 'bad', 'good'])); // Output: 'Publish!'
console.log(checkGood(['good', 'bad', 'good', 'good'])); // Output: 'I smell a series!'
console.log(checkGood(['bad', 'bad', 'bad'])); // Output: 'Fail!'
