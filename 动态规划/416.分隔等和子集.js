/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let result = [];
  let backtracking = (track, index, sum) => {
    if(sum === 11) {
      result.push([...track]);
      return;
    }
    if(track.length === nums.length || sum > 11) {
      return;
    }
    for(let i = index; i < nums.length; i++) {
      sum += nums[i];
      track.push(nums[i]);
      backtracking([...track], i + 1, sum);
      sum -= nums[i];
      track.pop();
    }
  }

  backtracking([], 0, 0);

  return result.length === 2 ? true : false;  

}


console.log(canPartition([1, 5, 11, 5]));