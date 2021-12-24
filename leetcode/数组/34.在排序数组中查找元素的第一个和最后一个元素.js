var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let fIndex = -1;
  let lIndex = -1;
  while(left < right) {
    if(nums[left] === target) {
      fIndex = left;
    } else if(nums[right] === target) {
      lIndex = right;
    } 
    if(fIndex === -1) {
      left++;
    }
    if(lIndex === -1) {
      right--;
    }      
  }
  return [fIndex, lIndex];
};

console.log(searchRange([5,7,7,8,8,10], 8));
