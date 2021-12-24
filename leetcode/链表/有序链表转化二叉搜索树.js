/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if(!head) {
    return null;
  }      
  let fast = head;
  let slow = head;
  let preslow;
  while(fast && fast.next) {
      preslow = slow;   //保存前一个节点，便于取前半段链表
      slow = slow.next;
      fast = fast.next.next;
  }
  let root = new TreeNode(slow.val);
  if(preslow != null){
      preslow.next = null;
      root.left = sortedListToBST(head);
  }
  
  root.right = sortedListToBST(slow.next);

  return root;

};