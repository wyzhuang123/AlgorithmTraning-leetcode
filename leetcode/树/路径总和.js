/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  let sum = 0;
  let stack = [];
  let current = root;
  while(current || stack.length) {
      while(current) {
        sum += current.val;
        if(sum > targetSum) {
            if(!stack.length) {
                return false;
            } else {
              current = stack.pop();
              if(current.right) {
                current = current.right;
              }
            }
        } else if(sum === targetSum){
            return true;
        } else {
            stack.push(current);
            current = current.left;
        }
      }
  }
};


let root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22;
console.log(hasPathSum(root,targetSum));
