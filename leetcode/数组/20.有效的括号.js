/**
 * @param {string} s
 * @return {boolean}
 */


var isValid = function(s) {
    let len = s.length;
    if(len % 2 === 1) {   //基数返回false
        return false;
    }

    const map = new Map([
      ["}", "{"],
      [")", "("],
      ["]", "["]
    ]);
    const stack = [];
      for(let key of s) {
        if(map.has(key)) {
            if(stack[stack.length-1] != map.get(key) || !stack.length) {
              return false;
            } else {
              stack.pop();
            }
        } else {
          stack.push(key);
        }
      }
     return !stack.length    //stack 为0时，为false
};
let s = "{[]}"

console.log(isValid(s));
