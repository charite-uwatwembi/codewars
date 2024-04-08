// return the middle character of the word

function getMiddle(word){
    let length = word.length;
    let middleChar = Math.floor(length/2)

    if(length % 2 !== 0){
        return word[middleChar]
    }else{
        return word[middleChar -1] + word[middleChar]
    }
}

console.log(getMiddle('charit'))