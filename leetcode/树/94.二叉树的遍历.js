var inorderTraversal = function(root) {
  let stack = [];
  let current = root;
  let result = [];
  while(current || stack.length) {
      while(current) {
          stack.push(current);
          current = current.left;
      }
      current = stack.pop();
      result.push(current.val);
      if(current.right) {
          current =current.right;
      } else {
          current = null;
      }
  }
  return result;
};


let root = [1,null,2,3];
inorderTraversal(root);