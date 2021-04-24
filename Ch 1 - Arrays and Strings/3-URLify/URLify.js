//Write a method to replace all spaces in a string with '%20'.

const URLify = (str) => {
  let split = str.split('');
  for (let i = 0; i < split.length; i++) {
    if (split[i] === ' ') {
      split[i] = '%20';
    }
  }
  return split.join('');
};

module.exports = URLify;
