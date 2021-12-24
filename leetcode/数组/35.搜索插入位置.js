/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
  请必须使用时间复杂度为 O(log n) 的算法
 */

//  利用二分法查找，这题是寻找左边界  左边界表示数组中小于target的数有多少个  
//  比如如果left === 2 时返回， 说明数组中小于target的数有2个， 新插入的位置在第三个，即index = 2的位置
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    let mid = Math.floor((left + right)/2);
    if(nums[mid] === target) {
        return mid;
    } else if(nums[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
  }
  return left;
};