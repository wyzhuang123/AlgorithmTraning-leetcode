/**
 * @param {number[]} nums
 * @return {boolean}
 * 题目描述 ： 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标。
              数组中的每个元素代表你在该位置可以跳跃的最大长度。
              判断你是否能够到达最后一个下标。
              eg: [2, 3, 1, 1, 4]   output: true
              解释:  可以先跳 1 步，从下标 0 到达下标 1, 
                    然后再从下标 1 跳 3 步到达最后一个下标
  */
var canJump = function(nums) {
  // let step = 0;
  // for(let i = 0; i < nums.length; i++){
  //   if(nums[i] < 0) {
  //     return false;
  //   } else {
  //     step = nums[i];
  //   }
  //   if(step + i >= nums.length - 1) {
  //     return true;
  //   }
  // }
  // return false;




  if(nums.length === 1) return true
  let cover = 0
  // <= cover 这部重要， 当发现到达有边界时，则说明到不了最后
  for(let i = 0; i <= cover; i++) {
      cover = Math.max(cover, i + nums[i])
      if(cover >= nums.length - 1) {
        return true
      }
  }
  return false


};

console.log(canJump([3, 2, 1, 0, 4]));




//  [3, 2, 2, 0 ,4];