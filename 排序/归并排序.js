/**
 * 实现归并排序
 */

 //  arr = [1,6,2,11,5,10,4,7]  [1,6,2,11,5,10,4]

 function mergeSort(nums) { 
    
        if (nums.length < 2) {
          return nums;
      }
        let half = Math.floor(nums.length/2);
        let left = nums.slice(0,half);
        let right = nums.slice(half,nums.length);
        // 分
        let mergeSortLeft = mergeSort(left);
        let mergeSortRight = mergeSort(right);

        return merge(mergeSortLeft, mergeSortRight);   //合
      
 }

 function merge(left, right) {
    const result =[];

    while(left.length && right.length) {
      if(left[0] <= right[0]) {
          result.push(left.shift());
      } else {
          result.push(right.shift());
      }
    }

    while(left.length) {
        result.push(left.shift());
    }

    while(right.length) {
        result.push(right.shift());
    }

    return result;
 }




//  function mergeSort (arr) {
//   let len = arr.length
//   if (len < 2) {
//       return arr
//   }
//   let middle = Math.floor(len/2)
//   //拆分成两个子数组
//   let left =  arr.slice(0, middle)
//   let right = arr.slice(middle,len)
//   //递归拆分
//   let mergeSortLeft = mergeSort(left)
//   let mergeSortRight = mergeSort(right)
//   //合并
//   return merge( mergeSortLeft,mergeSortRight)
// }
// const merge = (left, right) => {
//   const result = [];

//   while (left.length && right.length) {
//       // 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
//       if (left[0] <= right[0]) {
//           result.push(left.shift()); //每次都要删除left或者right的第一个元素，将其加入result中
//       } else {
//           result.push(right.shift());
//       }
//   }
//   //将剩下的元素加上
//   while (left.length) result.push(left.shift());

//   while (right.length) result.push(right.shift());

//   return result;
// };
let arr = [1,6,2,11,5,10,4];

console.log(mergeSort(arr));
