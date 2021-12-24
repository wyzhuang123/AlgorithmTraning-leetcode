/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let dp = [];   // [[], [], []]


  // 构建题目给的数组
  for(let i = 0; i < m; i++) {
    dp.push([]);
  }


  // 在边上的格子路径只有一条
  for(let i = 0; i < m; i++) {
    dp[i].push(1);
  }
  for(let i = 0; i < n; i++) {
    dp[0].push(1);
  }

   // 递推公式： dp[i][j] = dp[i][j-1] + dp[i - 1][j];
   //  每个dp格子是左上两个格子的路径条数相加
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];


};