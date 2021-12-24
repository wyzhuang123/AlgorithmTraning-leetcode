/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
      let ans = [];

       candidates.sort((a, b) => {
          return a - b;
      })
      const backtrack = (nums, sum, index) => {
          if(sum === target) {
            ans.push([...nums]);
            return;
          }

          if(sum > target) {
            return;
          }
          
          for(let i = index; i < candidates.length; i++) {
            if(candidates[i] === candidates[i-1] && i > index) {   //i > index  去重在这部
              continue;
            }
            nums.push(candidates[i]);
            sum += candidates[i];
            backtrack(nums, sum, i+1);
            nums.pop();
            sum -= candidates[i];
          }
      }

      backtrack([], 0, 0);
      
      return ans;

}

console.log(combinationSum2([10,1,2,7,6,1,5], 8));

// [2,5,2,1,2], target = 5,
// console.log(combinationSum2([2,5,2,1,2], 5));
