function firstNonRepeatingLetter(S) {
  // Convert the input string to lowercase for easier comparison
  // 

  // Iterate over each character in the string
  for (let i = 0; i < S.length; i++) {
      // Check if the character is the first occurrence in the string
      if (S.split(S[i]).length === 2) {
          // Return the character, preserving the original case
          return S[0] === S[i] ? S[i] : S[i];
      }
  }

  // If all characters are repeating, return an empty string
  return "";
}
console.log(firstNonRepeatingLetter('letter'));