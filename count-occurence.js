// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

function countOccur(str, char){
    let character = str.split('')
    let occurence = character.filter(c => c === char).length;
    return occurence;

}
console.log(countOccur('charite', 'e'))