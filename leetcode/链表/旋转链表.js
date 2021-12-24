/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  let dummy1 = new ListNode();
  dummy1.next = head;
  let dummy = dummy1;
  let headNode = new ListNode();
    for(let i = 0; i < k; i++) {
      headNode = head;
       while(dummy.next != null) {
          if(dummy.next.next === null) {
            let lastNode = new ListNode();
            lastNode = dummy.next;
            dummy.next = null;
            lastNode.next = headNode;
          }
          dummy = dummy.next;
       }
  }
  return dummy1.next;
};