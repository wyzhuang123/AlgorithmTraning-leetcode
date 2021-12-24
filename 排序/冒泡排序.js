/**
 * 通过比较相邻两个元素，交换大小
 * 利用flag 可以 减少无谓的遍历
 */

function bunbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
      let flag = true;
      for(let j = 0; j < arr.length; j++) {
        if(arr[j] > arr[j+1]) {
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          flag = false;
        }
      }
      if(flag === true) {
        break;
      }
    }
    return arr;
} 

var newarr = bunbleSort([2,8,4,11,3,20,12,7]);
console.log(newarr);
