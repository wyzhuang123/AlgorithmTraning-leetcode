/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * 示例： 
 * 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
  输出: [3,3,5,5,6,7] 
  解释: 

      滑动窗口的位置                最大值
    ---------------               -----
    [1  3  -1] -3  5  3  6  7       3
    1 [3  -1  -3] 5  3  6  7        3
    1  3 [-1  -3  5] 3  6  7        5
    1  3  -1 [-3  5  3] 6  7        5
    1  3  -1  -3 [5  3  6] 7        6
    1  3  -1  -3  5 [3  6  7]       7

 */
var maxSlidingWindow = function(nums, k) {
  let stack = [nums[0]];   // 窗口
  let maxNum = nums[0];    //最大值
  let result = [];
  for(let i = 1; i < k; i++) {
    stack.push(nums[i]);
    maxNum = Math.max(nums[i], maxNum);
  }
  result.push(maxNum);
  let index = k;
  for(index; index < nums.length; index++) {
      let val = stack.pop();
      stack.push(nums[index]);
      maxNum = Math.max(nums[index], maxNum);
      if(val === maxNum) {
          for(let i = 0; i < stack.length; i++) {
            maxNum = Math.max(stack[i], maxNum);
          }
      } else {
        result.push(maxNum);
      }

  }

console.log(stack);
return result;
};