var removeDuplicates = function(nums) {
  let i=1
  let j=0;
  for(i;i<nums.length;i++){
    if(nums[i]!=nums[j]){
     nums[++j]=nums[i]; //[1,1,2]
    }
  }
  return ++j;
};

var nums=[1,1,2];
console.log(removeDuplicates(nums));
console.log(nums);

