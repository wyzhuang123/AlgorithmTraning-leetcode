/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  return swap(root);
};

var swap = function(root) {
  if(!root) {
    return root;  
  }
  // 遍历到树尾端
  swap(root.left);
  swap(root.right);
  let temp = new TreeNode();
  temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;
}

