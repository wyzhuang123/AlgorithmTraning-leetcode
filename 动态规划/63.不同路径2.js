/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  // 入口被堵住
  if(obstacleGrid[0][0] === 1) {
    return 0;
  }
  let m = obstacleGrid.length, n = obstacleGrid[0].length;
  

  // 这里初始化数组的时候遇到问题了
  let dp = Array(m).fill().map(item => Array(n).fill(0));   // [[], [], []]

  // 将没有障碍的改为1
  for(let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
      dp[i][0] = 1;
  }

  // 将没有障碍的改为1
  for(let j = 0; j < n && obstacleGrid[0][j] === 0; j++) {
      dp[0][j] = 1;
  }
  
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      // 有障碍
      if(obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = (dp[i -1][j] != 0 ? dp[i - 1][j] : 0) + (dp[i][j -1] != 0 ? dp[i][j - 1] : 0);
      }
    }
  }

  
  return dp[m - 1][n - 1];
};