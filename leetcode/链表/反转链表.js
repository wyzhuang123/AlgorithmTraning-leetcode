/**
 * 定义两个节点来记录位置信息
 * 
 */


var reverseList = function(head) {
      let headNnode = head;
      let currentNode = null;
      while(head && head.next) {   //不能到最后一个节点
        currentNode = head.next;
        head.next = currentNode.next;
        currentNode.next = headNnode;
        headNnode = currentNode;
      }
      return headNnode;
}