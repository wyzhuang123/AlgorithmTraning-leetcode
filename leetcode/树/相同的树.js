/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let left = true;
  let right = true;    
  if(p.val === q.val) {
  while(p!=null && q!=null) {
      left = isSameTree(p.left,q .left);
      right = isSameTree(p.right, q.right);
  }
  return left && right;
  } else {
      return false;
  }   
};


let p = [1,2,3], q = [1,2,3];

console.log(isSameTree(p,q));

