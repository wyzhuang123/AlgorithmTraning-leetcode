var intToRoman = function(num) {
  let result=[];
  let form=[['I',1],['IV',4],['V',5],['IX',9],['X',10],['XL',40],['L',50],['XC',90],['C',100],['CD',400],['D',500],['DM',900],['M',1000]];
  form.reverse();
  console.log(form);
  for(let [symbol,value] of form){
    while(num-value>=0){
        num-=value;
        result.push(symbol);
    } 
    if(num==0){
        break;
    }
  }
  return result.join('');
};
console.log(intToRoman(9));
// console.log(intToRoman(900));
// console.log(intToRoman(90));
// console.log(intToRoman(9));
