/**
 *  利用递归的思想，定义左右两个指针，通过跟数组头部元素对比，然后如果尾部元素大于target，就往前移动一位
 *  如果尾部元素小于target了，就和头部元素交换， 头部的操作相反
 *  然后一遍过后将数组以left分割成两个，然后再进行比对
 */

function quickSort(arr, start, end) {
    if (end - start < 1) {
      return;
    }
    let left = start;
    let right = end;
    let target = arr[start];
    while(left < right) {
      while(left < right && arr[right] >= target) {
          right--;
      }
      let temp = arr[left];
      arr[left] = arr[right]
      arr[right] = temp;
      
      while(left < right && arr[left] < target) {
        left++;
      }
      let temp2 = arr[left];
      arr[left] = arr[right]
      arr[right] = temp2;
    }
    // 此时left的位置处在中间
    arr[left] = target;
    // 拆分数组
    quickSort(arr, start, left - 1);
    quickSort(arr, left + 1, end);
    return arr;
}
// function quickSort(array, start, end) {
//   if (end - start < 1) {
//     return;
//   }
//   const target = array[start];
//   let l = start;
//   let r = end;
//   while (l < r) {
//     while (l < r && array[r] >= target) {
//       r--;
//     }
//     array[l] = array[r];
//     while (l < r && array[l] < target) {
//       l++;
//     }
//     array[r] = array[l];
//   }
//   array[l] = target;
//   quickSort(array, start, l - 1);
//   quickSort(array, l + 1, end);
//   return array;
// }

var newarr = quickSort([2,8,4,11,3,20,12,7], 0, 7);
console.log(newarr);