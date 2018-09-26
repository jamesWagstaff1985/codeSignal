/*
Some people are standing in a row in a park.
There are trees between them which cannot be moved.
Your task is to rearrange the people by their
heights in a non-descending order without
moving the trees. People can be very tall!
*/
function sortByHeight(a) {
    let arr = []
      for(let i = 0; i < a.length; i++){
        if(a[i] == -1) {
          arr.push(i)
        }
      }
      a.sort(function(a, b){return a-b})
      a.splice(a.indexOf(-1), a.lastIndexOf(-1)+1)
      for(let j = 0; j < arr.length; j++){
        a.splice(arr[j], 0, -1)
      }
    return a
