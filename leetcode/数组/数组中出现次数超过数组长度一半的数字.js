/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
  let half = Math.ceil(nums.length/2);
  let map = new Map();
  if(nums) {
      for(let i = 0; i < nums.length; i++) {
        if(!map.has(nums[i])) {
            map.set(nums[i], 1);
        } else {
        let num = map.get(nums[i]);
        map.set(nums[i],++num);        
        }
      }


      for(let [item,times] of map) {
          if(times >= half) {
            return item;
          }
        }
      }

  return null;
};