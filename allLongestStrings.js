 /*
 Given an array of strings,
 return another array containing all of its longest strings.
 */

 function allLongestStrings(inputArray) {
      // Get max length
      let longest = inputArray[0].length;
      inputArray.forEach(function(index){
        longest = longest < index.length ? index.length : longest
      })
      // place all strings of longest size in a new array
      let myArray = []
      inputArray.forEach(function(index){
        if(index.length === longest) myArray.push(index)
      })
      return myArray
}
