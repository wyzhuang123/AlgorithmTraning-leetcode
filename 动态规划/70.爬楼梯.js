/**
 * @param {number} n
 * @return {number}
 */

 
  /**
    推算台阶和方法数的关系    
      1   1
      2   2
      3   3
      4   5
    得 递推公式： dp[i] = dp[i - 1] + dp[i -2];

    跟斐波那契数一样的递推公式， 只是这里没有用数组
   */

var climbStairs = function(n) {
  let first = 1;
  let middle = 2;
  let last;
  if(n  === first) {
    return first;
  } else if (n === middle) {
    return middle;
  }

  for(let i = 3; i < n + 1; i++) {
    last = first + middle;
    first = middle;
    middle = last;
  }

  return last;
};