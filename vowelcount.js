// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let sec= str.split('')
    let count = 0
    for (let i = 0; i < sec.length; i++){
        if(sec[i] === 'a'){
            count ++
        }else if(sec[i] === 'e' || sec[i] === 'E'){
            count++
        
        }else if(sec[i] === 'i' || sec[i] === 'I'){
            count++
        
        }else if(sec[i] === 'o' || sec[i] === 'O'){
            count++
        
        }else if(sec[i] === 'u' || sec[i] === 'U'){
            count++
        }
        
    }
    return count;
  }
  console.log(getCount('hElOWorudi'))