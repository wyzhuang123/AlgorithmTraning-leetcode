/**
 * @param {number[]} nums
 * @return {number}
 */
/**
    var a = [2,3,2,4,4]
    2 ^ 3 ^ 2 ^ 4 ^ 4等价于 2 ^ 2 ^ 4 ^ 4 ^ 3 => 0 ^ 0 ^3 => 3
 */
var singleNumber = function(nums) { 
  let yihuo = 0;
  for(let i = 0; i < nums.length; i++) {
    yihuo = yihuo ^ nums[i];
  }
   return yihuo;    
};