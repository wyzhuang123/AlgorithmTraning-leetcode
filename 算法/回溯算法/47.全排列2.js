/**
 * @param {number[]} nums
 * @return {number[][]}
 */



//  多一步排重的步骤， 多利用一个数组
var permuteUnique = function(nums) {
  nums.sort((a, b) => {
      return a - b;
  })
  const ans = [];
  const hash = new Array(nums.length).fill(false);
  const backtrack = (track) => {
        if(track.length === nums.length) {
          ans.push([...track]);
          return;
        }
        for(let i = 0; i < nums.length; i++) {
          if(hash[i] || (nums[i] === nums[i-1] && i > 0 && !hash[i - 1])) {
              continue;
          } 
            track.push(nums[i]);
            hash[i] = true;
            backtrack(track);
            hash[i] = false;
            track.pop();
        
        }
  }

  backtrack([]);
  return ans;
};