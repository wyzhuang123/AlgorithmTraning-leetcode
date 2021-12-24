

/**
 * 把一个数组通过拆分成四块，然后再左右递归调用判断
 */

function VerifySquenceOfBST (sequence) {
    if(sequence  || sequence.length > 0) {
      let root = sequence[sequence.length-1];   //后序遍历最后一个节点是root
      let i = 0;
      for(i; i < sequence.length-1 ; i++) {
          if( sequence[i] > root) {
              break;        //当值大于root，证明到了右子树
          }   
      }
      for(let j = i; j < sequence.length-1 ; j++) {
          if( sequence[j] < root) {
              return false;    //右子树
          }
      }
      let left = true;

      if(i > 0) {
        left = VerifySquenceOfBST(sequence.slice(0,i));  //左子树递归调用
      }
  
      let right = true;
  
      if( sequence.length-1 > i) {
          right = VerifySquenceOfBST(sequence.slice(i,sequence.length-1));   //右子树递归调用
      }
  
      return  left && right;
    }
}


let sequence = [11,17,16,28,25,21];

console.log( VerifySquenceOfBST(sequence) );
