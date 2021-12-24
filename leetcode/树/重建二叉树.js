/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
     if(preorder.length === 0) {
       return null;
     }
     if(preorder.length === 1) {
       return new TreeNode(preorder[0]);
     }
    
    const root = preorder[0];   //头结点
    const index = inorder.indexOf(root);
    const leftInorder = inorder.slice(0, index);  //左边
    const rightInorder = inorder.slice(index+1);  // 右边
    const leftPreorder = preorder.slice(1, index+1);
    const rightPreorder = preorder.slice(index+1);

    const tree = new TreeNode(root);

    tree.left = buildTree(leftPreorder, leftInorder);
    tree.right = buildTree(rightPreorder, rightInorder);

    return tree;
};

// 这道题多思考，递归思想