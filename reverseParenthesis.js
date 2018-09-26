/*
You have a string s that consists of English letters,
punctuation marks, whitespace characters, and brackets.
It is guaranteed that the parentheses in s form a regular bracket sequence.
Your task is to reverse the strings contained in each pair of
matching parentheses, starting from the innermost pair.
The results string should not contain any parentheses.
*/
function reverseParentheses(s) {
   while(s.includes('(')||s.includes('[')){
          let result = s.match(/(\[[a-z\?\!\s]+\]|\([a-z\?\!\s]+\))/gi)
        while(result.length > 0){
          s = s.replace(result[0],[...result[0]].reverse().join().replace(/[,\(\)\[\]]/g, ''))
          result.shift()
          }
      }
      return s
}
