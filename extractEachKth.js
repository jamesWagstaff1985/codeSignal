/*
Given array of integers, remove each kth element from it.
*/

function extractEachKth(inputArray, k) {
   let arr = []
   for(let i = inputArray.length; i >= 0; i--){
        if(i%k!==0){arr.unshift(inputArray[i-1])}
      }
      return arr
}
