//Given two strings, write a method to decide if one is a permutation of the other.

//just checking if the strings have all the same letters and the same amounts of each



const checkPermutations = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let str1Obj = createObj(str1);
  let str2Obj = createObj(str2);

  for (let key in str1Obj) {
    if (str1Obj[key] !== str2Obj[key]) {
      return false;
    }
  }

  for (let key in str2Obj) {
    if (str1Obj[key] !== str2Obj[key]) {
      return false;
    }
  }

  return true;
};

const createObj = (str) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[i] === undefined) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }
  return obj;
}

module.exports = checkPermutations;
