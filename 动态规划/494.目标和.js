/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  let sum = nums.reduce((pre, next) => {
    return pre + next;
  })
  if(Math.abs(target) > sum || (target + sum) % 2 === 1) {
    return 0;
  }
  // dp 数组代表+号个数下的目标和

  let Sum = (target + sum) / 2
  let dp = Array(Sum + 1).fill(0);
  dp[0] = 1;
  // 递推公式
  // 左边和 - 右边和 === target

  for(let i = 0; i < nums.length; i++) {
    for(let j = Sum; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }

  console.log(dp);
  return dp[Sum];
};