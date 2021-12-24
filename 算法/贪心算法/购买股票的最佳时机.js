/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let pre = 0;
  let current = 0;
  let index = 0;
  for(let i = 1; i < prices.length; i++) {
    if(pre >= 0) {
        current = prices[i] - prices[index];
        if(current > pre) {
          pre = current;
          // index = i;
        } else if(current < 0){
          index = i;
        }
    } else {
        current = prices[i] - prices[i - 1];
        if(current > 0) {
          index = i;
          pre = current;
        }
    }
  }
  if(pre <= 0) {
    return 0;
  } else {
    return pre;
  }
};