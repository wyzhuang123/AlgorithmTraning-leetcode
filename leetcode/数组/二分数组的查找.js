/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {

  if(!matrix.length) {
    return false;
  }
  let n = matrix[0].length;
  let m = matrix.length;
  let row = 0;
  let col = n -1;

  while(row < m && col>=0) {
      let num = matrix[row][col];

      if(target > num) {
        row++;
      } else if(target < num) {
        col--;
      } else {
        return true;
      }
  }
  if(row === 0 && col === 0) {
    return (matrix[row][col] === target);
  }
  return false;
};