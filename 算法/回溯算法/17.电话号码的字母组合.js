/**
 * @param {string} digits
 * @return {string[]}
 * 
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
   给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母
 */
var letterCombinations = function(digits) {
  if(!digits) {
    return []; 
  }
  const ans = [];

  const table = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];


  const backtrack = (track, inner) => {
        if(track.length === digits.length) {
          ans.push(track.join(''));
          return;
        }
        for(const v of table[digits[inner]]) {
          track.push(v);
          backtrack(track, inner + 1);
          track.pop();
        }
  }
  backtrack([], 0);
  return ans;
};





