//暴力解，时间复杂为o（n2）
// var maxArea = function(height) {
//   var max=0;
//   var tall=0; 
//   for(let i=0;i<height.length;i++){
//       for(let j=i+1;j<height.length;j++){
//           tall=height[i]>height[j]? height[j]:height[i];
//           var number=tall*(j-i);
//           max=max>number? max:number;
//       }
//   }
//   return max;
// };

var height=[4,3,2,1,4]
// console.log(maxArea(height));


//双指针法，高小的移动指针，时间复杂度为o（n）
var maxArea = function(height) {
  var f=0;
  var l=height.length-1;
  var max=0;
  var tall=0;
  while(f<l){
      tall=height[f]>height[l]? height[l]:height[f];
      var area=tall*(l-f);
      max=max>area? max:area;
      if(height[l]>height[f]){
        f++;
      }else{
          l--;
      }
  }
  return max;
};
console.log(maxArea(height));