/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  var row = board.length;
  var col = board[0].length;

  var dfs = function(i,j,board,word,index){
      if(i < 0 || i >= row || j < 0 || j > col || board[i][j] !== word[index]) return false; // 判断不符合条件
      if(index === word.length - 1) return true;  // word遍历完了
      var tmp = board[i][j];  // 记录到board的值
      board[i][j] = '-'      // 锁上，因为后续的递归是4个方向上的，无法保证上一个方向的值
      var res =  dfs(i - 1,j,board,word,index + 1) || dfs(i + 1,j,board,word,index + 1) || dfs(i,j - 1,board,word,index + 1) || dfs(i,j + 1,board,word,index + 1);
      board[i][j] = tmp;   // 恢复现场
      return res;
      
  }

  // 遍历整个board，找到初始位置点
  for(var i = 0;i < row; i++){
      for(var j = 0; j < col; j++){
          if(dfs(i,j,board,word,0)) return true;
      }
  }
  // 没找到
  return false
};


// /**
//  * @param {character[][]} board
//  * @param {string} word
//  * @return {boolean}
//  */
// var exist = function(board, word) {
//   let row = board[0].length;
//   let col = board.length;

//   var dns = function(board, word, i, j, index) { 
//     // 判断条件  边界
//     if(j >= row || i > col || j < 0 || i < 0 || board[j][i] !== word[index]) {
//       return false;
//     }

//     // 到达word最后

//     if(index === word.length-1) {
//         return true;
//     }
//     let val = board[j][i];
//     // if(val === word[index]) {

//         //  必须保存已经遍历的值
//       board[j][i] = '-';
//         // 一个字母的四个方向判断  index加1表示找到一个符合word的字符了
//       var res = dns(board, word, i-1, j, index + 1) || dns(board, word, i+1, j, index + 1) || 
//              dns(board, word, i, j-1, index + 1) || dns(board, word, i, j+1, index + 1);
//       board[j][i] = val;
//       return res;
//     // }

//     return false;
//   }


//   for(let i = 0; i < col; i++) {
//       for(let j = 0; j < row; j++) {
//           // 从开头出发
//         if(dns(board, word, i, j, 0)) {
//           return true;
//         } 
//       }
//   }

//   return false;
// };  