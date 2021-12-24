/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const ans = [];

  const backtrack = (nums, track) => {
    if(nums.length ===  track.length) {   //长度等于nums的长度，达成一个排列
         ans.push(track);
         return;
    }
      for(let i = 0; i < nums.length; i++) {  //横向搜索
        if(!track.includes(nums[i])) {
            // 纵向搜索
            track.push(nums[i]);
            // 新创建一个存储内存，不然影响其他分支
            const newTrack = [...track];
            backtrack(nums, newTrack);
            // pop [1] [1,2] [1,3]   [2] [2,1] [2,3]
            track.pop();
        } else {
          // 在track里 的跳过
            continue;
        }
      }
  }
  backtrack(nums, []);
  return ans;
}; 