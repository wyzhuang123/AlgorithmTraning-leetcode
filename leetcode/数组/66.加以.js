var plusOne = function(digits) {
  if(digits.length === 1 && digits[0] < 9) {
    digits[0]++;
    return digits
  }
    function find(digits, index) {

        if(digits[index] < 9) {
            digits[index]++;
            return digits;
        } else {
          let num;
          if(index === digits.length -1) {
            num = ++digits[index];
          } else {
            num = digits[index];
          }
          digits[index] = num%10;
          if(index === 0) {
            digits.unshirt(0);
          }
          digits[index - 1] ++;
          find(digits, index - 1);
        }
    }
    find(digits, digits.length - 1);
    return digits;
};
console.log(plusOne([9,9]));
