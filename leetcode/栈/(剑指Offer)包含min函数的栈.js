/**
 * initialize your data structure here.
 * 
 * 利用辅助栈存储最小值
 */
var MinStack = function() {
  this.stack = [];
  this.minstack = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {  
    this.stack.push(x);
    // console.log(this.stack);
    if(x <= this.minstack[this.minstack.length - 1] || this.minstack.length === 0) {
        this.minstack.push(x);
    }  
    // console.log(this.minstack); 
  
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  let val = this.stack.pop();
  if(val === this.minstack[this.minstack.length - 1]) {
      this.minstack.pop();
  }
  
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1];
};

/**
* @return {number}
*/
MinStack.prototype.min = function() {
  return this.minstack[this.minstack.length - 1];
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/