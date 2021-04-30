//Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, str1 and str2, write code to check it str2 is a rotation of str1 using only one call to isSubstring(e.g., 'waterbottle' is a rotation of 'erbottlewat')

//you can use .includes to simulate the call of isSubstring

function stringRotation(str1, str2) {
  let newStr1 = str1[str1.length - 1] + str1.slice(0, str1.length - 1);
  while(newStr1 !== str1) {
    if(newStr1 === str2) {
      return true;
    }
    newStr1 = newStr1[newStr1.length - 1] + newStr1.slice(0, newStr1.length - 1);
  }
  return false;
}

module.exports = stringRotation;
