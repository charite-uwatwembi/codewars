// Replace all vowel to exclamation mark in the sentence. `aeiouAEIOU` is vowel.

// function replaceVowels(s){
//     return s.replace(/[aeiouAEIOU]/g, '!'); //  Use regex to match and replace all vowels with an exclamation mark
// }
// let original = "My name is charite"
// console.log(replaceVowels(original))  

function replaceVow(str){
    const arr = ["a","e","i","o","u","A","E","I","O","U"]
    let final = '';
    for (let char of str){
        if(arr.includes(char)){
            final =  final + '!' 
        }else{
            final += char;
    }
    
}
return final
}
const original = "My name is Charlene";
console.log(replaceVow(original));