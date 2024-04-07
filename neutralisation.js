//Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.

const neutral = (str1, str2) => {
    let result = " "
    for (let i = 0; i<str1.length; i++){
        if(str1[i] == '+' && str2[i] == '+'){
            result += '+'
        } else if (str1[i] == '-' && str2[i] == '-'){
            result += '-'
        } else {
            result += '0'
        }
    }
    return result
}

console.log(neutral('++-', '+-+'))