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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return isisSymmetricTree(root.left,root.right);
};

function isisSymmetricTree (lRoot,rRoot) {
  if(!lRoot && !rRoot) {    //两者都为空，true
      return true;
  }
  if(!lRoot || !rRoot) {   // 一者为空， false
      return false;
  }
  if(lRoot.val != rRoot.val) {   //值不相等， false
      return false;
  } 
  return isisSymmetricTree(lRoot.left,rRoot.right) && isisSymmetricTree(lRoot.right,rRoot.left);
}



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 
 * 第二次做的思路
 */
var isSymmetric = function(root) {
  if(!root) {
    return true;
  }

  return isSame(root.left, root.right);
};


var isSame = function(leftNode, rightNode) {
  if(!leftNode && !rightNode) {
      return true;
  }
  if(!leftNode || !rightNode) {
      return false;
  }
  if(leftNode.val === rightNode.val) {
     return isSame(leftNode.left,rightNode.right) &&　isSame(leftNode.right, rightNode.left);
  } else {
      return false;
  }
}