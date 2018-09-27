/*
Given a string, find out if its characters
can be rearranged to form a palindrome.
*/
function palindromeRearranging(inputString) {
    let obj = {}
      let possiblePalindrome = false
      inputString.split('').map(function(index){
        if(index in obj){
          obj[index] ++
        }else{
          obj[index] = 1
        }
      })
      const occurences = Object.values(obj)
      let oddNumbers = occurences.filter( amount => (amount % 2) === 1)
      if(inputString.length % 2 === 1){
        return oddNumbers.length === 1
      }else{
        return oddNumbers.length < 1
      }
}
