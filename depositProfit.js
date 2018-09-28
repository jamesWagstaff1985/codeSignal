/*
You have deposited a specific amount of money into your bank account.
Each year your balance increases at the same growth rate. With the
assumption that you don't make any additional deposits, find out how
long it would take for your balance to pass a specific threshold. Of
course you don't want to wait too long, so you know that the answer is
not greater than 6.
*/
function depositProfit(deposit, rate, threshold) {
    let count = 0
      while(deposit < threshold){
        deposit += deposit / (100/rate);
        count ++
      }
      return count
}
