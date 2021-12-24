/**
 * 每次循环选取一个最小的数字放到前面的有序序列中。
 */

function selectSort(arr) {
    for(let i = 0; i < arr.length; i++) {
      // 每次开头设置开始最小的索引为i
      let minIndex = i;
        for(let j = i; j < arr.length; j++) {
          // 判断每个元素和最小元素
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
      // 一次遍历完后交换
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
    return arr;
}


var newarr = selectSort([2,8,4,11,3,20,12,7]);
console.log(newarr);