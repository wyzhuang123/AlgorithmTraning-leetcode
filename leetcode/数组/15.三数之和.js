  // function threesum(arr){
  //   if(arr==[] ||arr.length<=3){
  //     return arr;
  //   }
  //    let results=[];
  //    arr.sort();
  //    for(let i=0;i<arr.length-2;i++){
  //      if(i==0 || arr[i]!=arr[i-1]){
  //         let start=i+1,end=arr.length-1;
  //         while(start<end){
  //           if(arr[i]+arr[start]+arr[end]==0){
  //             results.push([arr[i],arr[start],arr[end]]);
  //             start++;
  //             end--;
  //             while(start<end && arr[start]===arr[start-1]){
  //               start++;
  //             }
  //             while(start<end && arr[end]===arr[end+1]){
  //               end--;
  //             }
  //           }else if(arr[i]+arr[start]+arr[end]>0){
  //               end--;
  //           }else{
  //               start++;
  //           }
  //         }
  //      }
  //     return results;
  //    }
  // }

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = []; 
  // 数组为空 或者 小于3个子元素  return [];
  if(!nums || nums.length < 3) {
      return result;
  }
  // 排序数组
  nums.sort((a,b) => {
    return a - b;    // [-4,-1,-1,0,1,2];
  })

    // 三数之和最重要在去重,找出三数不难
  for(let i = 0; i < nums.length - 2; i++) {
        if(i === 0 || nums[i] != nums[i-1]) {
          let start = i + 1;
          let end = nums.length - 1;
          while(start < end) {
             let sum = nums[start] + nums[i] + nums[end];
            if(sum === 0) {
                  result.push([nums[start],nums[i],nums[end]]);
                  start++;
                  end--;
                  while(start < end && nums[start] === nums[start - 1]) {
                    start++;
                  }  
                  while(start < end　&& nums[end] === nums[end + 1]) {
                    end--;
                  }

            } else if (sum > 0) {
                end--;
            } else {
                start++;
            }

          }
        }
  }

  return result;
};
var arr=[-1,0,1,2,-1,-4];
console.log(threeSum(arr));
//  var newarr=[0];
//  console.log(threesum(newarr));
