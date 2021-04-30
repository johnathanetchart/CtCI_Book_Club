//Write an algorithm such that if an element in an M x N matrix is 0, its entire row and column are set to 0.

//input: a matrix of lots of stuff. doesn't matter, only 0 matters
//output: the same matrix, but with all rows and columns set to 0 if an element is 0
function zeroMatrix(matrix) {
  //loop through matrix
  let rows = [];
  let columns = []

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.push(i);
        columns.push(j);
      }
    }
  }

  for (let i = 0; i < rows.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      matrix[rows[i]][j] = 0;
    }
  }

  for (let i = 0; i < columns.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
    //   matrix[rows[i]][j] = 0;
      matrix[j][columns[i]] = 0
    }
  }
  //for each 0, log the row and column
  //afterwards, loop through and set all that match either one to 0
  return matrix;
}

module.exports = zeroMatrix;
