var fourSum = function(nums, target) {
  if(nums.length<=4){
      return nums;
  }  
  nums.sort((a,b)=>{
      return a-b;
  })
  let result=[];
  for(let i=0;i<nums.length-3;i++){
    if(i>0 && nums[i]==nums[i-1]){
      continue;
    }
    if(nums[i]+nums[i+1]+nums[i+3]+nums[i+4]>target){
      break;
    }
    if(nums[i]+nums[nums.length-3]+nums[nums.length-2]+nums[nums.length-1]<target){
      continue;
  }
    for(let j=i+1;j<nums.length-2;j++){
      let k=j+1;
      let end=nums.length-1;
      if(j>i+1 && nums[j]==nums[j-1]){
        continue;
      }
      if(nums[i]+nums[j]+nums[j+1]+nums[j+2]>target){
        break;
      }
      if(nums[i]+nums[j]+nums[end-1]+nums[end]<target){
          continue;
      }
      while(k<end){
        let sum=nums[i]+nums[j]+nums[k]+nums[end];
        if(sum===target){
          result.push([nums[i],nums[j],nums[k],nums[end]]);
          while(k<end && nums[k]===nums[k+1]){
            k++;
          }
          k++;
          while(k<end && nums[end]===nums[end-1]){
            end--;
          }
          end--;
        }else if(sum>target){
          end--;
        }else{
          k++;
        }
      }
    }
  }
  return result;
};
// var fourSum1 = function(nums, target) {
//   const quadruplets = [];
//   if (nums.length < 4) {
//       return quadruplets;
//   }
//   nums.sort((x, y) => x - y);
//   const length = nums.length;
//   for (let i = 0; i < length - 3; i++) {
//       if (i > 0 && nums[i] === nums[i - 1]) {
//           continue;
//       }
//       if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
//           break;
//       }
//       if (nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1] < target) {
//           continue;
//       }
//       for (let j = i + 1; j < length - 2; j++) {
//           if (j > i + 1 && nums[j] === nums[j - 1]) {
//               continue;
//           }
//           if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
//               break;
//           }
//           if (nums[i] + nums[j] + nums[length - 2] + nums[length - 1] < target) {
//               continue;
//           }
//           let left = j + 1, right = length - 1;
//           while (left < right) {
//               const sum = nums[i] + nums[j] + nums[left] + nums[right];
//               if (sum === target) {
//                   quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
//                   while (left < right && nums[left] === nums[left + 1]) {
//                       left++;
//                   }
//                   left++;
//                   while (left < right && nums[right] === nums[right - 1]) {
//                       right--;
//                   }
//                   right--;
//               } else if (sum < target) {
//                   left++;
//               } else {
//                   right--;
//               }
//           }
//       }
//   }
//   return quadruplets;
// };

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/4sum/solution/si-shu-zhi-he-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
var arr=[2,2,2,2,2];
var result=fourSum(arr,8);
console.log(result);