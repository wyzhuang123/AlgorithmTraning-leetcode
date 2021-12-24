/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  /**
   * 1. 确定下标含义： 每一个斐波那契数
   * 2.确定递归公式： 题目已经给了， 在这里是 arr[i] = arr[i - 1] + arr[i - 2];
   * 3. dp数组如果初始化： 题目也给了， arr[0] = 0, arr[1] = 1;
   * 4. 确定遍历顺序： 从前到后递归
   */
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for(let i = 2; i < n + 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};