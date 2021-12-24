/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if(nums.length == 1) {
    return 1;
  }
    let p = 0;
    let len = nums.length;
    let result = 0;
    let cut = 0;
    let pre = 0;
    while(p < len - 1) {
      cut = nums[p + 1] - nums[p];
      if((pre >= 0 && cut < 0) || (pre <= 0 && cut > 0)) {
        result++;
        pre = cut;
      }
      p++;
    }

    return result + 1;
};