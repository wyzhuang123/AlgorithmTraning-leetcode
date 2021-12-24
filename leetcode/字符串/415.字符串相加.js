/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var addStrings = function(num1,num2) {
//   let i = num1.length-1;
//   let k = num2.length-1;
//   let results = [];
//   let plus = 0;
//   let result ;
//   while(i>=0 && k>=0) {
//       let sum = num1[i] + num2[k];
//       if(sum > 10) {
//           // result = sum%10;
//           if(plus > 0){
//               result = sum + plus;
//               results.push((result)%10);
//           }
//           plus = Math.floor(result/10);   
//       } else {
//            if(plus > 0){
//               results.push(sum + plus);
//               plus = 0;
//           } else {
//               results.push(sum);
//           }
//       }
//       i--;
//       k--;
//   }

//   // 某个nums不为0
//   return results
// };


// let num1 = "11", num2 = "123"

// console.log(addStrings(num1,num2));

var addStrings = function(num1,num2) {
    let i = num1.length-1, j = num2.length-1, add = 0;
    let results = [];
    while(i>=0 || j>=0 || add!=0) {
        let a = i >= 0? num1.charAt(i)-"0" : 0
        let b = j >= 0? num2.charAt(j)-"0" : 0
        let result = a + b + add;
        results.push(result%10);
        add = Math.floor(result/10);
        i--;
        j--;
    }
      return results.reverse().join("");
}


let num1 = "23",num2 = "138"
console.log(addStrings(num1,num2));