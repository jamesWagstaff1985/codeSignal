/*
Given two strings,
find the number of common characters between them.
*/

function commonCharacterCount(s1, s2) {
    let count = 0
      while(s1.length > 0){
        if(s2.includes(s1.charAt(0))){
          count ++
          s2 = s2.slice(0, s2.indexOf(s1.charAt(0))) + s2.slice(s2.indexOf(s1.charAt(0))+1, s2.length)
          s1 = s1.slice(1, s1.length)
        }else{
          s1 = s1.slice(1, s1.length)
        }
      }
      return count
}
