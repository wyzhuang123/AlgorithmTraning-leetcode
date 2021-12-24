/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  let dp = Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  if(n <= 3) {
    return dp[n - 1];
  }
  for(let i = 3; i < n; i++) {
    for(let j = 0; j < i; j++) {
        dp[i] = Math.max(dp[i], (j + 1) * (i - j), dp[j] * (i - j));
    }  
  }


  // 递推公式: 
  console.log(dp);
  return dp[dp.length - 1];
};

