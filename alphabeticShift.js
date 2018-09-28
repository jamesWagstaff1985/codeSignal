/*
Given a string, replace each its character by the next one in
the English alphabet (z would be replaced by a).
*/
function alphabeticShift(inputString) {
      return inputString.split('').map(index => index.charCodeAt(0) === 122 ? 'a' : String.fromCharCode(index.charCodeAt(0) + 1)).join('')
}
