/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(matrix.length === 0){
      return []
  }
  let left = 0, right = matrix[0].length - 1, up = 0, down = matrix.length - 1;
  let result = [];
  while(up <= down && left <= right){
      for(let i = left; i <= right && up <= down; i++){
          result.push(matrix[up][i]);
      }
      up++;
      for(let i = up; i <= down && left <= right; i++){
          result.push(matrix[i][right]);
      }
      right--;
      for(let i = right; i >= left && up <= down; i--){
          result.push(matrix[down][i]);
      }
      down--;
      for(let i = down; i >= up  && left <= right; i--){
          result.push(matrix[i][left]);
      }
      left++;
  }
  return result
};

