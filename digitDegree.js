/*
Let's define digit degree of some positive integer as the number of times we need
to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.
*/
function digitDegree(n) {
    let count = 0
    function addDigits(n){
      return n.toString().split('').reduce((a, b)=>parseInt(a)+parseInt(b))
    }
    while(n.toString().length > 1){
      n = addDigits(n)
      count ++
    }
    return count
}
