var deleteDuplicates =function(head) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let left = dummy;
  let right = dummy;
  left = left.next;
  right = left.next;
  while(left && right) {
    if(left.val === right.val) {
        left.next = right.next;
        right = right.next;
    } else {
      left = left.next;
      right = right.next;
    }
  }

  return dummy.next;
}