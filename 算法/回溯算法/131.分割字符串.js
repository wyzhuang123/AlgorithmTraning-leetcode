/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const ans = [];

  const trackback = (str, index ,start) => {
      if(start === s.length) {
        ans.push(track);
        return;
      }

      for(let i = index; i < s.length; i++) {
          str += s[i];
          if(ishuiwen(str)) {
              ans.push(str);
              trackback(str, index + 1, start + 1);
              ans.pop();
              str -= s[i];
          } else {
            continue;
          }
      } 
  }
  const ishuiwen = (str) => {
      let i = 0;
      let j = str.length - 1;
      while(i < j) {
        if(str[i] != str[j]) {
          return false;
        }
      }
      return true;
  }
  trackback('', 0, 0);
  return ans;
};
console.log(partition('aab'));



