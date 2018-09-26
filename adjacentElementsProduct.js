/*
Given an array of integers, find the pair of
adjacent elements that has the largest product and return that product.
*/

function adjacentElementsProduct(inputArray) {
    let max = inputArray[0] * inputArray[1];
        for(let i = 0; i < inputArray.length-1; i++){
          max = max >= inputArray[i] * inputArray[i+1] ? max : inputArray[i] * inputArray[i+1]
        }
        return max
}
