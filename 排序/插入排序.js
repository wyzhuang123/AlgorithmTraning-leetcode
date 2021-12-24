/**
 * 插入排序的过程怎么样：
 *  将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。
    插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。
 */


 function insertSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(i > 0) {
          let k = i;   //用k来保存后一个指针的位置
            for(let j = i - 1; j >= 0; j--) {
                if(arr[j] > arr[k]) {
                  let temp = arr[j];
                  arr[j] = arr[k];
                  arr[k] = temp;
                  k = j;   // 来到通过同个位置
                }
            }
        }
    }

    return arr;
 }


 var newarr = insertSort([2,8,4,11,3,20,12,7]);
 console.log(newarr);