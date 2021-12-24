var romanToInt=function(s){
  let map=new Map();
  map.set('I',1);
  map.set('V',5);
  map.set('X',10);
  map.set('L',50);
  map.set('C',100);
  map.set('D',500);
  map.set('M',1000);
  let result=0;
  for(let i=0;i<s.length;i++){
      let value=map.get(s[i]);
      if(i<s.length-1 && value<map.get(s[i+1])){
        result-=value;
      }else{
        result+=value;
      }
  }
  return result;
}

var result=romanToInt("IX");
console.log(result);
// IVXLCD   IV +XL +CD  4+40+400  =444   -I +V -X +L -C +D
//VXLC
//            I+V+X+L+C+D   1+5+10+50+100+500



// 一开始的想法   
//IX 