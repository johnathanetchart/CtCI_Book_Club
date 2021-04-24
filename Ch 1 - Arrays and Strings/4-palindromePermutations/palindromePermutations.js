//Given a string, write a function to check if it is a permutations of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A perutation is a rearrangement of letters. The palindromedoes not need to be limited to just dictionary words. You can ignore casing and non-letter characters.

function palindromePermutations(str) {
  //Coding here is optional, but recommended.
  //a palindrome has even numbers of characters, one on each side of the middle
  //if it's an odd length, then a single character can appear an odd number of times
  str = str.toLowerCase();
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      if (charCount[str[i]] === undefined) {
        charCount[str[i]] = 1;
      } else {
        charCount[str[i]]++;
      }
    }
  }
  let odds = 0;
  for (let key in charCount) {
    if(charCount[key] % 2 === 1) {
      odds++;
    }
  }
  if (odds <= 1) {
    return true;
  } else {
    return false;
  }
};

const isPalindrome = () => {
  //might need a checker, but building one might be fine
};

module.exports = palindromePermutations;
