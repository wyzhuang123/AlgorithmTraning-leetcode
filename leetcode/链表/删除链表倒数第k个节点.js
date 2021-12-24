/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let start = dummy;
  let end = dummy;
  for(let i = 0;i < n+1; i++) {
        end = end.next; 
  }
  while(end != null) {
      start = start.next;
      end = end.next;
  }
  if(start === null && end === null) {
    return [];
  }
  let currentNode = start.next;
  start.next = currentNode.next;
  currentNode.next = null;
  
  return head;
};


console.log(removeNthFromEnd([1],1));