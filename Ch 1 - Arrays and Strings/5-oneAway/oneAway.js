//There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

//input: 2 strings
//output: 1 or 0 edits - bool
//constraint: can only insert, remove, or replace
//edge case: empty str

function oneAway(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  //insert char

  //remove char
  if(str1.length === str2.length - 1 || str2.length === str1.length -1) {
    return (removeCheck(str1, str2) || removeCheck(str2, str1));
  }

  //replace char
  if(str1.length === str2.length) {
    return replaceCheck(str1, str2);
  }
  return false;
}

const removeCheck = (str1, str2) => {
  //loop through
  let diffs = 0;
  let i = 0;
  let j = 0;

  while( i < str1.length && j < str2.length) {
    if(str1[i] !== str2[j]) {
      diffs++;
      j++;
    } else {
      i++;
      j++;
    }
  }
  if(diffs <= 1) {
    return true;
  }
  return false;
  //use i and j
  //if a difference, pump j up by one and sub i by one
}

const replaceCheck = (str1, str2) => {
  let sims = 0;
  for(let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      sims++;
    }
  }
  if(sims >= str1.length - 1) {
    return true;
  }
  return false;
}

module.exports = oneAway;
