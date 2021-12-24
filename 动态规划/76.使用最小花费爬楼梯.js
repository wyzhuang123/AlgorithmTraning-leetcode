/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let arr = [];
  arr[0] = cost[0];
  arr[1] = cost[1];
  /**

    [1, 100, 1];
    支付体力值， 爬一个或两个阶梯

    在dp数组中找出最小的，  确定跳的步数，跳到那个体力值更小的   
    dp数组记录到这个阶梯最小的体力消耗

    递推公式  是找前两个阶梯最小的累计体力消耗（arr）
              Math.min(arr[i - 1] + cost[i], arr[i - 2] + cost[i]);

    推导的arr
    [1, 100, 2, 3, 3, 103, 4, 5, 104, 6];
    [10, 15, 30];

   */

   for(let i = 2; i < cost.length; i++) {
     arr[i] = Math.min(arr[i - 1] + cost[i], arr[i - 2] + cost[i]);
   }

   return Math.min(arr[cost.length - 1], arr[cost.length - 2]);
};