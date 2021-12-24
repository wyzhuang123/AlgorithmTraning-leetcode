/**
 * @param {number} target
 * @return {number[][]}
 * 
 * 
 * 利用滑动窗口解，下面两种方法都可以
 * 方法1. 类似队列的方式求解  
 * 方法2.  利用target与边界的关系求解
 */



var findContinuousSequence = function(target) {
      let arr = [1,2];
      let num = 3;
      let count = 3;
      let result = [];
      while(target > arr[arr.length-1]) {
        if(count < target) {
          count += num;
          arr.push(num++); 
          // console.log(arr,count);
        } else if(count === target) {
          let insert = [];
          for(let i = 0;i < arr.length ; i++) {
            insert[i] = arr[i];
          }
          result.push(insert);
          count -= arr.shift();   
        }else {
          count -= arr.shift();
        }
      }
      return result;


   // let index = target %2 === 1? (target/2) + 1 : (target/2);
   // let arr = [];
   // let result = [];
   // let sum = 0;
   // for(let i = 1;i < index;i++) {
   //   arr.push(i);
   //   sum 
   // while(sum > target) {
   //   sum -= arr[0];
   //   arr.shift();
  
   // if(sum === target) {
   //   result.push([...arr]);
   // }
   // }
   //  return result
};


console.log(findContinuousSequence(15));