/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let p = l1;
  let q = l2;
  let head = new ListNode(-1);  //定义一个节点为空，返回时，返回其.next
  let dummy = head;
  while(p!=null && q!=null) {
      if(p.val < q.val) {
        dummy.next = p;
        p = p.next;
      } else {
        dummy.next = q;
        q = q.next;
      }
      dummy = dummy.next;
  }
     dummy.next = p===null?  q:p;   //   理解这一句语句

  return head.next;
};