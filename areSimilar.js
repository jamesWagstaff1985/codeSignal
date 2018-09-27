/*
Two arrays are called similar if one can be obtained from another by swapping
at most one pair of elements in one of the arrays.
Given two arrays a and b, check whether they are similar.
*/
function areSimilar(a, b) {
      let differentValues = [];
      for(let i = 0; i < a.length; i++){
        if(a[i]!==b[i]) differentValues.push(i);
      }
      return differentValues.length <= 2 && a[differentValues[0]] === b[differentValues[1]] && a[differentValues[1]] === b[differentValues[0]]
    }
