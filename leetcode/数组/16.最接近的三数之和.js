var threeSumClosest = function(nums, target) {
  nums.sort(function(a,b){
      return a-b;
  })
  let ans=nums[0]+nums[1]+nums[2];
  for(let i=0;i<nums.length;i++){
      let start=i+1;
      let end=nums.length-1;
      while(start<end){
        let sum=nums[i]+nums[start]+nums[end];
          if(Math.abs(target-sum)<Math.abs(target-ans)){
              ans=sum;  
          }
          if(sum>target){                   
              end--;
          }else if(sum<target){
              start++;
          }else if(sum==target){
              return ans;
          }
      }
  }
  return ans;
}

var arr=[0,2,1,-3]; //[-3,0,1,2]   -1
console.log(threeSumClosest(arr,1)); 