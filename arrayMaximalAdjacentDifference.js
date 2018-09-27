/*
Given an array of integers, find the maximal absolute difference between any
two of its adjacent elements.
*/

function arrayMaximalAdjacentDifference(inputArray) {
   let maxDiff = Math.abs(inputArray[0] - inputArray[1])
    for(let i = 1; i < inputArray.length - 1; i++){
      maxDiff = Math.abs(inputArray[i] - inputArray[i+1]) > maxDiff ? Math.abs(inputArray[i] - inputArray[i+1]) : maxDiff
    }
  return maxDiff
}
