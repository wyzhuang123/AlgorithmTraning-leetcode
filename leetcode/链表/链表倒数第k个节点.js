/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
  if(!head || !k) {
    return null;
  }
  let dummy = new ListNode(-1);
  dummy.next = head;
  let start = dummy; 
  let end = dummy;
  for(let count = 0; count<k; count++) {
      end = end.next;
  }
  while(start.next) {
    start = start.next;
    end = end.next;
    if(end === null) {
      break;
    }
  }
  return start.val;
};



// 提交错误原因： 未考虑链表长度不足k的情况  解决： 利用dummy从-1节点开始遍历，而不是从head开始