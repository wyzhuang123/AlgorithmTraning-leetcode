/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  if(!B || !A) {
    return false;
  }
  const dfs = function(A, B) {
    /**
     *   这里注意A、B的判断顺序
     *   有种情况是B已经为空同时A也为空， 这时候B遍历完了， 应该 return true 而不是 return false   
     *   第一次写这倒算法，被这里卡到了
     */
    if(!B) {
        return true;
    } else if(!A) {
        return false;
    } else if(A.val === B.val) {
        return dfs(A.left, B.left) && dfs(A.right, B.right);
    } else {  
        return false;
    }
  }
  // A这层 与 B这层没有相同的元素， A 向下查找
  return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};