/**
     * 非递归实现

    取跟节点为目标节点，开始遍历
    1.左孩子入栈 -> 直至左孩子为空的节点
    2.栈顶节点的右节点为空或右节点被访问过 -> 节点出栈并访问他，将节点标记为已访问
    3.栈顶节点的右节点不为空且未被访问，以右孩子为目标节点，再依次执行1、2、3
 *
 */

var postorderTraversal = function (root) {
      let result = [];
      let stack = [];
      let last = null;
      let current = root;
      while(current || stack.length>0) {
            while(current) {      //一直遍历到树的最左端
                stack.push(current);
                current = current.left;       
            }
            // 来到树的最左端
            // current = stakc.pop(); //最后一个节点给current
            current = stack[stack.length-1];
            if(!current.right || current.right === last ) {
                  current = stack.pop();
                  result.push(current.val);
                  last = current;  //记录访问的右节点
                  current = null;    //跳过第一个while不再走左边了
            } else {
                  current = current.right;   //回到第一个while
            }
      }
       return result;
}


/**
 * 递归实现
 */
var postorderTraversal = function (root, array = []) {
      if (root) {
        postorderTraversal(root.left, array);
        postorderTraversal(root.right, array);
        array.push(root.val);
      }
      return array;
};