/**
 * 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
 */


//1.判断有无环  定义两个dummy，然后去两个dummy一次走的步数是相差一倍的


function EntryNodeOfLoop(head) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let p = dummy;
    let q = dummy;
    while(p != null) {
        p = p.next.next;
        q = q.next;
        if(p === q) {
            
            return true;
        }
    }
    return false;
}