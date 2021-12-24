var CQueue = function() {
  this.stack1 = [];
  this.stack2 = [];
};

/** 
* @param {number} value
* @return {void}
*/
CQueue.prototype.appendTail = function(value) {
   this.stack1.push(value);
   return null;
};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function() {

   if(this.stack2.length === 0 && this.stack1.length === 0 ) {
     return -1;
   }

   // 必须一直把stack1的元素全部压入stack2，而且此时stack2为空，才能保证先进先出
   if(this.stack2.length === 0) {
     while(this.stack1.length > 0) {
         this.stack2.push(this.stack1.pop());
     }
   }

 return this.stack2.pop();
};

