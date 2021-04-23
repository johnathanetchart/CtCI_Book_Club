//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

<<<<<<< HEAD:Ch 1 - Arrays and Strings/isUnique/isUnique.js
module.exports = (string) => {
  //solve this
  let chars = {};
  for( let i = 0; i < string.length; i++ ) {
    if(chars[string[i]] === undefined) {
      chars[string[i]] = 1;
    } else {
      return false;
    }
  }
  return true;
};
=======
function isUnique(str) {
  //code
}

module.exports = isUnique;
>>>>>>> 30f9fe5ab1a1c42445690ffaaf9d5a4deb694010:Ch 1 - Arrays and Strings/1-isUnique/isUnique.js
