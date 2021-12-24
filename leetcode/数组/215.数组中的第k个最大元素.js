var findKthLargest = function(nums, k) {
  nums.sort((a,b)=>{
      return b-a;
  })
  console.log(nums);
};
var arr=[1,5,2,5,2,8,9,2,0];
findKthLargest(arr);