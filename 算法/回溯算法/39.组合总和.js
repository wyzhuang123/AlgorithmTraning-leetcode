/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

  const ans = [];
  candidates.sort((a, b) => {
    return a - b;
  })
  // let sum = 0;
  // let nums = [];
  const backtrack = (nums, sum) => {
      if(sum === target) {
        ans.push([...nums]);
        return;
      }
      if(sum > target) {
        return;
      }
      for(let i = 0; i < candidates.length; i++) {
          nums.push(candidates[i]);
          sum += candidates[i];
          backtrack(nums, sum);
          nums.pop();
          sum -= candidates[i];
      }
  }

  backtrack([], 0);

  return ans;
}

console.log(combinationSum([2,3,6,7], 7));