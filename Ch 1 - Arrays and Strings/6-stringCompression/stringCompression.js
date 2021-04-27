//Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

function stringCompression(str) {
  let result = '';
  let compressible = false;
  let count;
  for(let i = 0; i < str.length; i++) {
    count = 1;
    while(str[i] === str[i + 1]) {
      compressible = true;
      count++;
      i++;
    }
    result += (str[i] + count);
  }
  if(result.length < str.length) {
    return result;
  }
  return str;
}

module.exports = stringCompression;
