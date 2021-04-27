//Given an image represented by an N x N matrix, where each pixel in the image is represented by an integer, write a method to rotate the image by 90 degrees. Can you do this in place?

function rotateMatrix(matrix) {
  //not in place
  let i = matrix.length - 1;
  let j = 0;
  let result = [];
  let row = [];
  while(j < matrix[0].length) {

    while(i >= 0) {
      row.push(matrix[i][j])
      i--;
    }
    result.push(row);
    row = [];
    j++;
    i = matrix[0].length - 1;
  }
  console.log(result);
  return result;
}

module.exports = rotateMatrix;
