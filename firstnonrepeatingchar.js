function firstNonRepeatingLetter(S) {
  
  

  for (let i = 0; i < S.length; i++) {
      
      if (S.split(S[i]).length === 2) {
          
          return S[0] === S[i] ? S[i] : S[i];
      }
  }

  return "";
}
console.log(firstNonRepeatingLetter('sTress'));