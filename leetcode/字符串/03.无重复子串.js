
//abcabda
//最长的是cabd
//定义两个指针i,j,{}
//return 最长 
var lengthOfLongestSubstring = function(str) {
  let i,j;
  let res=0;
  let set=new Set();
for(i=0;i<str.length;i++){
  if(!set.has(str[i])){
    set.add(str[i]);
    res=Math.max(res,set.size)
  }
  else{
      while(set.has(str[j])){
        set.delete(str[j]);
        j++;
      }
      set.add(str[i]);
  }
}
return res;
};
let s='dvdf';
console.log(lengthOfLongestSubstring(s));
